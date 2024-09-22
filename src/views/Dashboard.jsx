import React from 'react'
import MyPieChart from '../components/charts/MyPieChart'
import MyLineChart from '../components/charts/MyLineChart'
import MyBarChart from '../components/charts/MyBarChart'

export default function Dashboard() {

  return (
    <div>
      <h1 className="text-2xl font-semibold">Welcome to the Dashboard</h1>
      <MyPieChart />
      <MyBarChart />
      <MyLineChart />
    </div>
  )
}
