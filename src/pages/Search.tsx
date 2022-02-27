import Footer from "../components/Footer";
import Header from "../components/Header";
import HotelResult from "../components/Molecules/cards/HotelResult";

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
            <div className="col-span-3 ml-10 mt-10">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.554664049929!2d29.576192250411385!3d-1.442072236217731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dc4fc043a1ba85%3A0x3b64cd66449e625f!2sOne%26Only%20Gorilla&#39;s%20Nest!5e0!3m2!1sen!2srw!4v1645798666858!5m2!1sen!2srw" width="600" height="800"  allowFullScreen={true} loading="lazy"></iframe>
            </div>
          </div>
      </div>
       <div className=" col-span-4 grid grid-cols-2">
       <Footer></Footer>
     </div>
     </>
    );
  }