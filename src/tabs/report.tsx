import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  Label,
} from "recharts";
import { motion } from "framer-motion";
import Button from "../components/button.tsx";
import Nav from "../components/nav.tsx";
import WeekRange from "../components/weekRange.tsx";
import WeekData from "../mockup_data/weekData.tsx";
import BottomInfo from "../components/bottomInfo.tsx";
import "../App.css";

const data = WeekData();

export default function Report() {
  const defaultDate = moment(moment().subtract(1, "week").toDate()).startOf(
    "isoWeek"
  );
  const [selectedDate, setSelectedDate] = useState(defaultDate);

  const handleDateSelect = (selectedDate: Date) => {
    setSelectedDate(selectedDate); // Update the selected date in the state
  };

  const renderCustomLegend = (props) => {
    const { payload } = props;
    return (
      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          padding: "0",
          margin: "0",
        }}
      >
        {payload.map((entry, index) => (
          <li
            key={`item-${index}`}
            style={{
              marginRight: 20,
              color: "#0D2259",
              fontFamily: "Pretendard-Regular",
              fontSize: "13px",
            }}
          >
            <span
              style={{
                backgroundColor: entry.color,
                padding: "0 6px",
                marginRight: 5,
              }}
            >
              &nbsp;
            </span>
            {entry.value}
          </li>
        ))}
      </ul>
    );
  };

  const calculateAverageWork = (weekData) => {
    const totalWork = weekData.reduce((sum, day) => sum + day.발달상태, 0);
    return (totalWork / weekData.length).toFixed(2);
  };

  const calculateAverage = (weekData, key) => {
    const total = weekData.reduce((sum, day) => sum + day[key], 0);
    return (total / weekData.length).toFixed(2);
  };

  console.log(moment(selectedDate).format("YYYY-MM-DD"));

  return (
    <div>
      <Nav type="logOut" />
      <div>
        <div
          style={{
            position: "absolute",
            top: " 0",
            left: "0",
            width: "100vw",
            height: "100vh",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "95%",
              margin: "80px 0 100px 5%",
              height: "50px",
              borderRadius: "20px",
            }}
          >
            <div
              style={{
                textAlign: "left",
                marginBottom: "15px",
                fontFamily: "Pretendard-SemiBold",
              }}
            >
              <span
                style={{
                  fontFamily: "Pretendard-ExtraBold",
                  fontSize: "28px",
                  color: "#0D2259",
                }}
              >
                주간 우리아이 발달 분석 및 피드백
              </span>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "93%",
              }}
            >
              <div style={{ width: "430px" }}>
                <div
                  style={{
                    width: "100%",
                    height: "50px",
                    borderRadius: "20px",
                    marginBottom: "20px",
                    backgroundColor: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px #ddd solid",
                  }}
                >
                  <WeekRange onDateSelect={handleDateSelect} />
                </div>
                {data.filter(
                  (week) =>
                    week.start_date ===
                    moment(selectedDate).format("YYYY-MM-DD")
                ).length === 0 ? (
                  <div
                    style={{
                      width: "1360px",
                      height: "455px",
                      backgroundColor: "#fff",
                      borderRadius: "20px",
                      display: "flex",
                      alignItems: "center",
                      border: "1px #ddd solid",
                    }}
                  >
                    <div
                      style={{
                        width: "97%",
                        height: "420px",
                        margin: "0 auto",
                        backgroundColor: "#eee",
                        borderRadius: "20px",
                        overflow: "auto",
                        zIndex: "2",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "Pretendard-SemiBold",
                          fontSize: "19px",
                          paddingTop: "200px",
                        }}
                      >
                        작성된 일정이 없거나, 한주차 일정이 모두 작성되지
                        않았습니다.
                      </div>
                      <div
                        style={{
                          fontFamily: "Pretendard-Regular",
                          fontSize: "13px",
                          color: "#888",
                          marginTop: "5px",
                        }}
                      >
                        해당되는 주차에 모든 일정이 작성되어 있어야 주간 분석 및
                        피드백을 제공합니다.
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    style={{
                      width: "100%",
                      height: "455px",
                      backgroundColor: "#fff",
                      borderRadius: "20px",
                      border: "1px #ddd solid",
                    }}
                  >
                    <div
                      style={{
                        width: "360px",
                        fontSize: "20px",
                        fontFamily: "Pretendard-SemiBold",
                        margin: "0 auto",
                        padding: "15px 0",
                        textAlign: "left",
                      }}
                    >
                      이번주 우리아이 발달 상태
                    </div>

                    {data.map((week) =>
                      week.start_date ===
                      moment(selectedDate).format("YYYY-MM-DD") ? (
                        <div
                          style={{
                            width: "360px",
                            height: "485px",
                            margin: "0 auto",
                          }}
                        >
                          <div>
                            <BarChart
                              width={360}
                              height={190}
                              data={week.week_day}
                              margin={{
                                right: 20,
                                left: 20,
                                bottom: 25,
                              }}
                              barSize={10}
                            >
                              <CartesianGrid
                                horizontal={false}
                                vertical={false}
                              />
                              <ReferenceLine y={2} stroke="#eee" />
                              <ReferenceLine y={4} stroke="#eee" />
                              <ReferenceLine y={6} stroke="#eee" />
                              <ReferenceLine y={8} stroke="#eee" />
                              <XAxis
                                dataKey="name"
                                tick={{
                                  fontFamily: "Pretendard-Regular",
                                  fontSize: 14,
                                  fill: "#999",
                                }}
                              />
                              <YAxis domain={[0, 10]} hide={true} />
                              <Tooltip />
                              <Legend content={renderCustomLegend} />
                              <Bar
                                dataKey="발달상태"
                                stackId="a"
                                fill="#4470F3"
                              />
                            </BarChart>
                          </div>

                          <div style={{ textAlign: "left" }}>
                            <div
                              style={{
                                fontFamily: "Pretendard-SemiBold",
                                fontSize: "19px",
                                marginBottom: "10px",
                              }}
                            >
                              주중 평균 발달 점수:
                              <span
                                style={{
                                  fontFamily: "Pretendard-ExtraBold",
                                  fontSize: "36px",
                                  color: "#193A97",
                                  paddingLeft: "20px",
                                }}
                              >
                                {calculateAverageWork(week.week_day)}
                              </span>
                            </div>
                            <div
                              style={{
                                width: "360px",
                                height: "115px",
                                margin: "0 auto",
                                fontFamily: "Pretendard-Regular",
                                fontSize: "14px",
                                overflow: "auto",
                              }}
                            >
                              <div style={{ padding: "10px 10px 5px" }}>
                                • 우리 아이의 발달은 또래와 잘 어울리는 수준으로
                                건강하게 성장하고 있습니다.
                              </div>
                              <div style={{ padding: "10px 10px 5px" }}>
                                • 앞으로도 꾸준한 관심과 사랑으로 아이의 성장을
                                지켜봐 주세요!
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <></>
                      )
                    )}
                  </div>
                )}
              </div>

              {data.filter(
                (week) =>
                  week.start_date === moment(selectedDate).format("YYYY-MM-DD")
              ).length === 0 ? (
                <></>
              ) : (
                <div
                  style={{
                    width: "860px",
                    height: "505px",
                    borderRadius: "20px",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "165px",
                      backgroundColor: "#fff",
                      marginBottom: "20px",
                      borderRadius: "20px",
                      border: "1px #ddd solid",
                    }}
                  >
                    <div
                      style={{
                        width: "800px",
                        fontSize: "20px",
                        fontFamily: "Pretendard-SemiBold",
                        margin: "0 auto",
                        padding: "15px 0",
                        textAlign: "left",
                      }}
                    >
                      종합 피드백
                    </div>
                    {data.map((week) =>
                      week.start_date ===
                      moment(selectedDate).format("YYYY-MM-DD") ? (
                        <div
                          style={{
                            width: "800px",
                            height: "155px",
                            margin: "0 auto",
                            fontFamily: "Pretendard-Regular",
                            fontSize: "14px",
                            textAlign: "left",
                            overflow: "auto",
                          }}
                        >
                          <div style={{ padding: "10px 10px 5px" }}>
                            • 우우리 아이는 대근육과 소근육 발달 모두 또래
                            수준으로 건강하게 성장하고 있습니다! 생후
                            4~5개월에는 엎드린 자세에서 고개를 들거나 손으로
                            물건을 쥐는 등의 행동을 관찰할 수 있어요.
                          </div>
                          <div style={{ padding: "10px 10px 5px" }}>
                            • 지금처럼 아이와의 즐거운 상호작용을 이어가며,
                            사랑과 관심으로 지켜봐 주세요!
                          </div>
                        </div>
                      ) : (
                        <></>
                      )
                    )}
                  </div>

                  <div
                    style={{
                      width: "100%",
                      height: "340px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        width: "410px",
                        backgroundColor: "#fff",
                        borderRadius: "20px",
                        border: "1px #ddd solid",
                      }}
                    >
                      <div
                        style={{
                          width: "370px",
                          fontSize: "20px",
                          fontFamily: "Pretendard-SemiBold",
                          margin: "0 auto",
                          padding: "15px 0",
                          textAlign: "left",
                        }}
                      >
                        대근육 운동 피드백
                      </div>

                      {data.map((week) =>
                        week.start_date ===
                        moment(selectedDate).format("YYYY-MM-DD") ? (
                          <div
                            style={{
                              width: "370px",
                              height: "300px",
                              margin: "0 auto",
                            }}
                          >
                            <div>
                              <LineChart
                                width={360}
                                height={140}
                                data={week.week_day}
                                margin={{
                                  right: 20,
                                  left: 20,
                                }}
                              >
                                <CartesianGrid
                                  horizontal={false}
                                  vertical={false}
                                />
                                {[...Array(10)].map((_, index) => (
                                  <ReferenceLine
                                    key={index}
                                    y={index * 20}
                                    stroke="#eee"
                                  >
                                    {/*<Label value={`${index * 10}`} position="insideTopLeft" />*/}
                                  </ReferenceLine>
                                ))}
                                <XAxis
                                  dataKey="name"
                                  tick={{
                                    fontFamily: "Pretendard-Regular",
                                    fontSize: 14,
                                    fill: "#999",
                                  }}
                                />
                                <YAxis hide={true} />
                                <Tooltip />
                                <Line
                                  type="monotone"
                                  dataKey="Exercise"
                                  stroke="#02A9A1"
                                  strokeWidth={2}
                                />
                              </LineChart>
                            </div>

                            <div style={{ textAlign: "left" }}>
                              <div
                                style={{
                                  fontFamily: "Pretendard-SemiBold",
                                  fontSize: "19px",
                                  marginBottom: "10px",
                                }}
                              >
                                평균 운동 횟수:
                                <span
                                  style={{
                                    fontFamily: "Pretendard-ExtraBold",
                                    fontSize: "36px",
                                    color: "#02A9A1",
                                    paddingLeft: "20px",
                                  }}
                                >
                                  {calculateAverage(week.week_day, "Exercise")}
                                </span>
                                회
                              </div>
                              <div
                                style={{
                                  width: "360px",
                                  height: "60px",
                                  margin: "0 auto",
                                  fontFamily: "Pretendard-Regular",
                                  fontSize: "14px",
                                  overflow: "auto",
                                }}
                              >
                                <div style={{ padding: "10px 10px 5px" }}>
                                  • 우리 아이는 대근육 발달이 또래 수준으로 잘
                                  진행되고 있어요! 앞으로도 지속해주세요!
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <></>
                        )
                      )}
                    </div>

                    <div
                      style={{
                        width: "410px",
                        backgroundColor: "#fff",
                        borderRadius: "20px",
                        border: "1px #ddd solid",
                      }}
                    >
                      <div
                        style={{
                          width: "370px",
                          fontSize: "20px",
                          fontFamily: "Pretendard-SemiBold",
                          margin: "0 auto",
                          padding: "15px 0",
                          textAlign: "left",
                        }}
                      >
                        소근육 운동 피드백
                      </div>

                      {data.map((week) =>
                        week.start_date ===
                        moment(selectedDate).format("YYYY-MM-DD") ? (
                          <div
                            style={{
                              width: "370px",
                              height: "300px",
                              margin: "0 auto",
                            }}
                          >
                            <div>
                              <LineChart
                                width={360}
                                height={140}
                                data={week.week_day}
                                margin={{
                                  right: 20,
                                  left: 20,
                                }}
                              >
                                <CartesianGrid
                                  horizontal={false}
                                  vertical={false}
                                />
                                {[...Array(10)].map((_, index) => (
                                  <ReferenceLine
                                    key={index}
                                    y={index * 20}
                                    stroke="#eee"
                                  >
                                    {/*<Label value={`${index * 10}`} position="insideTopLeft" />*/}
                                  </ReferenceLine>
                                ))}
                                <XAxis
                                  dataKey="name"
                                  tick={{
                                    fontFamily: "Pretendard-Regular",
                                    fontSize: 14,
                                    fill: "#999",
                                  }}
                                />
                                <YAxis hide={true} />
                                <Tooltip />
                                <Line
                                  type="monotone"
                                  dataKey="Sleep"
                                  stroke="#FEC515"
                                  strokeWidth={2}
                                />
                              </LineChart>
                            </div>

                            <div style={{ textAlign: "left" }}>
                              <div
                                style={{
                                  fontFamily: "Pretendard-SemiBold",
                                  fontSize: "19px",
                                  marginBottom: "10px",
                                }}
                              >
                                평균 운동 횟수:
                                <span
                                  style={{
                                    fontFamily: "Pretendard-ExtraBold",
                                    fontSize: "36px",
                                    color: "#FEC515",
                                    paddingLeft: "20px",
                                  }}
                                >
                                  {calculateAverage(week.week_day, "Sleep")}
                                </span>
                                회
                              </div>
                              <div
                                style={{
                                  width: "360px",
                                  height: "60px",
                                  margin: "0 auto",
                                  fontFamily: "Pretendard-Regular",
                                  fontSize: "14px",
                                  overflow: "auto",
                                }}
                              >
                                <div style={{ padding: "10px 10px 5px" }}>
                                  • 우리 아이는 소근육 발달이 또래 수준으로 잘
                                  진행되고 있어요! 다양한 질감의 장난감을 잡고
                                  탐색할 수 있도록 도와주세요.
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <></>
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
