<img src="https://github.com/user-attachments/assets/39e4cbde-2e12-4636-b680-49dcc2ccebf4" width="100%"/>

# 👶[1st 최우수상 수상] 제3회 2024 SM@ COSSTHON-MoonNest: AI 기반 영유아 행동 발달 추적 서비스 (이상해씨팀)👶
- "제3회 2024 SM@ COSSTHON" 1st 최우수상 수상   
<div align="center">
  <img src="https://github.com/user-attachments/assets/66ee4f9b-b6a1-4a4a-90f3-b3670335fed6" width="300px"/>
</div>
<br/>
<br/>

## 1. Project Overview
- **프로젝트 이름: MoonNest**
- 프로젝트 설명: AI 기반 영유아 행동 발달 추적 서비스
<br/>

## 2. Team Members
| 김재관 | 구유진 | 맹의현 | 유세리 | 
|:------:|:------:|:------:|:------:|
| PM/BE | Design/PPT | FE/CV | Design/PPT |
<br/>

## 3. Key Features
- **행동 발달 모니터링**:
  - 영상을 기반으로 영유아를 관찰
  - 자세 추정 기술을 이용하여 영유아의 출생 개월별 동작 수행을 모니터링 및 기록
  <br />
  <img src="https://github.com/user-attachments/assets/e2c2d45b-0018-4e6e-b1eb-e4b539b2891a" width="600px"/>

- **행동 발달 상태 진단 및 솔루션 제공**:
  - 영상 모니터링 통계 결과를 주차별로 제공하고 또래와 비교하여 피드백 제공
  <br />
  <img src="https://github.com/user-attachments/assets/691d1ff4-0f2a-477d-a50e-5c02e0e910e8" width="600px"/>

- **나만의 플래너 작성 규칙**:
  - 자신의 목표로 하는 워라밸 비율, 하루 수면시간, 하루 운동시간 및 개인적인 세부사항을 설정해둠으로써 AI를 통한 피드백 시 부가적인 정보로 활용 가능
  <br />
  <img src="https://github.com/user-attachments/assets/05c6156d-93ed-4ace-b5a2-5fa8021bb4b6" width="600px"/>

- **일정 성취도 기록**:
  - 편리한 UI/UX를 제공하여 하루 일정에 대해서 (달성, 연기, 미달성)을 기록 가능
  <br />
  <img src="https://github.com/user-attachments/assets/34829d81-3c6d-46b4-a92d-e35fc2bf9c48" width="600px"/>
<br/>
<br/>

## 4. Technology Stack
- **Design:** Figma
  
- **FrontEnd:** React.js
  
- **BackEnd:** Spring
  
- **Database:** MySQL

- **Cooperation:** Git, Notion
<br/>

## 5. Project Structure
```plaintext
─2024_Cossthon_MoonNest
│  2024_SM@COSSTHON_MoonNest_demonstration.mp4
│  2024_SM@COSSTHON_MoonNest_pdf.pdf
│
├─Front-End/
│  │  .gitignore
│  │  eslint.config.js
│  │  index.html
│  │  package-lock.json
│  │  package.json
│  │  README.md
│  │  tsconfig.app.json
│  │  tsconfig.json
│  │  tsconfig.node.json
│  │  vite.config.ts
│  │
│  ├─public/
│  │  │  main.jpg
│  │  │
│  │  ├─btn/
│  │  │      logout_disabled.png
│  │  │      next.png
│  │  │      previous.png
│  │  │
│  │  ├─logo/
│  │  │      main_logo.png
│  │  │      small_logo.png
│  │  │
│  │  └─video/
│  │          baby_1.mp4
│  │          baby_processing_1.mp4
│  │          main_video.mp4
│  │
│  └─src/
│      │  App.css
│      │  App.tsx
│      │  index.css
│      │  main.tsx
│      │  vite-env.d.ts
│      │
│      ├─components/
│      │      bottomInfo.tsx
│      │      button.tsx
│      │      nav.tsx
│      │      scrollToTop.tsx
│      │      weekRange.tsx
│      │
│      ├─mockup_data/
│      │      weekData.tsx
│      │
│      └─tabs/
│              home.tsx
│              myPage.tsx
│              report.tsx
│              test.tsx
│
└─Pose-Estimation/
        10-test.py
```
<br/>

## 6. 발표 PDF
- 프로젝트 자세히 알아보기

[📄 Commit_PDF](https://github.com/maeng99/Commit-Front-End/blob/main/%EC%83%81%EB%AA%85%EB%8C%80%ED%95%99%EA%B5%90(%EC%84%9C%EC%9A%B8)_3%ED%8C%80_commit.pdf)
