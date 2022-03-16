type InputType = {

}
export type InputProps = {
    placeholder?: string;
    value?: string;
    className?: string;
    name?: string;
    required?: boolean | undefined;
    multiple?: boolean | undefined;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string; 
}

export default function Input({type, name,value,required,multiple, onChange, className, placeholder}:InputProps){
    return (
        <input className={className+ " px-4 border-gray-400 py-2 w-full border-2 rounded focus:ring-2 focus:ring-black focus:border-0 focus:outline-none"} required={required} name={name} type={type} value={value} multiple={multiple} onChange={onChange} placeholder={placeholder} />
    )
}