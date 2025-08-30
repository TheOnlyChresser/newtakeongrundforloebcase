import Link from "next/link";
import Image from "next/image";

export default function Navbar () {
    return (
        <>
        <nav className="z-10 fixed w-full bg-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between w-full px-4 py-4">
                <div className="w-64 md:w-75">
                    <Link href="/">
                        <Image width={10000} height={1000} src="./images/public/logo-oskar.png" alt="logo"/>
                    </Link>
                </div>
                <div className="space-x-5 z-10 items-center justify-center flex -my-8">
                    <div className="dropdown group">
                        <div className="hidden group-hover:block my-8"/>
                        <a className="parent">
                            Booking
                        </a>
                        <div className="hidden group-hover:block my-8"/>
                        <div className="dropdown-content">
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
                        <div className="hidden group-hover:block my-8"/>
                        <a className="parent">
                            Events
                        </a>
                        <div className="hidden group-hover:block my-8"/>
                        <div className="dropdown-content">
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
        <nav className="fixed w-full backdrop-blur-lg bg-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between w-full px-4 py-4 invisible">
                <div className="w-20 md:w-75 invisible">
                    <Image width={10000} height={1000} src="./images/logo-oskar.png" alt="logo"/>
                </div>
                <div className="space-x-5 z-10 invisible items-center justify-center flex -my-8">
                    <div className="dropdown group">
                        <div className="hidden group-hover:block my-8"/>
                        <a className="parent">
                            Booking
                        </a>
                        <div className="hidden group-hover:block my-8"/>
                        <div className="dropdown-content">
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
                        <div className="hidden group-hover:block my-8"/>
                        <a className="parent">
                            Events
                        </a>
                        <div className="hidden group-hover:block my-8"/>
                        <div className="dropdown-content">
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
    </>
    )
}