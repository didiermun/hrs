import { ReactNode } from "react";

interface IProps{
    children: ReactNode;
}
export default function AdminLayout({children}: IProps){
    return <>{children}</>
}