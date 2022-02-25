import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { IUserSignup } from "../../../types/users/auth.type";
import { useNavigate } from 'react-router-dom';

export default function SignupForm(){
    const navigate = useNavigate();
    function submitForm(e: FormEvent) {
        e.preventDefault();
    
        toast.success("Registration successful🥳");
        console.log(user);
        navigate('/auth/signin');
    }
    
    const [user, setUser] = useState<IUserSignup>({
        full_names: '',
        email: '',
        password: '',
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user, [e.target.name] : e.target.value})
    }
return(
<form className='flex flex-col gap-2' onSubmit={submitForm}>
    <div className='w-full flex flex-col gap-0'>
        <label htmlFor="" className='text-md py-2'>Full Names</label>
        <input type="text" name="full_names" onChange={handleChange} required value={user.full_names}className='w-96 border-2 border-gray-400 rounded-lg px-4 py-2' placeholder='Full Names' />
    </div>
    <div className='w-full flex flex-col'>
        <label htmlFor="" className='text-md py-2'>Email</label>
        <input type="email" name="email" onChange={handleChange} required value={user.email} className='w-96 border-2 border-gray-400 rounded-lg px-4 py-2' placeholder='Email' />
    </div>
    <div className='w-full flex flex-col'>
        <label htmlFor="" className='text-md py-2'>Password</label>
        <input type="password" name="password" onChange={handleChange} required value={user.password} className='w-96 border-2 border-gray-400 rounded-lg px-4 py-2' placeholder='Password' />
    </div>
    <div className='mt-2'>
        <button type="submit" className='w-full bg-primary rounded-lg py-2 px-4 text-white'>Sign up</button>
    </div>

</form>
)
}