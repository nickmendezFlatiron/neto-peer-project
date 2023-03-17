import styled from "styled-components";
import { COLORS } from "../../styles/colors";

export const HabitDashboardRoot = styled.div`
  background-color: ${COLORS.white};
  height: 75vh;
  padding: 5rem 5rem 2rem;

  .habitContainer {
    display: flex;
    flex-flow: column nowrap;
    gap: 1.75rem;
    height: 100%;
    margin: 0 auto;
    width: 50%;
  }

  .habitName,
  .habitDesc,
  .habitProgress,
  .habitLogs {
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    gap: 0.5rem;
    justify-content: space-between;
    margin: 0;

    .habitHeader {
      color: ${COLORS.black};
      font-size: 1.1rem;
      font-weight: bold;
      text-align: right;
      width: 25%;
    }

    .habitInfo {
      color: ${COLORS.blue};
      font-size: 1.25rem;
      text-align: left;
      width: 70%;
    }
  }

  .habitName > .habitInfo {
    color: ${COLORS.red};
    font-size: 2rem;
    font-weight: bold;
  }

  .habitLogs {
    margin-top: 2rem;

    .habitInfo {
      table {
        /* border: 2px solid darkblue; */
        font-size: 1rem;
        text-align: center;
        width: 100%;

        thead tr,
        tbody tr:nth-child(even) {
          background-color: ${COLORS.lightblue};
        }

        .missed {
          color: ${COLORS.lightred};
        }

        th {
          font-size: 1.25rem;
          width: 25%;
        }

        td {
          width: 25%;
        }
      }
    }
  }

  .backBtn {
    background-color: ${COLORS.transparent};
    border: ${COLORS.transparent};
    border-radius: 0;
    bottom: unset;
    color: ${COLORS.black};
    cursor: pointer;
    font-size: 1.5rem;
    left: 3%;
    padding: 0;
    right: unset;
    text-transform: none;
    top: 7%;
    transition: color 0.25s ease 0s;

    &:hover {
      background-color: ${COLORS.transparent};
      border: ${COLORS.transparent};
      color: ${COLORS.blue};
    }
  }
`;
