export interface WeatherProviderType {
  children?: React.ReactNode;
}

export interface Location {
  country: string;
  city: string;
}

export interface Weather {
  id: string;
  dayName: string;
  maxTemp: string;
  meanTemp: string;
  minTemp: string;
  weatherDesc: string;
}

export interface WeatherContextType {
  location: Location;
  weatherList: Weather[];
  handleSearchForm: (newLocation: Location) => void;
  handleClearFormState: (newLocation: Location) => void;
  isLoading: boolean;
}
