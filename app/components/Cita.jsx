import Image from "next/image"
import Escritorio from "@/public/escritorio-2.jpg"
import * as motion from "motion/react-client"


const Cita = () => {
    return (
        <section className="md:grid md:grid-cols-2 md:my-12 md:items-center">
            <div className="md:order-2 md:mr-12">
                <motion.h2 initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.8}} className="text-4xl font-bold mx-2 text-center text-primary md:text-6xl md:w-2/3 md:mx-auto">Hable con un <span className="text-secondary">Abogado</span> Hoy Mismo</motion.h2>
                <form className="flex flex-col mx-5 my-10 gap-5 md:grid md:grid-cols-2">
                    <motion.input initial={{y:50}} whileInView={{y:0}} transition={{duration: 0.8}} className="py-4 border border-[#e8e8e8] text-sm rounded-lg outline-none px-3" placeholder="Tu nombre" type="text" />
                    <motion.input initial={{y:50}} whileInView={{y:0}} transition={{duration: 0.8}} className="py-4 border border-[#e8e8e8] text-sm rounded-lg outline-none px-3" placeholder="Tu Apellido" type="text" />
                    <motion.input initial={{y:50}} whileInView={{y:0}} transition={{duration: 0.8}} className="py-4 border border-[#e8e8e8] text-sm rounded-lg outline-none px-3" placeholder="Tu Correo" type="email" />
                    <motion.input initial={{y:50}} whileInView={{y:0}} transition={{duration: 0.8}} className="py-4 border border-[#e8e8e8] text-sm rounded-lg outline-none px-3" placeholder="Tu Teléfono" type="tel" />
                    <motion.textarea initial={{y:50}} whileInView={{y:0}} transition={{duration: 0.8}} className="py-4 border border-[#e8e8e8] text-sm rounded-lg outline-none px-3 md:col-span-2 md:h-52" placeholder="Algún Mensaje..." name="msg" id="msg"></motion.textarea>
                    <motion.button initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.8}} className="text-tertiary bg-secondary font-bold  py-3 w-full rounded md:col-span-2">Enviar</motion.button>
                </form>
            </div>
            <div className="md:order-1">
                <Image className="w-11/12 rounded-r-2xl md:w-10/12" src={Escritorio} width={600} height={600} alt="Escritorio" />
            </div>
        </section>
    )
}

export default Cita
