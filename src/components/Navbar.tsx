"use client"
// TODO: only show hover effects if open is equal to ""
import Link from "next/link";
import Image from "next/image";
import Logo from "../app/images/logo-oskar.png"
import {useState} from "react";

export default function Navbar () {
    const [open, setOpen] = useState("");
    return (
        <>
            <nav className="z-10 fixed w-full">
                <div className="flex flex-col md:flex-row items-center justify-between w-full px-4 py-4">
                    <div className="w-64 h-auto md:w-75">
                        <Link href="/">
                            <Image src={Logo} alt="logo"/>
                        </Link>
                    </div>
                    <div className={`space-x-5 z-10 items-center justify-center flex pt-12 pb-8 md:pb-0 md:pt-0 ${open === "" ? "-my-8" : "-my-16 md:-my-8"}`}>
                        <div className="dropdown group">
                            <div className={`${open === "booking" ? "block my-8" : "hidden group-hover:block my-8"}`}/>
                            <a className={`parent ${open === "booking" ? "!shownparent" : "cursor-default"}`} onClick={() => {if (open === "booking") {setOpen("")} else {setOpen("booking")}}}>
                                Booking
                            </a>
                            <div className={`${open === "booking" ? "block my-8" : "hidden group-hover:block my-8"}`}/>
                            <div className={`dropdown-content ${open === "booking" ? "!shown" : ""}`}>
                                <a href="/booking/bordresevationer">
                                    Bordresevationer
                                </a>
                                <a href="/booking/billetsalg">
                                    Billetsalg
                                </a>
                                <a href="/booking/lej-oscar">
                                    Lej Oscar
                                </a>
                            </div>
                        </div>
                        <div className="dropdown group">
                            <div className={`${open === "events" ? "block my-8" : "hidden group-hover:block my-8"}`}/>
                            <a className={`parent ${open === "events" ? "!shownparent" : "cursor-default"}`} onClick={() => {if (open === "events") {setOpen("")} else {setOpen("events")}}}>
                                Events
                            </a>
                            <div className={`${open === "events" ? "block my-8" : "hidden group-hover:block my-8"}`}/>
                            <div className={`dropdown-content ${open === "events" ? "!shown" : ""}`}>
                                <a href="/events/das_mädchen">
                                    Das Mädchen
                                </a>
                                <a href="/events/christian_andersen_band">
                                    Christian Andersen band
                                </a>
                                <a href="/events/sanne_bentsen">
                                    Sanne Bentsen
                                </a>
                            </div>
                        </div>
                        <a className="navlink" href="/kontakt">Kontakt</a>
                    </div>
                </div>
            </nav>
            <nav className="backdrop-blur-lg fixed w-full bg-white/10">
                <div className="invisible flex flex-col md:flex-row items-center justify-between w-full px-4 py-4">
                    <div className="w-64 h-auto md:w-75">
                        <Image src={Logo} alt="logo"/>
                    </div>
                    <div className="invisible space-x-5 z-10 items-center justify-center flex pt-12 pb-8 md:pb-0 md:pt-0 -my-8">
                        <div className="invisible dropdown group">
                            <a className="parent">
                                Booking
                            </a>
                        </div>
                        <div className="invisible dropdown group">
                            <a className="parent">
                                Events
                            </a>
                        </div>
                        <a className="navlink" href="/kontakt">Kontakt</a>
                    </div>
                </div>
            </nav>
        </>
    )
}