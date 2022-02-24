import Footer from "../components/Footer";
import Header from "../components/Header";
import HotelResult from "../components/Molecules/cards/HotelResult";
import ReservationCard from "../components/ReservationCard";

export default function Search() {
    return (
      <>
      <div className="flex flex-col px-8">
          <div className="col-span-4">
            <Header></Header>
          </div>
          <div className="w-full bg-white px-4 py-10 h-full grid grid-cols-4 lg:grid-cols-7">
            <div className="col-span-4">
              <div className="border-b-2 w-full py-6">
                <p className="px-2 py-2 text-gray-300">60+ stays in Nairobi</p>
              </div>
              <div className="flex flex-col mt-10 gap-6 w-full">
                <HotelResult />
                <HotelResult />
                <HotelResult />
                <HotelResult />
                <HotelResult />
              </div>
            </div>
            <div className="col-span-3">

            </div>
          </div>
      </div>
       <div className=" col-span-4 grid grid-cols-2">
       <Footer></Footer>
     </div>
     </>
    );
  }