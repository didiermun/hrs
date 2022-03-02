import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { IUserSignup } from "../../../types/users/auth.type";
import { useNavigate } from 'react-router-dom';
import Button from "../../Atom/Button";
import Input from "../../Atom/Input";

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
        <Input type="text" name="full_names" onChange={handleChange} required value={user.full_names} placeholder='Full Names' className='w-96'/>
    </div>
    <div className='w-full flex flex-col'>
        <label htmlFor="" className='text-md py-2'>Email</label>
        <Input type="email" name="email" onChange={handleChange} required value={user.email} placeholder='Email' className='w-96' />
    </div>
    <div className='w-full flex flex-col'>
        <label htmlFor="" className='text-md py-2'>Password</label>
        <Input type="password" name="password" onChange={handleChange} required value={user.password} className='w-96' placeholder='Password' />
    </div>
    <div className='mt-2'>
        <Button className="w-96" type="submit">Sign up</Button>
    </div>

</form>
)
}