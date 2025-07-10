export default function Navbar () {
    return (
        <nav className="flex items-center justify-between w-full px-4 py-4">
            <div className="w-75">
                <a href="/">
                    <img src="/logo-oskar.png" alt="logo"/>
                </a>
            </div>
            <div className="space-x-5">
                <div className="dropdown group">
                    <a className="parent">
                        Booking
                    </a>
                    <div className="dropdown-content">
                        <a>
                            Bordresevationer
                        </a>
                        <a>
                            Billetsalg
                        </a>
                        <a>
                            Lej Oscar
                        </a>
                </div>
                </div>
                <div className="dropdown group">
                    <a className="parent">
                        Events
                    </a>
                    <div className="dropdown-content">
                        <a>
                            Das Mädchen
                        </a>
                        <a>
                            Christian Andersen band
                        </a>
                        <a>
                            Sanne Bentsen
                        </a>
                    </div>
                </div>
                <a className="navlink">Kontakt</a>
            </div>
        </nav>
    )
}