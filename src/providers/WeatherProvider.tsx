import { weatherDataMock } from 'mocks/weatherDataMock';
import React, { createContext, useEffect, useState } from 'react';
import { Location, Weather, WeatherContextType, WeatherProviderType } from 'types/Weather.types';

export const WeatherContext = createContext<WeatherContextType>({
  location: {
    country: '',
    city: '',
  },
  weatherList: [],
});
// list nie arr

const WeatherProvider: React.FunctionComponent<WeatherProviderType> = ({ children }) => {
  const [location, setLocation] = useState<Location>({ country: '', city: '' });
  const [weatherList, setWeatherList] = useState<Weather[]>([]);

  //location zmienic na dane wyszukiwania np. searchLocationQuery
  //debounce lodash do wpisywania w imputy

  useEffect(() => {
    setLocation({ country: 'PL', city: 'Wrocław' });
    setWeatherList(weatherDataMock);
  }, []);

  return <WeatherContext.Provider value={{ location, weatherList }}>{children}</WeatherContext.Provider>;
};

export default WeatherProvider;
