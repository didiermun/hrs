import OverviewCard from "../../components/Molecules/cards/OverviewCard"
import AdminLayout from "../../layout/AdminLayout"

export default function Dashboard(){
    return (
        <AdminLayout>
            <div className="w-full bg-[#F7F8FC]">
                <div className="w-full flex flex-col mx-auto py-10 px-4">
                    <div className="w-full gap-4 grid grid-cols-6 md:grid-cols-9 lg:grid-cols-12">
                        <OverviewCard/>
                        <OverviewCard/>
                        <OverviewCard/>
                        <OverviewCard/>
                    </div>
                    <div className="flex mt-10 gap-6">
                        <div className="w-3/4 bg-white h-80 rounded-xl px-3 py-6 cursor-pointer transition hover:scale-105 duration-500 ease-in-out">data</div>
                        <div className="w-1/4 bg-white h-80 rounded-xl px-3 py-6 cursor-pointer transition hover:scale-105 duration-500 ease-in-out">data</div>
                    </div>

                    <div className="flex mt-10 gap-6">
                        <div className="w-3/5 bg-white h-80 rounded-xl px-3 py-6 cursor-pointer transition hover:scale-105 duration-500 ease-in-out">data</div>
                        <div className="w-2/5 bg-white h-80 rounded-xl px-3 py-6 cursor-pointer transition hover:scale-105 duration-500 ease-in-out">data</div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}