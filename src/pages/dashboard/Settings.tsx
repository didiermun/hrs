import { useState } from "react";
import Button from "../../components/Atom/Button";
import Input from "../../components/Atom/Input";
import { PasswordSettings } from "../../components/Molecules/forms/PasswordSettings";
import PersonalDetails from "../../components/Molecules/forms/PersonalDetails"
import ProfileSettings from "../../components/Molecules/forms/ProfileSettings";
import AdminLayout from "../../layout/AdminLayout"
export default function Settings(){
    const [state, setState] = useState(0);
    return (
        <AdminLayout>
            <div className="w-full md:w-fit px-4 py-6 mt-4 bg-white rounded-lg h-fit block lg:flex gap-4">
                <div className="w-full md:w-fit px-4 py-4 flex flex-col gap-6">
                    <p className="font-bold text-dark text-3xl">Settings</p>
                    <div className="flex flex-col gap-2">
                        <p className={`px-3 py-4 cursor-pointer w-40 rounded-lg font-normal ${state == 0? 'font-medium bg-slate-200':''}`} onClick={()=>setState(0)}>Details</p>
                        <p className={`px-3 py-4 cursor-pointer w-40 rounded-lg font-normal ${state == 1? 'font-medium bg-slate-200':''}`} onClick={()=>setState(1)}>Profile Picture</p>
                        <p className={`px-3 py-4 cursor-pointer w-40 rounded-lg font-normal ${state == 2? 'font-medium bg-slate-200':''}`} onClick={()=>setState(2)}>Password</p>
                    </div>
                </div>
                {
                    state == 0 ? 
                        PersonalDetails()
                    : state == 1?
                        ProfileSettings()
                    : 
                        PasswordSettings()
                }
            </div>
        </AdminLayout>
    )
}



