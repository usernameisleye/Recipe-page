import { useEffect } from "react";
import Mail from "./Mail";

const Mails = () => {
    const sections = [
        {id: 1, title: "Primary", className: "fa-solid fa-inbox", active: "text-Tab-Blue border-b-2 border-solid"},
        {id: 2, title: "Promotions", className: "fa-solid fa-tag"},
        {id: 3, title: "Socials", className: "fa-solid fa-user-group"}
    ];
    // Checkbox System
    // const checkboxes = document.querySelectorAll("input[type = 'checkbox']");

    return ( 
        <div className="bg-White w-[calc(67%+10rem)] m-4 rounded-xl overflow-x-hidden">
            {/* Heading on Mails section */}
            <div className="bg-White text-FA-Dark flex items-center justify-between gap-6 p-4">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <input type="checkbox" className="h-4 w-4" />
                        <i className="fa-solid fa-caret-down"></i>
                    </div>

                    <i className="fa-solid fa-rotate-right"></i>
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                </div>


                <div className="flex items-center gap-6">
                    <span className="">1-3 of 3</span>

                    <div className="flex items-center gap-4">
                        <i className="fa-solid fa-angle-left"></i>
                        <i className="fa-solid fa-angle-right"></i>
                    </div>

                    <div className="flex items-center gap-2">
                        <i className="fa-sharp fa-solid fa-keyboard"></i>
                        <i className="fa-solid fa-caret-down"></i>
                    </div>
                </div>
            </div>

            {/* Sub heading of Mails section */}
            <section className="text-md h-[calc(24rem+5rem)] overflow-hidden overscroll-y-contain overflow-y-scroll">
                <div className="bg-White text-FA-Dark flex text-md border-b border-solid border-FA-Hover">
                    { sections.map(section => (
                        <div key={section.id} className={`flex items-center gap-2 p-4 w-1/6 cursor-pointer ${section.active ? section.active : ""}`}>
                            <i className={`${section.className}`}></i>
                            <span className="">{section.title}</span>
                        </div>
                    )) }
                </div>

                {/* Section for all Mails */}
                <section className="grid grid-cols-1">
                    <Mail />
                    <Mail />
                    <Mail />
                    <Mail />
                    <Mail />
                    <Mail />
                    <Mail />
                    <Mail />
                    <Mail />
                </section>

                {/* Bottom Mail section */}
                <div className="text-sm text-FA-Dark p-4 flex justify-between">
                    <div className="">
                        <div className="relative bg-FA-Hover w-[calc(100%+5rem)] h-2 rounded-lg my-2">
                            <div className="absolute bg-FA-Dark h-2 w-1/12 rounded-lg"></div>
                        </div>
                        <p>0.01 GB of 15 GB used</p>
                    </div>

                    <div className="flex gap-2">
                        <a href="" className="hover:underline">Terms</a>
                        <a href="" className="hover:underline">Privacy</a>
                        <a href="" className="hover:underline">Program Policies</a>
                    </div>

                    <div className="">
                        <p className="">Last account activity: -- hours ago</p>
                        <p className="">Details</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
 
export default Mails;