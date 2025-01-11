import React from "react";
import "../App.css";

// analysis.tsx
export default function WeekData() {
  return [
    {
      start_date: "2024-01-06",
      end_date: "2024-01-12",
      week_day: [
        { name: "월", Life: 4.5, 발달상태: 5.5, Exercise: 50, Sleep: 34 }, // Add Exercise data
        { name: "화", Life: 3.5, 발달상태: 6.5, Exercise: 47, Sleep: 32 },
        { name: "수", Life: 4, 발달상태: 6, Exercise: 62, Sleep: 45 },
        { name: "목", Life: 5, 발달상태: 5, Exercise: 40, Sleep: 35 },
        { name: "금", Life: 6, 발달상태: 4, Exercise: 63, Sleep: 29 },
        { name: "토", Life: 5, 발달상태: 5, Exercise: 50, Sleep: 36 },
        { name: "일", Life: 5, 발달상태: 5, Exercise: 46, Sleep: 26 },
      ],
    },
    {
      start_date: "2024-12-30",
      end_date: "2024-01-05",
      week_day: [
        { name: "월", Life: 2, 발달상태: 8, Exercise: 40, Sleep: 33 }, // Add Exercise data
        { name: "화", Life: 3.5, 발달상태: 6, Exercise: 60, Sleep: 34 },
        { name: "수", Life: 6, 발달상태: 4, Exercise: 55, Sleep: 42 },
        { name: "목", Life: 5, 발달상태: 5, Exercise: 47, Sleep: 29 },
        { name: "금", Life: 8, 발달상태: 6, Exercise: 45, Sleep: 29 },
        { name: "토", Life: 5, 발달상태: 6, Exercise: 66, Sleep: 28 },
        { name: "일", Life: 5, 발달상태: 4, Exercise: 50, Sleep: 38 },
      ],
    },
    {
      start_date: "2024-12-23",
      end_date: "2024-12-29",
      week_day: [
        { name: "월", Life: 4.5, 발달상태: 5.5, Exercise: 39, Sleep: 45 }, // Add Exercise data
        { name: "화", Life: 3.5, 발달상태: 6.5, Exercise: 60, Sleep: 32 },
        { name: "수", Life: 4, 발달상태: 6, Exercise: 45, Sleep: 25 },
        { name: "목", Life: 5, 발달상태: 5, Exercise: 40, Sleep: 28 },
        { name: "금", Life: 6, 발달상태: 4, Exercise: 35, Sleep: 31 },
        { name: "토", Life: 2, 발달상태: 8, Exercise: 50, Sleep: 28 },
        { name: "일", Life: 5, 발달상태: 5, Exercise: 65, Sleep: 30 },
      ],
    },
  ];
}
