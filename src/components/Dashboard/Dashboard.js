import React from 'react'
import Sidebar from './sidebar';
// import {Redirect} from 'react-router-dom';

const Dashboard = ({authorized}) => {
  return (
    <div>
      if(!authorized){
        // <Redirect to="/login"/>
      }
        <Sidebar/>
        <h2>You have entered in the dashboard</h2>
    </div>
  )
}

export default Dashboard