import React from 'react';
import OrderChart from '../components/charts/OrderChart';
import UserChart from '../components/charts/UserChart';

const Dashboard = () => {
    return (
        <div>
            <h1 className='text-2xl font-medium text-center mt-4 mb-8'>Summary</h1>
          <div className='flex flex-col items-center justify-center gap-6'>
          <OrderChart></OrderChart> 
         <UserChart></UserChart>
          </div>
        </div>
    );
};

export default Dashboard;