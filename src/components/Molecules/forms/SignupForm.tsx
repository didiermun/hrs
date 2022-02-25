export default function SignupForm(){
return(
<div className='flex flex-col gap-2'>
    <div className='w-full flex flex-col gap-0'>
        <label htmlFor="" className='text-md py-2'>Full Names</label>
        <input type="text" className='w-96 border-2 border-gray-400 rounded-lg px-4 py-2' placeholder='Full Names' />
    </div>
    <div className='w-full flex flex-col'>
        <label htmlFor="" className='text-md py-2'>Email</label>
        <input type="email" className='w-96 border-2 border-gray-400 rounded-lg px-4 py-2' placeholder='Email' />
    </div>
    <div className='w-full flex flex-col'>
        <label htmlFor="" className='text-md py-2'>Password</label>
        <input type="password" className='w-96 border-2 border-gray-400 rounded-lg px-4 py-2' placeholder='Password' />
    </div>
    <div className='mt-2'>
        <button className='w-full bg-primary rounded-lg py-2 px-4 text-white'>Sign up</button>
    </div>

</div>
)
}