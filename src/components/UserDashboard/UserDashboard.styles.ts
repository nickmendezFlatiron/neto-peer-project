import styled from "styled-components";
import { COLORS } from "../../styles/colors";

export const UserDashboardRoot = styled.div`
  background-color: ${COLORS.white};

  h1 {
    color: ${COLORS.blue};
    font-size: 4rem;
    margin: 2rem 0 0;
  }

  h2 {
    color: ${COLORS.blue};
    font-size: 1.35rem;
    margin: 0.5rem 0;
  }
`;
