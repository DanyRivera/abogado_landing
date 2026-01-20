import Image from "next/image";
import Comilla from "@/public/comilla.svg";
import People1 from "@/public/people1.webp";
import People2 from "@/public/people2.webp";
import People3 from "@/public/people3.webp";
import People4 from "@/public/people4.webp";
import People5 from "@/public/people5.webp";
import * as motion from "motion/react-client"


const Reviews = () => {
    return (
        <section className="md:flex md:justify-center md:mx-20 md:items-center">
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.8}} className="md:relative">
                <Image className="w-1/4 ml-4 md:absolute md:-top-38" src={Comilla} width={200} height={200} alt="Comilla" />
                <h2 className="font-bold text-primary text-4xl text-center mx-10 leading-10 md:text-7xl md:leading-18 md:mx-0 md:ml-38 ">Relatos de Nuestros <span className="text-secondary">Clientes</span></h2>
            </motion.div>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.8}} className="my-10 flex flex-col gap-1 md:w-10/12">
                <div className="flex justify-center gap-2 items-center ">
                    <Image className="rounded-full md:w-24" src={People1} width={50} height={50} alt="Comilla" />
                    <Image className="rounded-full md:w-24" src={People2} width={50} height={50} alt="Comilla" />
                    <Image className="rounded-full md:w-32" src={People3} width={75} height={75} alt="Comilla" />
                    <Image className="rounded-full md:w-24" src={People4} width={50} height={50} alt="Comilla" />
                    <Image className="rounded-full md:w-24" src={People5} width={50} height={50} alt="Comilla" />
                </div>
                <p className="text-center text-primary font-semibold">Rafael Gomez</p>
                <p className="text-center uppercase font-semibold text-gray-300">Gerente</p>
                <ul className="flex justify-center">
                    {[1, 2, 3, 4, 5].map((index) => (
                        <li key={index}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellow-300">
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                            </svg>
                        </li>
                    ))}
                </ul>
                <p className="text-center mx-5 md:text-xl md:w-1/2 md:mx-auto">
                    Más que un despacho de abogados, encontré en Grupo Rivera un verdadero aliado. Me brindaron orientación en un momento difícil con empatía y profesionalismo, siempre buscando la mejor solución para mi caso.
                </p>
            </motion.div>
        </section>
    )
}

export default Reviews
