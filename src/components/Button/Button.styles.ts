import styled from "styled-components";
import { COLORS } from "../../styles/colors";

export const Button = styled.button`
  background-color: ${COLORS.red};
  border: 2px solid ${COLORS.red};
  border-radius: 50px;
  color: ${COLORS.white};
  cursor: pointer;
  font-size: 1.35rem;
  font-weight: bold;
  line-height: 1.15;
  margin: 0;
  padding: 1.35rem;
  position: absolute;
  bottom: 3%;
  right: 5%;
  text-align: right;
  text-decoration: none;
  text-transform: capitalize;
  transition: background-color 0.35s ease, color 0.35s ease;
  width: auto;

  &:hover {
    background-color: ${COLORS.lightred};
    border: 2px solid ${COLORS.black};
    color: ${COLORS.black};
  }
`;
