import Image from "next/image"
import Escritorio from "@/public/escritorio-2.jpg"

const Cita = () => {
    return (
        <section className="md:grid md:grid-cols-2 md:my-12 md:items-center">
            <div className="md:order-2 md:mr-12">
                <h2 className="text-4xl font-bold mx-2 text-center text-primary md:text-6xl md:w-2/3 md:mx-auto">Hable con un <span className="text-secondary">Abogado</span> Hoy Mismo</h2>
                <form className="flex flex-col mx-5 my-10 gap-5 md:grid md:grid-cols-2">
                    <input className="py-4 border border-[#e8e8e8] text-sm rounded-lg outline-none px-3" placeholder="Tu nombre" type="text" />
                    <input className="py-4 border border-[#e8e8e8] text-sm rounded-lg outline-none px-3" placeholder="Tu Apellido" type="text" />
                    <input className="py-4 border border-[#e8e8e8] text-sm rounded-lg outline-none px-3" placeholder="Tu Correo" type="email" />
                    <input className="py-4 border border-[#e8e8e8] text-sm rounded-lg outline-none px-3" placeholder="Tu Teléfono" type="tel" />
                    <textarea className="py-4 border border-[#e8e8e8] text-sm rounded-lg outline-none px-3 md:col-span-2 md:h-52" placeholder="Algún Mensaje..." name="msg" id="msg"></textarea>
                    <button className="text-tertiary bg-secondary font-bold  py-3 w-full rounded md:col-span-2">Enviar</button>
                </form>
            </div>
            <div className="md:order-1">
                <Image className="w-11/12 rounded-r-2xl md:w-10/12" src={Escritorio} width={600} height={600} alt="Escritorio" />
            </div>
        </section>
    )
}

export default Cita
