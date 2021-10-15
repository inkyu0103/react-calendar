import styled from "@emotion/styled";
import back from "../assets/back.png";
import next from "../assets/next.png";
import replay from "../assets/replay.png";
import { CalendarButton } from ".";

export const CalendarHeader = ({
  year,
  month,
  goNextMonth,
  goPreviousMonth,
  goToday,
}) => {
  return (
    <CalendarHeaderContainer>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <CalendarButton
          width={"16px"}
          height={"16px"}
          image={back}
          handleClick={goPreviousMonth}
        />

        <CalendarHeaderTimeWrapper>
          {`${year}년 ${month}월`}
        </CalendarHeaderTimeWrapper>
        <CalendarButton
          width={"16px"}
          height={"16px"}
          image={next}
          handleClick={goNextMonth}
        />
      </div>
      <CalendarButton
        width={"16px"}
        height={"16px"}
        image={replay}
        handleClick={goToday}
      />
    </CalendarHeaderContainer>
  );
};

const CalendarHeaderContainer = styled.header`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid green;
  background: #6ad794;
`;

const CalendarHeaderTimeWrapper = styled.div`
  font-size: 20px;
`;

/**
 *
 * 헤더에 필요한 것은 월.일.그리고 버튼을 눌렀을 때 함수.
 *
 */
