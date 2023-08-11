'use client'
import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import WalletIcon from '@mui/icons-material/Wallet';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Link from 'next/link';

const adminInfos=[
    {
      img:'https://cdn-icons-png.flaticon.com/128/1828/1828765.png',
      title:'Dashboard',
      path:'/dashboard/advertiser/Home'
    },
    {
      img:'https://cdn-icons-png.flaticon.com/128/6012/6012823.png',
      title:'Customers list',
      path:''
    },
    {
      img:'https://cdn-icons-png.flaticon.com/128/3624/3624080.png',
      title:'Order list',
      path:''
    },
    {
      img:'https://cdn-icons-png.flaticon.com/128/4059/4059951.png',
      title:'Product list',
      path:''
    }
  ]

const DashboardSidebar = () => {
    const user=null
    return (
        <div className=' bg-[#FFF] w-20 lg:w-72 min-h-screen'>
        <div className="flex flex-col items-center mt-4 font-medium px-3 py-1">
          <div className='flex items-center gap-x-3'>
          <Avatar src={user?.photoURL || 'https://cdn-icons-png.flaticon.com/128/149/149071.png'} alt="avatar" size="md" />
        <h1 className="hidden lg:block font-semibold text-sm">{user?.displayName || 'Admin'}</h1>
          </div>
      <div>
      <ul className="mt-8 font-medium">
          <li className='px-3 py-2 font-semibold'>Menu</li>
          {
            adminInfos.map((info,i)=>
            <Link key={i} href={info.path}>
              <li  className={`flex items-center gap-x-4 px-3 py-2 rounded mb-3 ${'df'===info.path && 'bg-[#06AAAA] text-white'}`}>
                <img src={info.img} alt=""  className="w-[22px]"/>
                <span className="hidden lg:inline-block font-semibold">{info.title}</span>
              </li>
            </Link>
              )
          }
        </ul>
        <button  className="flex items-center gap-x-2 px-3 py-2 hover:bg-blue-gray-400 rounded mt-24">
                <img src='https://cdn-icons-png.flaticon.com/128/9208/9208320.png' alt=""  className="w-[30px]"/>
                <span className="hidden lg:inline-block">Logout</span>
              </button>
      </div>
        </div>
      </div>
    );
};

export default DashboardSidebar;