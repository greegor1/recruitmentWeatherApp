import React, { FC } from 'react';
import { Button } from 'components/atoms/Button/Button';
import { InfoWrapper, ValueParagraph, Wrapper, SingleDayTitle } from './DaysListItem.style';
import { Weather } from 'types/Weather.types';

const DaysListItem: FC<Omit<Weather, 'id'>> = ({ dayName, maxTemp, meanTemp, minTemp, weatherDesc }) => {
  return (
    <Wrapper {...{ weatherDesc }}>
      <SingleDayTitle>{dayName}</SingleDayTitle>
      <InfoWrapper>
        <ValueParagraph>max {maxTemp} °C</ValueParagraph>
        <ValueParagraph>avg {meanTemp} °C</ValueParagraph>
        <ValueParagraph>min {minTemp} °C</ValueParagraph>
        <ValueParagraph>desc: {weatherDesc}</ValueParagraph>
        <Button>more info</Button>
      </InfoWrapper>
    </Wrapper>
  );
};

export default DaysListItem;
