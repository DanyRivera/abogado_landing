import Image from "next/image"
import Balanza from "@/public/balanza.png"

const About = () => {
  return (
    <section className="flex flex-col gap-3 md:grid md:grid-cols-2 md:w-full md:items-center md:gap-0">

      <div className="relative h-100 md:h-full col-span-1">

        <div className="absolute left-5 top-5 md:left-20 md:top-10">
          <p className="text-secondary text-4xl font-bold md:font-semibold  md:text-6xl">24/7</p>
          <p className="text-primary uppercase text-sm w-2/3 font-semibold md:text-base">Servicio 24/7: Te atenderemos a cualquier hora.</p>
        </div>

        <Image className="absolute bottom-0 md:relative md:mx-auto md:w-full" src={Balanza} width={700} height={700} alt="Balanza" />
      </div>

      <div className="mx-5 flex flex-col gap-5 md:col-span-1 md:gap-10">
        <h2 className="text-4xl font-bold text-secondary md:text-6xl">Nuestra Amplía <br /> <span className="text-primary">Experiencia Jurídica</span></h2>
        <p className="text-sm text-primary md:text-lg md:w-5/6">Con casi tres décadas en el mercado, Grupo Rivera Abogados y Soluciones ha acumulado una vasta experiencia jurídica que nos posiciona entre los despachos más respetados de América Latina. Desde 1995, hemos combinado conocimiento técnico, innovación y un profundo entendimiento de las complejidades del Derecho, atendiendo a clientes nacionales e internacionales en diversas áreas.</p>

        <div className="flex flex-col gap-4 md:flex-row ">

          <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-13 text-white bg-secondary p-2 rounded-full">
              <path fillRule="evenodd" d="M3 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5H15v-18a.75.75 0 0 0 0-1.5H3ZM6.75 19.5v-2.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h.75a.75.75 0 0 1 0 1.5h-.75A.75.75 0 0 1 6 6.75ZM6.75 9a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM6 12.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 6a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75Zm-.75 3.75A.75.75 0 0 1 10.5 9h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 12a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM16.5 6.75v15h5.25a.75.75 0 0 0 0-1.5H21v-12a.75.75 0 0 0 0-1.5h-4.5Zm1.5 4.5a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 2.25a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75h-.008ZM18 17.25a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clipRule="evenodd" />
            </svg>

            <p className="font-semibold text-primary uppercase text-sm md:w-2/3">Asuntos Jurídicos Corporativos</p>
          </div>

          <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-13 text-white bg-secondary p-2 rounded-full">
              <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
              <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
            </svg>

            <p className="font-semibold text-primary uppercase text-sm md:w-2/3">Asuntos Jurídicos Corporativos</p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About
