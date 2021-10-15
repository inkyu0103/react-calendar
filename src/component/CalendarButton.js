import styled from "@emotion/styled";

export const CalendarButton = ({
  width,
  height,
  image = null,
  text = null,
  handleClick,
}) => {
  return (
    <CalendarButtonContainer
      width={width}
      height={height}
      image={image}
      onClick={handleClick}
    >
      {text}
    </CalendarButtonContainer>
  );
};

const CalendarButtonContainer = styled.button`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-size: cover;
  background-image: ${({ image }) => `url("${image}")`};
  background-color: transparent;
  background-repeat: none;
  border: none;
`;
