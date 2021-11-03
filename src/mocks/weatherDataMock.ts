import { Weather } from 'types/Weather.types';

export const weatherDataMock: Weather[] = [
  {
    date: 'Monday',
    maxTemp: '16',
    meanTemp: '12',
    minTemp: '8',
    weatherDesc: 'cloudy',
  },
  {
    date: 'Tuesday',
    maxTemp: '20',
    meanTemp: '15',
    minTemp: '10',
    weatherDesc: 'sunny',
  },
  {
    date: 'Wednesday',
    maxTemp: '15',
    meanTemp: '10',
    minTemp: '5',
    weatherDesc: 'rainy',
  },
  {
    date: 'Thursday',
    maxTemp: '20',
    meanTemp: '16',
    minTemp: '12',
    weatherDesc: 'sunny',
  },
  {
    date: 'Friday',
    maxTemp: '10',
    meanTemp: '8',
    minTemp: '5',
    weatherDesc: 'rainy',
  },
];
