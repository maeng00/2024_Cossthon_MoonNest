import React, { useState } from "react";
import styled, { css } from "styled-components";
import "../App.css";

type ButtonType = "primary" | "secondary" | "destructive" | "logout";
type Size = "small" | "medium" | "large";

type ButtonProps = {
  onClick?: () => void;
  type?: ButtonType;
  size?: Size;
  title: string;
};

const ButtonContainer = styled.div<{
  type: "primary" | "secondary" | "destructive" | "login";
  size: "small" | "medium" | "large" | "login";
}>`
  border: ${(props) => (props.type === "login" ? "none" : "1px #000 solid")};
  border-radius: ${(props) => (props.type === "login" ? "0" : "20px")};
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: flex;
  background-color: ${(props) =>
    props.type === "primary"
      ? "#2CC295"
      : props.type === "secondary"
      ? "#90BEAB"
      : props.type === "destructive"
      ? "#FFF6F6"
      : "#2CC295"};
  color: ${(props) =>
    props.type === "primary"
      ? "#fff"
      : props.type === "secondary"
      ? "#000"
      : props.type === "destructive"
      ? "#FF3E3E"
      : "#fff"};
  cursor: pointer;

  ${(props) =>
    props.size === "large" &&
    css`
      height: 45px;
      font-size: 18px;
      width: 350px;
      text-align: center;
    `}
  ${(props) =>
    props.size === "medium" &&
    css`
      height: 40px;
      font-size: 18px;
      width: 180px;
      text-align: center;
    `}
    ${(props) =>
    props.size === "small" &&
    css`
      height: 30px;
      font-size: 16px;
      width: 100px;
      text-align: center;
    `}
    ${(props) =>
    props.size === "login" &&
    css`
      height: 60px;
      font-size: 18px;
      width: 180px;
      text-align: center;
    `}
    &:hover {
    & p {
      font-family: Pretendard-Bold;
    }
  }
`;

const ButtonTitle = styled.p`
  font-family: Pretendard-Regular;
`;

export default function Button(props: ButtonProps) {
  const { type, size, title, onClick = () => {} } = props;
  const [hover, setHover] = useState(false);
  return (
    <ButtonContainer
      type={type}
      size={size}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <ButtonTitle>{title}</ButtonTitle>
    </ButtonContainer>
  );
}
