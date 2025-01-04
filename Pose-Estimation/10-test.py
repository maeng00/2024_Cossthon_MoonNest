import cv2 as cv
import mediapipe as mp

mp_pose = mp.solutions.pose
mp_drawing = mp.solutions.drawing_utils
mp_styles = mp.solutions.drawing_styles

pose = mp_pose.Pose(static_image_mode=False, enable_segmentation=True, min_detection_confidence=0.5, min_tracking_confidence=0.5)

# 영상 파일 경로로 변경
cap = cv.VideoCapture('ch10/baby.mp4')  # 'baby_video.mp4'를 원하는 영상 파일명으로 수정

# 비디오 작성기 설정
fourcc = cv.VideoWriter_fourcc(*'XVID')  # 동영상 형식 (여기서는 XVID로 설정)
out = cv.VideoWriter('ch10/output_video.mp4', fourcc, 30.0, (640, 480))  # 출력 동영상 설정


while True:
    ret, frame = cap.read()
    if not ret:
        print('프레임 획득에 실패하여 루프를 나갑니다.')
        break
    
    res = pose.process(cv.cvtColor(frame, cv.COLOR_BGR2RGB))
    
    if res.pose_landmarks:
        mp_drawing.draw_landmarks(frame, res.pose_landmarks, mp_pose.POSE_CONNECTIONS, 
                                  landmark_drawing_spec=mp_styles.get_default_pose_landmarks_style())
    
    # 아기의 모션을 추적할 수 있는 추가적인 코드(예: 움직임 감지 등)
    # 예시: 머리 위치 추적
    if res.pose_landmarks:
        nose = res.pose_landmarks.landmark[mp_pose.PoseLandmark.NOSE]
        print(f"아기의 코 위치: x={nose.x}, y={nose.y}, z={nose.z}")

    # 동영상으로 저장
    out.write(frame)
    
    cv.imshow('MediaPipe pose', frame)  # 좌우 반전 없이 원본 프레임을 출력
    if cv.waitKey(5) == ord('q'):
        break

cap.release()
out.release()  # 동영상 저장 마무리
cv.destroyAllWindows()
