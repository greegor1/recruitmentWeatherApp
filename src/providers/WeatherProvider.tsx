import React, { createContext, useContext, useEffect, useState } from 'react';
import { Location, Weather, WeatherContextType, WeatherProviderType } from 'types/Weather.types';
import { apiCall } from 'utils/apiCall';

export const WeatherContext = createContext<WeatherContextType>({
  location: {
    country: '',
    city: '',
  },
  weatherList: [],
  handleSearchForm: () => undefined,
  handleClearFormState: () => undefined,
  isLoading: false,
});

export const useWeatherContext = (): WeatherContextType => useContext(WeatherContext);

const WeatherProvider: React.FunctionComponent<WeatherProviderType> = ({ children }) => {
  const [location, setLocation] = useState<Location>({ country: '', city: '' });
  const [weatherList, setWeatherList] = useState<Weather[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = async () => {
    const apiData = await apiCall(location, setIsLoading);
    setWeatherList(apiData);
  };

  const handleSearchForm = (newLocation: Location) => setLocation(newLocation);

  const handleClearFormState = (emptyLocation: Location) => setLocation(emptyLocation);

  const context = { location, weatherList, handleSearchForm, handleClearFormState, isLoading };

  useEffect(() => {
    if (location.city && location.country) {
      fetchData();
    }
  }, [location]);

  return <WeatherContext.Provider value={context}>{children}</WeatherContext.Provider>;
};

export default WeatherProvider;
