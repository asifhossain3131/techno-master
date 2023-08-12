import { getUsersFromDb } from '@/services/users.service';
import React, { cache } from 'react';
import 'server-only'

const getUsers = cache(() => {
    return getUsersFromDb()
})

export default getUsers;