"use client"
// TODO: lav en gradient border ved at lave div der bytter på bg og border eller lign
// TODO: lav primary farver osv i tailwind settings

import Image from "next/image";
import Stemning from "./images/stemning.jpeg"
import Stemning3 from "./images/stemning3.jpeg"
export default function Index () {
  return (
    <main className="flex flex-col w-full min-h-screen items-center px-2">
        <div className="flex flex-col w-full items-center">
            <div className="flex-center w-full flex-col">
                <h1 className="title mt-32 md:mt-24 text-center">
                    Velkommen til Kulturcafé Oskar
                </h1>
                <p className="text-slate-800/90 text-lg md:text-xl">- et unikt spillested i historiske rammer</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 space-x-4 space-y-4 mt-12">
                <div className="features group cursor-default">
                    <div className="flex justify-center">
                        <svg className="featuresimg" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                            <path d="M480-720q-33 0-56.5-23.5T400-800q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800q0 33-23.5 56.5T480-720ZM680-80v-200H480q-33 0-56.5-23.5T400-360v-240q0-33 23.5-56.5T480-680q24 0 41.5 10.5T559-636q55 66 99.5 90.5T760-520v80q-53 0-107-23t-93-55v138h120q33 0 56.5 23.5T760-300v220h-80Zm-280 0q-83 0-141.5-58.5T200-280q0-72 45.5-127T360-476v82q-35 14-57.5 44.5T280-280q0 50 35 85t85 35q39 0 69.5-22.5T514-240h82q-14 69-69 114.5T400-80Z"/>
                        </svg>
                    </div>
                    <div>
                        <h3 className="featurestitle">Handicapvenlig</h3>
                        <p className="featurestext">Adgangen til Oskar er handicapvenlig</p>
                    </div>
                </div>
                <div className="features group cursor-default">
                    <div className="flex justify-center">
                        <svg className="featuresimg" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                            <path d="M200-280v-280h80v280h-80Zm240 0v-280h80v280h-80ZM80-120v-80h800v80H80Zm600-160v-280h80v280h-80ZM80-640v-80l400-200 400 200v80H80Zm178-80h444-444Zm0 0h444L480-830 258-720Z"/>
                        </svg>
                    </div>
                    <div>
                        <h3 className="featurestitle">Nonprofit</h3>
                        <p className="featurestext">Oskar er en nonprofit forening</p>
                    </div>
                </div>
                <div className="features group cursor-default">
                    <div className="flex justify-center">
                        <svg className="featuresimg" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                            <path d="M740-560h140v80h-80v220q0 42-29 71t-71 29q-42 0-71-29t-29-71q0-42 29-71t71-29q8 0 18 1.5t22 6.5v-208ZM120-160v-112q0-35 17.5-63t46.5-43q62-31 126-46.5T440-440q42 0 83.5 6.5T607-414q-20 12-36 29t-28 37q-26-6-51.5-9t-51.5-3q-57 0-112 14t-108 40q-9 5-14.5 14t-5.5 20v32h321q2 20 9.5 40t20.5 40H120Zm320-320q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T520-640q0-33-23.5-56.5T440-720q-33 0-56.5 23.5T360-640q0 33 23.5 56.5T440-560Zm0-80Zm0 400Z"/>
                        </svg>
                    </div>
                    <div>
                        <h3 className="featurestitle">Kunstnere</h3>
                        <p className="featurestext">Erfarne og anerkendte kunstnere</p>
                    </div>
                </div>
                <div className="features group cursor-default">
                    <div className="flex justify-center">
                        <svg className="featuresimg" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                            <path d="M200-120q-17 0-28.5-11.5T160-160v-40q-50 0-85-35t-35-85v-200q0-50 35-85t85-35v-80q0-50 35-85t85-35h400q50 0 85 35t35 85v80q50 0 85 35t35 85v200q0 50-35 85t-85 35v40q0 17-11.5 28.5T760-120q-17 0-28.5-11.5T720-160v-40H240v40q0 17-11.5 28.5T200-120Zm-40-160h640q17 0 28.5-11.5T840-320v-200q0-17-11.5-28.5T800-560q-17 0-28.5 11.5T760-520v160H200v-160q0-17-11.5-28.5T160-560q-17 0-28.5 11.5T120-520v200q0 17 11.5 28.5T160-280Zm120-160h400v-80q0-27 11-49t29-39v-112q0-17-11.5-28.5T680-760H280q-17 0-28.5 11.5T240-720v112q18 17 29 39t11 49v80Zm200 0Zm0 160Zm0-80Z"/>
                        </svg>
                    </div>
                    <div>
                        <h3 className="featurestitle">Indretning</h3>
                        <p className="featurestext">Alle ser og hører lige godt</p>
                    </div>
                </div>
                <div className="features group cursor-default">
                    <div className="flex justify-center">
                        <svg className="featuresimg" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                            <path d="m368-320 112-84 110 84-42-136 112-88H524l-44-136-44 136H300l110 88-42 136ZM160-160q-33 0-56.5-23.5T80-240v-135q0-11 7-19t18-10q24-8 39.5-29t15.5-47q0-26-15.5-47T105-556q-11-2-18-10t-7-19v-135q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v135q0 11-7 19t-18 10q-24 8-39.5 29T800-480q0 26 15.5 47t39.5 29q11 2 18 10t7 19v135q0 33-23.5 56.5T800-160H160Zm0-80h640v-102q-37-22-58.5-58.5T720-480q0-43 21.5-79.5T800-618v-102H160v102q37 22 58.5 58.5T240-480q0 43-21.5 79.5T160-342v102Zm320-240Z"/>
                        </svg>
                    </div>
                    <div>
                        <h3 className="featurestitle">Billetsalg</h3>
                        <p className="featurestext">Direkte link til Ticketmasters billetsalg</p>
                    </div>
                </div>
                <div className="features group cursor-default">
                    <div className="flex justify-center">
                        <svg className="featuresimg" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                            <path d="M580-240q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"/>
                        </svg>
                    </div>
                    <div>
                        <h3 className="featurestitle">Arrangementer</h3>
                        <p className="featurestext">Vi kan skræddersy arrangementer</p>
                    </div>
                </div>
            </div>
            <div className="mt-32"/>
            <aside className="aside">
                <div className="asideleftimage">
                    <Image className="object-cover h-full w-full" src={Stemning} alt="rock koncert"/>
                </div>
                <div>
                    <h2 className="asidetitle">Tæt på musikken</h2>
                    <p className="asidetext">Kulturcafé Oskar er et spillested med levende musik for levende mennesker.</p>
                    <p className="asidetext">Hvert år afholdes mellem 26 og 30 koncerter, der spænder meget bredt stilmæssigt. Der er intime koncerter med en eller to musikere på scenen, rockkoncerter og danseaftener med god popmusik.</p>
                    <p className="asidetext">Fælles for det hele er et nøje udvalgt program med erfarne og anerkendte kunstnere præsenteret i et topprofessionelt setup med virkelig god lyd og lys.
                        På Kulturcafé Oskar kommer man tæt på musikken og musikken kommer tæt på publikum. Derfor vil mange gerne spille på Oskar og mange gæster kommer igen og igen på grund af den helt særlige stemning.</p>
                    <p className="asidetext">Sideløbende med musikken indgår Oskar i samarbejde med andre foreninger, der bruger stedet til fx ungdomsarrangementer (Søby UngdomsProjekt), teater og danseskole.</p>
                </div>
            </aside>
            <aside className="aside">
                <div>
                    <h2 className="asidetitle">Foreningen bag</h2>
                    <p className="asidetext">Kulturcafé Oskar drives af en kreds af frivillige ildsjæle med en fælles passion for levende musik og glæden ved at have et aktivt spillested i Søby.</p>
                    <p className="asidetext">Oskar er en nonprofit forening på ca. 40 medlemmer med en bestyrelse, samt en række andre udvalg / arbejdsgrupper.</p>
                    <p className="asidetext">Det lokale erhvervsliv, Søby Kommune samt forskellige organisationer og fonde støtter projektet økonomisk på flotteste vis. Sammen med billetindtægterne og barsalget er det foreningens økonomiske grundlag.</p>
                </div>
                <div className="asiderightimage">
                    <Image className="object-cover h-full w-full" src={Stemning3} alt="rock koncert"/>
                </div>
            </aside>
        </div>
    </main>
  )
}