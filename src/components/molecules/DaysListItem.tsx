import React, { FC } from 'react';
import { Button } from 'components/atoms/Button/Button';
import { InfoWrapper, ValueParagraph, Wrapper, SingleDayTitle } from './DaysListItem.style';

interface IDaysListItemProps {
  date: string;
  maxTemp: string;
  meanTemp: string;
  minTemp: string;
  weatherDesc: string;
}

const DaysListItem: FC<IDaysListItemProps> = ({ date, maxTemp, meanTemp, minTemp, weatherDesc }) => {
  return (
    <Wrapper {...{ weatherDesc }}>
      <SingleDayTitle>{date}</SingleDayTitle>
      <InfoWrapper>
        <ValueParagraph>{maxTemp} °C</ValueParagraph>
        <ValueParagraph>{meanTemp} °C</ValueParagraph>
        <ValueParagraph>{minTemp} °C</ValueParagraph>
        <ValueParagraph>{weatherDesc}</ValueParagraph>
        <Button>more info</Button>
      </InfoWrapper>
    </Wrapper>
  );
};

export default DaysListItem;
