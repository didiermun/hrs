import { ReactNode } from "react";
import ProfileCard from "../components/Molecules/cards/ProfileCard";
import Sidebar from "../components/Sidebar";

interface IProps{
    children: ReactNode;
}
export default function AdminLayout({children}: IProps){
    return (
        <div className="grid grid-cols-12 gap-0 bg-white h-screen w-screen overflow-hidden">
            <div className="hidden lg:flex col-span-2">
                <Sidebar></Sidebar>
            </div>
            <div className="flex flex-col gap-4 bg-[#F7F8FC] col-span-12 lg:col-span-10 overflow-y-auto">
                <div className="flex justify-between pr-10">
                    <div className="py-6 px-6">
                        <h1 className="font-semibold text-primary text-2xl">Overview Statistics</h1>
                    </div>
                    <ProfileCard/>
                </div>
                <div className="w-full flex px-4 h-max">
                {children}
                </div>
            </div>
        </div>
    )
}