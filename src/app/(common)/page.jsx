'use client'
import { useEffect, useState } from 'react';
import HomeSlider from '../components/home components/HomeSlider';
import { useRouter } from 'next/navigation';

const WithCommon = () => {
    const router=useRouter()
 useEffect(()=>{
    const user=localStorage.getItem('userInformation')
    if(!user){
        return router.push('/userAuth/login')
    }
    else{
        return router.push('/')
    }
 },[router])
    return (
        <div>
            <HomeSlider></HomeSlider>
        </div>
    );
};

export default WithCommon;