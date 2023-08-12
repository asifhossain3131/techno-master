'use client'
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { useForm } from "react-hook-form"
import { toast } from 'react-hot-toast';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const AddCustomer = () => {
    const [open, setOpen] = React.useState(false);
    const {
        register,
        handleSubmit,
     reset
      } = useForm()
    
      const onSubmit = (data) => {
        const {name,phone,email,address}=data
        const user={name,phone,email,address,gender}
        fetch('../../api/postUser',{
         method:'POST',
         headers:{
            'content-type':'application/json'
         },
         body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            reset()
            setOpen(!open)
            toast.success('User created successfully')
        })
      }

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    }
    const [gender, setGender] = React.useState('');

    const handleChange = (event) => {
      setGender(event.target.value);
    };
    return (
        <div>
        <Button onClick={handleClickOpen} variant="outlined" startIcon={<PersonAddIcon />}>
  Add an user
</Button>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Add an user user"}</DialogTitle>
          <DialogContent>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
            <div className='flex gap-4 items-center'>
            <TextField {...register("name", { required: true })} id="outlined-basic" label="User Name" variant="outlined" />
            <TextField {...register("phone", { required: true })} id="outlined-basic" label="Phone Number" variant="outlined" />
            </div>
            <div className='flex gap-4 items-center'>
            <TextField {...register("email", { required: true })} id="outlined-basic" label="Email" variant="outlined" />
            <TextField {...register("address", { required: true })} id="outlined-basic" label="Address" variant="outlined" />
            </div>
            <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={gender}
          label="Gender"
          onChange={handleChange}
        >
          <MenuItem value={'male'}>Male</MenuItem>
          <MenuItem value={'female'}>Female</MenuItem>
          <MenuItem value={'others'}>Others</MenuItem>
        </Select>
      </FormControl>
      <Button type='submit'>Add</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    );
};

export default AddCustomer;