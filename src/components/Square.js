import React from "react";
import styled from "@emotion/styled";

// STYLE Start
const Button = styled.button`
  background: rgb(194, 194, 194);
  background: linear-gradient(
    0deg,
    rgba(201, 201, 201, 0.603) 0%,
    rgba(209, 209, 209, 0.753) 100%
  );
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  margin-right: 5px;
  margin-top: 5px;
  padding: 0;
  text-align: center;
  border-radius: 5px;
  box-shadow: 2px 0px 6px slategray;
  &:hover {
    background-color: rgba(90, 90, 90, 0.575);
  }
  &:focus {
    outline: none;
  }
`;
// STYLE End

export default function Square({ value, onClick }) {
  return <Button onClick={onClick}>{value}</Button>;
}
