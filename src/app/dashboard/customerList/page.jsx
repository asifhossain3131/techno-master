import getUsers from '@/utils/getUsers';
import React from 'react';
import CustomerListTable from './CustomerListTable';
import AddCustomer from './AddCustomer';

const CustomerList = async() => {
    const users=await getUsers()
    return (
        <div className='w-9/12 mx-auto text-center'>
            <h1 className='text-xl font-medium mt-4 mb-8'>Current Users: {users?.length}</h1>
            <AddCustomer></AddCustomer>
            <CustomerListTable users={JSON.parse(JSON.stringify(users))}></CustomerListTable>
        </div>
    );
};

export default CustomerList;