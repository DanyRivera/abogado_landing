'use client'

import Slider from "./ui/Slider"
import * as motion from "motion/react-client"
import { Element } from "react-scroll"

const Abogados = () => {
    return (
        <Element name="abogados">
            <section className="my-20 md:mb-0">
                <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} className='text-center text-5xl text-primary font-bold md:text-6xl'>Nuestros <span className='text-secondary font-bold'>Abogados</span></motion.h2>
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} className='mx-5 text-sm mt-5 text-center md:text-lg md:mx-auto md:w-1/2'>
                    Contamos con un equipo de abogados altamente calificados y dedicados, con amplia experiencia en las más diversas áreas del Derecho. Cada miembro de nuestro equipo es cuidadosamente seleccionado, no solo por su excelencia académica y práctica, sino también por su capacidad para comprender las necesidades individuales de nuestros clientes y ofrecer soluciones jurídicas innovadoras y efectivas.
                </motion.p>
                <div>
                    <Slider />
                </div>
            </section>
        </Element>
    )
}

export default Abogados
