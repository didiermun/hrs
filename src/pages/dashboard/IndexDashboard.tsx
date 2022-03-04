import OverviewCard from "../../components/Molecules/cards/OverviewCard"
import AdminLayout from "../../layout/AdminLayout"

export default function Dashboard(){
    return (
        <AdminLayout>
            <div className="w-full bg-[#F7F8FC]">
                <div className="w-full flex flex-col mx-auto items-center py-10 px-4">
                    <div className="w-full grid grid-cols-6 md:grid-cols-9 lg:grid-cols-12 gap-4">
                        <OverviewCard/>
                        <OverviewCard/>
                        <OverviewCard/>
                        <OverviewCard/>
                        <OverviewCard/>
                        <OverviewCard/>
                        <OverviewCard/>
                        <OverviewCard/>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}