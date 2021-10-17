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
      <GoTodayContainer>
        <CalendarButton
          width={"16px"}
          height={"16px"}
          image={replay}
          handleClick={goToday}
        />
      </GoTodayContainer>
    </CalendarHeaderContainer>
  );
};

const CalendarHeaderContainer = styled.header`
  position: relative;
  display: flex;
  flex-grow: 1;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  background: #6ad794;
`;

const CalendarHeaderTimeWrapper = styled.div`
  font-size: 20px;
  font-weight: 900;
  color: #fff;
`;

const GoTodayContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

/**
 *
 * 헤더에 필요한 것은 월.일.그리고 버튼을 눌렀을 때 함수.
 *
 */
