
import Image from "next/image";
import MartilloImage from "@/public/martillo.jpg"
import Escritorio from "@/public/escritorio-1.jpg"
import * as motion from "motion/react-client"

const Experience = () => {
    return (
        <section className="my-14 md:flex md:justify-center md:items-center md:gap-20 md:mt-0 md:mb-10 md:mx-20">

            {/* Statistics */}
            <div>

                <div className="flex flex-col gap-10 items-center justify-center md:flex-row">

                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} className="flex flex-col gap-1 items-center border-2 p-5 rounded-xl  border-secondary">
                        <p className="text-5xl font-bold text-secondary">+200</p>
                        <p className="text-primary font-semibold uppercase">Casos por Años</p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className="flex flex-col gap-1 items-center border-2 p-5 rounded-xl  border-secondary">
                        <p className="text-5xl font-bold text-secondary">65%</p>
                        <p className="text-primary font-semibold uppercase">Veredictos Favorables</p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.2 }} className="flex flex-col gap-1 items-center border-2 p-5 rounded-xl  border-secondary">
                        <p className="text-5xl font-bold text-secondary">90%</p>
                        <p className="text-primary font-semibold uppercase">Clientes Satisfechos</p>
                    </motion.div>

                </div>

                <div className="border border-secondary rounded-full pl-6 my-10 mx-3 flex justify-between items-center">
                    <p>Descubra más sobre nosotros</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-14 bg-secondary text-tertiary p-5 rounded-full">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
                    </svg>
                </div>

            </div>

            <div className="flex flex-col gap-5 md:flex-row md:gap-0 items-center">

                {/* CARD */}
                <div className="bg-[#f6f6f6] mx-5 py-5 px-5 rounded">
                    <div className="flex justify-start mb-5">
                        <motion.button initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} className="w-full text-tertiary bg-secondary px-10 py-2 rounded-full font-bold">Justicia</motion.button>
                    </div>
                    <div className="flex flex-col gap-4 ">
                        <motion.img viewport={{ once: true }} initial={{ scale: 0.9 }} whileInView={{ scale: 1 }} transition={{ duration: 0.8 }} className="rounded" src="/martillo.jpg" alt="Martilllo" />
                        <p className="text-center text-secondary font-bold">Garantizamos la iguadad y la justicia.</p>
                    </div>
                </div>


                <div className="mx-5 md:mx-0">
                    <motion.img viewport={{ once: true }} initial={{ scale: 0.9 }} whileInView={{ scale: 1 }} transition={{ duration: 0.8 }} className="rounded" src="/escritorio-1.jpg" alt="Martilllo" />
                </div>

            </div>

        </section>
    )
}

export default Experience
