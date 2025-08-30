import Image from "next/image";
import Logo from "../app/images/logo-oskar.png"


export default function Footer () {
    return (
        <footer className="flex justify-center mt-8 bg-red-50/20">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full px-4 md:px-16 py-4">
                <div>
                    <Image src={Logo} alt="logo" className="w-auto h-8 mb-6 md:mb-0 object-contain"/>
                    <div className="md:ml-4">
                        <div className="mt-6 flex flex-row space-x-4 text-neutral-500">
                            <svg className="hover:text-neutral-800" xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="currentColor">
                                <path d="m368-320 112-84 110 84-42-136 112-88H524l-44-136-44 136H300l110 88-42 136ZM160-160q-33 0-56.5-23.5T80-240v-135q0-11 7-19t18-10q24-8 39.5-29t15.5-47q0-26-15.5-47T105-556q-11-2-18-10t-7-19v-135q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v135q0 11-7 19t-18 10q-24 8-39.5 29T800-480q0 26 15.5 47t39.5 29q11 2 18 10t7 19v135q0 33-23.5 56.5T800-160H160Zm0-80h640v-102q-37-22-58.5-58.5T720-480q0-43 21.5-79.5T800-618v-102H160v102q37 22 58.5 58.5T240-480q0 43-21.5 79.5T160-342v102Zm320-240Z"/>
                            </svg>
                            <svg className="hover:text-neutral-800" xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="currentColor">
                                <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/>
                            </svg>
                            <svg className="hover:text-neutral-800" xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="currentColor">
                                <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/>
                            </svg>
                        </div>
                        <div className="mt-6 flex flex-col space-y-4 font-extralight">
                            <div>
                                <p>Kingosvej 5</p>
                                <p>4321 Søby</p>
                            </div>
                            <p>© 2025 Kulturcafé Oskar</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row text-neutral-700 space-x-24">
                    <div className="flex flex-col space-y-4 mt-16 md:mt-0">
                        <p className="cursor-default text-lg font-semibold">Booking</p>
                        <div className="flex flex-col space-y-4 leading-4 text-neutral-500 w-32">
                            <a className="hover:text-neutral-800 cursor-pointer" href="/booking/bordresevationer">Bordresevationer</a>
                            <a className="hover:text-neutral-800 cursor-pointer" href="/booking/billetsalg">Billetsalg</a>
                            <a className="hover:text-neutral-800 cursor-pointer" href="/booking/lej-oscar">Lej Oscar</a>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4 mt-16 md:mt-0">
                        <p className="cursor-default text-lg font-semibold">Events</p>
                        <div className="flex flex-col space-y-4 leading-4 text-neutral-500 w-32">
                            <a className="hover:text-neutral-800 cursor-pointer" href="/events/das_mädchen">Das Mädchen</a>
                            <a className="hover:text-neutral-800 cursor-pointer" href="/events/christian_andersen_band">Christian Andersen band</a>
                            <a className="hover:text-neutral-800 cursor-pointer" href="/events/sanne_bentsen">Sanne Bentsen</a>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4 mt-16 md:mt-0">
                        <a className="cursor-pointer hover:text-neutral-900 text-lg font-semibold" href="/kontakt">Kontakt</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}