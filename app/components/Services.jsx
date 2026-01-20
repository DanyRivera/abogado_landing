import Image from "next/image"
import MujerJusticia from "@/public/mujer1.png"
import * as motion from "motion/react-client"


const Services = () => {
    return (
        <section className="md:flex md:justify-center md:items-center md:gap-20 ">
            <div>
                <div className="flex justify-center ">
                    <div className="flex flex-col gap-1">
                        <motion.h2 initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.8}} className="text-5xl text-secondary font-bold md:text-7xl">Servicios</motion.h2>
                        <motion.p initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.8}} className="text-5xl text-primary font-bold md:text-7xl">y Areas de</motion.p>
                        <motion.p initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.8}} className="text-5 text-5xl text-secondary font-bold md:text-7xl">Especialización</motion.p>
                    </div>
                </div>
                <div className="mx-10 mt-14 flex flex-col gap-10">
                    <motion.div initial={{ x: 20 }} whileInView={{ x: 0 }} transition={{ duration: 0.8 }} className="flex items-center gap-4 border-b border-secondary pb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-secondary border border-secondary p-2 rounded-full">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                        </svg>
                        <div>
                            <p className="text-primary font-semibold uppercase">Derecho Inmobiliario</p>
                        </div>
                    </motion.div>

                    <motion.div initial={{ x: 20 }} whileInView={{ x: 0 }} transition={{ duration: 0.8 }} className="flex items-center gap-4 border-b border-secondary pb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-secondary border border-secondary p-2 rounded-full">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008Z" />
                        </svg>

                        <div>
                            <p className="text-primary font-semibold uppercase">Derecho Laboral</p>
                        </div>
                    </motion.div>

                    <motion.div initial={{ x: 20 }} whileInView={{ x: 0 }} transition={{ duration: 0.8 }} className="flex items-center gap-4 border-b border-secondary pb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-secondary border border-secondary p-2 rounded-full">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002" />
                        </svg>

                        <div>
                            <p className="text-primary font-semibold uppercase">Derecho Civil</p>
                        </div>
                    </motion.div>

                    <motion.div initial={{ x: 20 }} whileInView={{ x: 0 }} transition={{ duration: 0.8 }} className="flex items-center gap-4 border-b border-secondary pb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-secondary border border-secondary p-2 rounded-full">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                        </svg>

                        <div>
                            <p className="text-primary font-semibold uppercase">Derecho del Consumidor</p>
                        </div>
                    </motion.div>

                    <motion.div initial={{ x: 20 }} whileInView={{ x: 0 }} transition={{ duration: 0.8 }} className="flex items-center gap-4 border-b border-secondary pb-5">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-secondary border border-secondary p-2 rounded-full">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                        </svg>


                        <div>
                            <p className="text-primary font-semibold uppercase">Derecho Fiscal/Tributario</p>
                        </div>
                    </motion.div>

                    <motion.div initial={{ x: 20 }} whileInView={{ x: 0 }} transition={{ duration: 0.8 }} className="flex items-center gap-4 border-b border-secondary pb-5">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-secondary border border-secondary p-2 rounded-full">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>

                        <div>
                            <p className="text-primary font-semibold uppercase">Derecho Familiar</p>
                        </div>
                    </motion.div>

                </div>
            </div>
            <motion.img initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.8}} className="md:w-2/5" src="/mujer1.png" alt="Mujer Justicia" />
        </section>
    )
}

export default Services
