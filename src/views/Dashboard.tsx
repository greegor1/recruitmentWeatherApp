import DaysList from 'components/organisms/DaysList/DaysList';
import { ViewWrapper } from 'components/organisms/ViewWrapper/ViewWrapper';
import React from 'react';

const Dashboard = () => {
  return (
    <ViewWrapper>
      <DaysList />
    </ViewWrapper>
  );
};

export default Dashboard;
