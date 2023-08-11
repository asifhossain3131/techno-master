'use client'

import { Button, Checkbox, Divider, TextField } from '@mui/material';

const LoginForm = () => {
    return (
        <div className='w-9/12 mx-auto'>
              <h2 className="font-bold text-2xl">Welcome Back!</h2>
        <p className="text-gray-500 text-xs font-semibold mt-1 mb-6">
          Enter Your Credentials To Access Your Account
        </p>
        <div className="flex items-center gap-4">
          <Button
            size="small"
            variant="outlined"
            className="outline-black flex items-center gap-x-3 border-gray-300 w-full"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/300/300221.png"
              className="w-[18px]"
              alt="icon"
            />
            <span className="text-black font-semibold">Login With Google</span>
          </Button>
        </div>
        <Divider className="my-2 text-gray-500">or</Divider>
        <form className="space-y-1">
          <div className="space-y-2">
            <label htmlFor="" className="font-semibold">
             Phone Number
            </label>
            <TextField
              type='tel'
              size="small"
              id="outlined-basic"
              label="Your Phone Number"
              variant="outlined"
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="" className="font-semibold">
                Password
              </label>
              <label htmlFor="" className="text-teal-500">
                Forgot password?
              </label>
            </div>
            <TextField
              size="small"
              id="outlined-basic"
              variant="outlined"
              className="w-full"
            />
          </div>
          <div className="flex items-center">
            <Checkbox />
            <p className="font-semibold">
              I agree to the{" "}
              <span className="text-teal-700">Terms and privacy</span>
            </p>
          </div>
          <Button variant="contained" className="w-full bg-teal-500 my-3">
            login
          </Button>
        </form>
        <div>
          <p className="font-semibold mt-3">
            Already have an account?<span className="text-teal-700 ms-2">SignIn</span>
          </p>
        </div>
        </div>
    );
};

export default LoginForm;