export interface WeatherProviderType {
  children?: React.ReactNode;
}

export interface Location {
  country: string;
  city: string;
}

export interface Weather {
  date: string;
  maxTemp: string;
  meanTemp: string;
  minTemp: string;
  weatherDesc: string;
}

export interface WeatherContextType {
  location: Location;
  weatherList: Weather[];
}
