type ButtonType  = "button" | "submit" | "reset" | undefined;
export type ButtonProps = {
    className?: string;
    children: string;
    type?: ButtonType;
    onClick?: () => void;
}

export default function Button({className, type="button",children, onClick}: ButtonProps){
    return(
        <button onClick={onClick} type={type} className={className+ " w-full bg-secondary py-3 text-white font-extralight rounded h-fit "}>{children}</button>
    )
}