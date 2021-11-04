import axios from 'axios';
import { Location, Weather } from 'types/Weather.types';

const API_KEY = process.env.REACT_APP_DATOCMS_TOKEN;
const API_URL = 'http://api.openweathermap.org/data/2.5/forecast?q=';

interface ApiDay {
  dt_txt: string;
  id: string;
  weather: {
    main: string;
  }[];
  main: {
    temp_max: number;
    temp_min: number;
    temp: number;
  };
}

const weekDays: string[] = [];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const convertSearchedWeather = (list: any) =>
  list.map((day: ApiDay) => {
    const nameOfDay = new Date(day.dt_txt).toLocaleString('en-us', { weekday: 'long' });

    if (!weekDays.includes(nameOfDay) && weekDays.length < 5) {
      weekDays.push(nameOfDay);
    }

    return {
      id: day.id,
      dayName: nameOfDay,
      maxTemp: day.main.temp_max,
      minTemp: day.main.temp_min,
      meanTemp: day.main.temp,
      weatherDesc: day.weather[0].main,
    };
  });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getDailyAverageWeather = (arr: any) =>
  weekDays.map((dayName, idx) => {
    const filteredByDay = arr.filter((item: Weather) => item.dayName === dayName);

    const maxTemp = filteredByDay.reduce((prev: Weather, current: Weather) => (prev.maxTemp > current.maxTemp ? prev : current)).maxTemp;

    const minTemp = filteredByDay?.reduce((prev: Weather, current: Weather) => (prev.maxTemp < current.maxTemp ? prev : current)).minTemp;

    const meanTemp = ((maxTemp + minTemp) / 2).toFixed(2);
    const weatherDesc = filteredByDay?.[0]?.weatherDesc;

    return {
      id: idx.toString(),
      dayName,
      minTemp,
      maxTemp,
      meanTemp,
      weatherDesc,
    };
  });

export const apiCall = async ({ city, country }: Location, setIsLoading: React.Dispatch<React.SetStateAction<boolean>>): Promise<Weather[]> => {
  const url = `${API_URL}${city},${country}&units=metric&appid=${API_KEY}`;
  setIsLoading(true);

  try {
    const {
      data: { list },
    } = await axios.get(url);

    const searchedWeatherArr = convertSearchedWeather(list);

    const averageDayWeatherArr: Weather[] = getDailyAverageWeather(searchedWeatherArr);

    return averageDayWeatherArr;
  } catch (error) {
    return [];
  } finally {
    setIsLoading(false);
  }
};
