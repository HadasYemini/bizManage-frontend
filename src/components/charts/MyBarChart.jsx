import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const dataset = [
  { month: 'January', potentialCustomers: 1, lostCustomers: 1, newCustomers: 2, existingCustomers: 3 },
  { month: 'Febuary', potentialCustomers: 1, lostCustomers: 2, newCustomers: 4, existingCustomers: 3 },
  { month: 'March', potentialCustomers: 2, lostCustomers: 3, newCustomers: 2, existingCustomers: 5 },
  // עוד נתונים...
];

const valueFormatter = (value) => value; // פונקציה לדוגמא לפורמט ערכים
const chartSetting = {
  colors: ['#1976d2', '#dc004e', '#ff9800', '#4caf50'],
};

export default function MyBarChart() {
  return (
    <div>
      <BarChart
        dataset={dataset}
        xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
        series={[
          { dataKey: 'potentialCustomers', label: 'potential customers', valueFormatter },
          { dataKey: 'lostCustomers', label: 'lost customers', valueFormatter },
          { dataKey: 'newCustomers', label: 'new customers', valueFormatter },
          { dataKey: 'existingCustomers', label: 'existing customers', valueFormatter },
        ]}
        width={1000}
        height={500}
        {...chartSetting}
      />
    </div>
  );
}