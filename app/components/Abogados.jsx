import Slider from "./ui/Slider"

const Abogados = () => {
    return (
        <section className="my-20">
            <h2 className='text-center text-5xl text-primary font-bold md:text-6xl'>Nuestros <span className='text-secondary font-bold'>Abogados</span></h2>
            <p className='mx-5 text-sm mt-5 text-center md:text-lg md:mx-auto md:w-1/2'>
                Contamos con un equipo de abogados altamente calificados y dedicados, con amplia experiencia en las más diversas áreas del Derecho. Cada miembro de nuestro equipo es cuidadosamente seleccionado, no solo por su excelencia académica y práctica, sino también por su capacidad para comprender las necesidades individuales de nuestros clientes y ofrecer soluciones jurídicas innovadoras y efectivas.
            </p>
            <div>
                <Slider />
            </div>
        </section>
    )
}

export default Abogados
