import { useState } from "react";
import PTestimonial from "./Molecules/cards/PTestimonial";
import ReviewDouble from "./Molecules/reviews/ReviewDouble";

export default function Reviews(){
    const [showingAll, setShowingAll] = useState(false);
    return (
        <div className="bg-white pt-4 flex flex-col gap-4">
            <div className="flex">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 6.33334L18.3334 13.6667H25.6667L19.6667 18.3333L21.6667 25.6667L16 21L10.3334 25.6667L12.3334 18.3333L6.33337 13.6667H13.6667L16 6.33334Z" fill="#DE3151" stroke="#DE3151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p className="font-semibold pt-1 text-xl">5.0.7 reviews</p>
            </div>
            <div className="grid grid-cols-6 gap-3">
                <ReviewDouble/>
                <ReviewDouble/>
                <ReviewDouble/>
                <ReviewDouble/>
                <ReviewDouble/>
                <ReviewDouble/>
            </div>
            <div className="grid grid-cols-6 gap-8 py-20 ">
                <PTestimonial />
                <PTestimonial />
                <PTestimonial />
                <PTestimonial />
                {
                showingAll &&
                    <div className="col-span-6 grid grid-cols-6 gap-8">
                        <PTestimonial /> 
                        <PTestimonial /> 
                        <PTestimonial />
                        <PTestimonial /> 
                        <PTestimonial /> 
                        <PTestimonial />
                        <PTestimonial /> 
                        <PTestimonial /> 
                        <PTestimonial />
                        <PTestimonial /> 
                        <PTestimonial /> 
                        <PTestimonial /> 
                    </div>
                }
                <div className="col-span-6 px-4">
                    <button className="rounded-xl border-2 px-3 py-1 border-black" onClick={()=>{setShowingAll(!showingAll)}}>{showingAll ? 'Hide reviews' : 'Show all 17 reviews' }</button>
                </div>
            </div>
        </div>
    )
}