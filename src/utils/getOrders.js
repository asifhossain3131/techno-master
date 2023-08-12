import { getOrdersFromDb } from '@/services/orders.service';
import React, { cache } from 'react';

const getOrders = cache(() => {
    return getOrdersFromDb()
})

export default getOrders;