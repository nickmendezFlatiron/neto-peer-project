import styled from "styled-components";
import { COLORS } from "../../styles/colors";

export const HabitCardRoot = styled.div`
  background-color: ${COLORS.white};
  border: 2.5px solid ${COLORS.black};
  border-radius: 0.25rem;
  cursor: pointer;
  display: flex;
  flex-flow: column nowrap;
  gap: 2rem;
  justify-content: space-around;
  padding: 2rem 1rem;
  scale: 1;
  text-align: center;
  transition: scale 0.25s ease;

  h2 {
    color: ${COLORS.blue};
    font-size: 2rem;
    margin: 0;
    text-transform: capitalize;
  }

  p {
    color: ${COLORS.blue};
    font-size: 1.25rem;
    margin: 0;
  }

  &:hover {
    background-color: ${COLORS.lightblue};
    border-color: ${COLORS.red};
    scale: 1.03;

    h2,
    p {
      color: ${COLORS.blue};
    }
  }
`;
