import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { IUserLogin } from "../../../types/users/auth.type";
import { useNavigate } from 'react-router-dom';
import Button from "../../Atom/Button";
import Input from "../../Atom/Input";

export default function SignupForm(){
    const navigate = useNavigate();
    function submitForm(e: FormEvent) {
        e.preventDefault();
    
        toast.success("Login successful🥳");
        navigate('/dashboard/overview');
        console.log(user);
    }
    
    const [user, setUser] = useState<IUserLogin>({
        email: '',
        password: '',
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user, [e.target.name] : e.target.value})
    }
    return(
    <form className='flex flex-col gap-2' onSubmit={submitForm}>
        <div className='w-full flex flex-col'>
            <label htmlFor="" className='text-md py-2'>Email</label>
            <Input type="email" name="email" onChange={handleChange} required value={user.email} className='w-96' placeholder='Email' />
        </div>
        <div className='w-full flex flex-col'>
            <label htmlFor="" className='text-md py-2'>Password</label>
            <Input type="password" name="password" onChange={handleChange} required value={user.password} className='w-96' placeholder='Password' />
        </div>
        <div className='mt-2'>
            <Button type="submit">Login</Button>
        </div>
    
    </form>
    )
    }