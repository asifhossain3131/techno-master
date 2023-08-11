import Image from 'next/image';
import '../login/Login.css'
import LoginForm from './LoginForm';

const LoginPage = () => {
    return (
        <div className='flex items-center bg-[#F1F1F1]'>
            <div className='w-1/2'>
          <LoginForm></LoginForm>
          </div>
          <Image src={'https://img.freepik.com/free-vector/shop-assistant-showing-phone-customer-electronics-store-young-woman-visitor-listening-smartphone-advantage-man-choosing-new-digital-device-hanged-wall_575670-1320.jpg?size=626&ext=jpg&ga=GA1.2.663062170.1681230249&semt=ais'} alt='loginImg' className='loginImg w-1/2 min-h-screen' width={600} height={600}></Image>
        </div>
    );
};

export default LoginPage;