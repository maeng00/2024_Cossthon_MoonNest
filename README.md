<!-- <img src="https://github.com/user-attachments/assets/39e4cbde-2e12-4636-b680-49dcc2ccebf4" width="100%"/> -->

# [1st 최우수상 수상] 제3회 2024 SM@ COSSTHON - "MoonNest": AI 기반 영유아 행동 발달 추적 서비스 (이상해씨팀)
- "제3회 2024 SM@ COSSTHON" 1st 최우수상 수상   
<div align="center">
  <img src="https://github.com/user-attachments/assets/66ee4f9b-b6a1-4a4a-90f3-b3670335fed6" width="300px"/>
</div>
<br/>
<br/>

## 1. Project Overview
- 프로젝트 이름: **"MoonNest"**
- 프로젝트 설명: AI 기반 영유아 행동 발달 추적 서비스
- 프로젝트 기간: 2024.12.26 ~ 2024.12.27 (1박2일)
<br/>

## 2. Team Members
Team: **"이상해씨팀"**
| 김재관 | 구유진 | 맹의현 | 유세리 | 
|:------:|:------:|:------:|:------:|
| PM/BE | Design/PPT | FE/CV | Design/PPT |
<br/>

## 3. Key Points
- **유아 행동 발달 모니터링**:
  - 영상을 기반으로 영유아를 관찰
  - 자세 추정 기술을 이용하여 영유아의 출생 개월별 동작 수행을 모니터링 및 기록
  <br />
  <img src="https://github.com/user-attachments/assets/e2c2d45b-0018-4e6e-b1eb-e4b539b2891a" width="600px"/>

- **행동 발달 상태 진단 및 레포트 제공**:
  - 영상 모니터링 레포트를 주차별로 제공하고 또래와 비교하여 피드백 제공
  <br />
  <img src="https://github.com/user-attachments/assets/267cd442-022a-4ebc-951b-45b00fbddee0" width="300px"/>

- **맞춤형 양육 가이드 제공**:
  - 분석된 데이터를 기반으로 영유아의 출산 개월별 행동 발달에 필요한 동작 가이드
  - 발달 장애가 의심될 경우 근처 의료 기관 연계
  <br />
  <img src="https://github.com/user-attachments/assets/5cb9a775-3e41-4e28-8883-754ee97f3258" width="500px"/>
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

## 6. Demo
<img src="https://github.com/user-attachments/assets/20d967f7-8590-4b62-865f-555b5c022043" width="800px"/>
<br/>
<br/>

## 7. Presentation PDF
- 프로젝트 자세히 알아보기<br />[📄 MoonNest_PDF](https://github.com/maeng99/2024_Cossthon_MoonNest/blob/main/2024_SM%40COSSTHON_MoonNest_pdf.pdf)
