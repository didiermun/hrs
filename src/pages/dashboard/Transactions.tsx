import Transaction from "../../components/Molecules/cards/Transaction"
import TransactionTitle from "../../components/Molecules/cards/TransactionTitle"
import AdminLayout from "../../layout/AdminLayout"

export default function Transactions(){
    return (
        <AdminLayout>
            <div className="w-full bg-[#F7F8FC]">
                <div className="w-full flex justify-center">
                    <p className="font-semibold text-dark text-3xl font-sans">Transactions <span className="font-medium text-xl">(182)</span></p>
                </div>
                <div className="w-max flex flex-col py-10 px-4 bg-white rounded-md mt-20 mx-auto items-center">
                    <div className="w-full gap-4 grid grid-cols-9">
                        <div className="col-span-9 ">
                            <p className="px-4 text-xl font-semibold">All Transactions</p>
                        </div>
                        <TransactionTitle></TransactionTitle>
                        <Transaction/>
                        <Transaction/>
                        <Transaction/>
                        <Transaction/>
                        <Transaction/>
                        <Transaction/>
                        <Transaction/>
                        <Transaction/>
                        <Transaction/>
                        <Transaction/>
                        <Transaction/>
                        <Transaction/>
                        <Transaction/>
                        <Transaction/>
                    </div>
                    
                </div>
            </div>
        </AdminLayout>
    )
}