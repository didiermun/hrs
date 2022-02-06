import Footer from "~/components/Footer";
import Header from "~/components/Header";
import ReservationCard from "~/components/reservation/ReservationCard";

export default function Search() {
  return (
    <div className="grid grid-cols-4">
        <div className="col-span-4">
          <Header></Header>
        </div>
        <div className="w-full bg-white px-4 py-10 h-full col-span-4">
          <div className="flex float-right">
            <ReservationCard></ReservationCard>
          </div>
        </div>
        <div className=" col-span-4 grid grid-cols-2">
          <Footer></Footer>
        </div>
    </div>
  );
}
