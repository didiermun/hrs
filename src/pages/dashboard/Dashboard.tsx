import OverviewCard from "../../components/Molecules/cards/OverviewCard"
import AdminLayout from "../../layout/AdminLayout"
import {
    // main component
    Chart,
    // graphs
    Bars, Cloud, Dots, Labels, Lines, Pies, RadialLines, Ticks, Title,
    // wrappers
    Layer, Animate, Transform, Handlers,
    // helpers
    DropShadow, Gradient
  } from 'rumble-charts';

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
                        <div className="w-3/4 bg-white h-full rounded-xl px-3 py-6 cursor-pointer transition hover:scale-105 duration-500 ease-in-out">
                        <Chart
                            height={300}
                            minY={0}
                            series={[
                                {
                                data: [
                                    8,
                                    4,
                                    3
                                ]
                                },
                                {
                                data: [
                                    5,
                                    7,
                                    11
                                ]
                                },
                                {
                                data: [
                                    13,
                                    17,
                                    19
                                ]
                                }
                            ]}
                            width={800}
                        >
                            <Bars />
                            <Gradient/>
                        </Chart>
                        </div>
                        <div className="w-1/4 bg-white h-full rounded-xl px-3 py-6 cursor-pointer transition hover:scale-105 duration-500 ease-in-out">
                        <Chart
                            height={300}
                            minY={0}
                            series={[
                                {
                                data: [
                                    1,
                                    2,
                                    3
                                ]
                                },
                                {
                                data: [
                                    5,
                                    7,
                                    11
                                ]
                                },
                                {
                                data: [
                                    13,
                                    17,
                                    19
                                ]
                                }
                            ]}
                            width={250}
                        >
                            <RadialLines />
                        </Chart>
                        </div>
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