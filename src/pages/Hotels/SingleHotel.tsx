import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ReservationCard from "../../components/ReservationCard";
import Reviews from "../../components/Reviews";

export default function SingleHotel(){
    return (
        <>
          <div className="w-full">
            <Header></Header>
          </div>
          <div className="flex flex-col px-12">
            <div className="bg-white px-4 py-10 h-full w-full">
                <div className="flex float-right">
                <ReservationCard></ReservationCard>
                </div>
            </div>
            <div className="w-full px-6">
                <Reviews/>
            </div>
          </div>
          <div className="w-full">
            <Footer></Footer>
          </div>
      </>
    )
}