import React from 'react';
import DaysListItem from 'components/molecules/DaysListItem/DaysListItem';
import { useWeatherContext } from 'providers/WeatherProvider';
import { StyledList } from './DaysList.style';
import { Title } from 'components/atoms/Title/Title';

const DaysList = () => {
  const {
    location: { city, country },
    weatherList,
    isLoading,
  } = useWeatherContext();

  if (!city && !country) return <Title>Fill search inputs</Title>;

  if (isLoading) return <Title>Loading...</Title>;

  return (
    <>
      <Title>
        5 day weather for {city}, {country}:
      </Title>
      {weatherList.length ? (
        <StyledList>
          {weatherList.map(({ id, ...rest }) => (
            <DaysListItem key={id} {...{ ...rest }} />
          ))}
        </StyledList>
      ) : (
        <Title>No results for passed values</Title>
      )}
    </>
  );
};

export default DaysList;
