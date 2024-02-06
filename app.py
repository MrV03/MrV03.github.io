from flask import Flask, render_template, Response
import cv2
from PIL import Image, ImageTk
import mediapipe as mp
import math

app = Flask(__name__)

class HandTrackerApp:
    def __init__(self):
        self.cap = cv2.VideoCapture(0)

        self.cap.set(cv2.CAP_PROP_FOURCC, cv2.VideoWriter_fourcc(*'MJPG'))
        self.cap.set(3, 1280)
        self.cap.set(4, 720)
        self.cap.set(5, 30)

        self.mp_hands = mp.solutions.hands
        self.hands = self.mp_hands.Hands()

        self.fist_threshold = 0.03
        self.time_threshold = 0.0
        self.closed_fist_start_time = None

        self.video_feed_generator = self.generate_frames()

    def __del__(self):
        self.cap.release()

    def generate_frames(self):
        while True:
            ret, frame = self.cap.read()
            if not ret:
                break

            frame = cv2.flip(frame, 1)

            rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

            results = self.hands.process(rgb_frame)

            if results.multi_hand_landmarks:
                for landmarks in results.multi_hand_landmarks:
                    for point in landmarks.landmark:
                        h, w, _ = frame.shape
                        x, y = int(point.x * w), int(point.y * h)
                        cv2.circle(frame, (x, y), 5, (0, 0, 0), -1)

                    for connection in self.mp_hands.HAND_CONNECTIONS:
                        start_point = landmarks.landmark[connection[0]]
                        end_point = landmarks.landmark[connection[1]]
                        h, w, _ = frame.shape
                        start_x, start_y = int(start_point.x * w), int(start_point.y * h)
                        end_x, end_y = int(end_point.x * w), int(end_point.y * h)
                        cv2.line(frame, (start_x, start_y), (end_x, end_y), (0, 255, 0), 2)

                    thumb_tip = landmarks.landmark[4]
                    index_finger_tip = landmarks.landmark[8]
                    distance = math.sqrt((thumb_tip.x - index_finger_tip.x)**2 + (thumb_tip.y - index_finger_tip.y)**2)

                    if distance < self.fist_threshold:
                        if self.closed_fist_start_time is None:
                            self.closed_fist_start_time = time.time()
                        else:
                            elapsed_time = time.time() - self.closed_fist_start_time
                            if elapsed_time >= self.time_threshold:
                                return  # Exit the generator

                    else:
                        self.closed_fist_start_time = None

            _, buffer = cv2.imencode('.jpg', frame)
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + buffer.tobytes() + b'\r\n\r\n')

    @app.route('/')
    def index():
        return render_template('index.html')

    @app.route('/video_feed')
    def video_feed():
        return Response(app.video_feed_generator, mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    app = HandTrackerApp()
    app.run(debug=True)
