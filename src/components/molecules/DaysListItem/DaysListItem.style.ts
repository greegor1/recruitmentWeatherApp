import { ThemeI } from 'assets/styles/theme';
import { Title } from 'components/atoms/Title/Title';
import styled from 'styled-components';
import { Weather } from 'types/Weather.types';

const getBgcImage = (theme: ThemeI, weatherDesc: string) => {
  switch (weatherDesc) {
    case 'Clouds':
      return theme.backgroundImage.cloudy;
    case 'Rain':
      return theme.backgroundImage.rainy;
    default:
      return theme.backgroundImage.sunny;
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getColor = (theme: ThemeI, children: any) => {
  const temperatureValue = +children[1];

  if (temperatureValue > 15) return theme.colors.success;
  if (temperatureValue >= 10) return theme.colors.warning;
  if (temperatureValue < 10) return theme.colors.error;
  return theme.colors.darkPurple;
};

export const Wrapper = styled.li<Pick<Weather, 'weatherDesc'>>`
  width: 18%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${({ theme, weatherDesc }) => getBgcImage(theme, weatherDesc)});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 25px;
`;

export const InfoWrapper = styled.div`
  padding: 0 20px 10px;
`;

export const ValueParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
  color: ${({ theme, children }) => getColor(theme, children)};
  margin-bottom: 0;
`;
export const SingleDayTitle = styled(Title)`
  color: ${({ theme }) => theme.colors.darkPurple};
  margin-bottom: 0px;
`;
