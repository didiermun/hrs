import Notfound from "../../components/404";
import AdminLayout from "../../layout/AdminLayout"

export default function Dashboard(){
    return (
        <AdminLayout>
            <div className="w-full h-full px-60">
                <Notfound/>
            </div>
        </AdminLayout>
    )
}