import { useWeatherContext } from 'providers/WeatherProvider';
import { useReducer, ChangeEvent } from 'react';
import { Location } from 'types/Weather.types';

const actionTypes = {
  inputChange: 'INPUT CHANGE',
  clearValues: 'CLEAR VALUES',
};

const { inputChange, clearValues } = actionTypes;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reducer = (state: Location, action: any) => {
  switch (action.type) {
    case inputChange:
      return {
        ...state,
        [action.field]: action.value,
      };
    case clearValues:
      return {
        ...action.initialFormState,
      };
    default:
      return state;
  }
};

const initialFormState: Location = {
  country: '',
  city: '',
};

export const useForm = () => {
  const { handleClearFormState } = useWeatherContext();
  const [formValue, dispatch] = useReducer(reducer, initialFormState);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: inputChange,
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleClearForm = () => {
    dispatch({ type: clearValues, initialFormState });
    handleClearFormState(initialFormState);
  };

  return {
    formValue,
    handleInputChange,
    handleClearForm,
  };
};
