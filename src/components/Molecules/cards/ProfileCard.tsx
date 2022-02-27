import search from "../../../files/dashboard/search.svg";
import notify from "../../../files/dashboard/notify.svg";

export default function ProfileCard(){
    return(
        <div className="flex gap-3 pt-4">
            <div className="flex gap-3 px-2 py-2">
                <div className="flex cursor-pointer">
                    <img className="h-6 w-6" src={search} alt="" />
                </div>
                <div className="flex cursor-pointer">
                    <img  className="h-6 w-6" src={notify} alt="" />
                </div>
            </div>
            <div className="flex gap-2 cursor-pointer">
                <p className="pt-2">Hirwa Chanelle</p>
                <div>
                    <img className="h-10 w-10 rounded-full object-cover" src="https://www.verywellmind.com/thmb/279i_VzzrmYt9tFr3Bz0nciExlU=/800x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/laughing-happy-Cultura-RM-Moof-56a9063a5f9b58b7d0f7681c.jpg" />
                </div>
            </div>
        </div>
    )
}