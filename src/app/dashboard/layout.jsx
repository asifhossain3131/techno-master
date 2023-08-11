import React from 'react';
import DashboardSidebar from './DashboardSidebar';

const DashboardLayout = ({children}) => {
    return (
        <div className='flex'>
            <DashboardSidebar></DashboardSidebar>
            <div className='bg-[#F1F1F1] w-full p-4'>
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;