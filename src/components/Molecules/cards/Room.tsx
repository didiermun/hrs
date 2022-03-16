import Button from "../../Atom/Button";

export default function Room(){
    return (
        <div className="col-span-3  flex flex-col gap-8 rounded-lg bg-white  px-6 py-4 cursor-pointer transition hover:scale-90 duration-500 ease-in-out">
            <div className="w-full flex">
                <img className="h-60 w-80 rounded" src="https://www.verywellmind.com/thmb/279i_VzzrmYt9tFr3Bz0nciExlU=/800x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/laughing-happy-Cultura-RM-Moof-56a9063a5f9b58b7d0f7681c.jpg" alt="" />
            </div>
            <div className="flex justify-between">
                <p>name of the room</p>
                <p>17 reservers</p>
            </div>
            <div className="flex justify-center gap-4">
                <Button>Edit room</Button>
                <Button className="bg-primary">Delete room</Button>
            </div>
        </div>
    )
}