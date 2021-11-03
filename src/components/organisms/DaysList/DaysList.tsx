import React, { useContext } from 'react';
import DaysListItem from 'components/molecules/DaysListItem';
import { WeatherContext } from 'providers/WeatherProvider';
import { StyledList } from './DaysList.style';
import { Title } from 'components/atoms/Title/Title';

const DaysList = () => {
  const {
    location: { city, country },
    weatherList,
  } = useContext(WeatherContext);

  return (
    <>
      <Title>
        Days list for {city}, {country}:
      </Title>
      <StyledList>
        {weatherList.map(({ date, ...rest }) => (
          <DaysListItem key={date} {...{ date, ...rest }} />
        ))}
      </StyledList>
    </>
  );
};

export default DaysList;
