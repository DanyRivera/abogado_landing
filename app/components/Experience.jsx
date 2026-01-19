
import Image from "next/image";
import MartilloImage from "@/public/martillo.jpg"
import Escritorio from "@/public/escritorio-1.jpg"


const Experience = () => {
    return (
        <section className="my-14 md:flex md:justify-center md:items-center md:gap-20 md:my-0 md:mb-10">

            {/* Statistics */}
            <div>

                <div className="flex flex-col gap-10 items-center justify-center md:flex-row">

                    <div className="flex flex-col gap-1 items-center border-2 p-5 rounded-xl  border-secondary">
                        <p className="text-5xl font-bold text-secondary">+200</p>
                        <p className="text-primary font-semibold uppercase">Casos por Años</p>
                    </div>

                    <div className="flex flex-col gap-1 items-center border-2 p-5 rounded-xl  border-secondary">
                        <p className="text-5xl font-bold text-secondary">65%</p>
                        <p className="text-primary font-semibold uppercase">Veredictos Favorables</p>
                    </div>

                    <div className="flex flex-col gap-1 items-center border-2 p-5 rounded-xl  border-secondary">
                        <p className="text-5xl font-bold text-secondary">90%</p>
                        <p className="text-primary font-semibold uppercase">Clientes Satisfechos</p>
                    </div>

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
                        <button className="w-full text-tertiary bg-secondary px-10 py-2 rounded-full font-bold">Justicia</button>
                    </div>
                    <div className="flex flex-col gap-4 ">
                        <Image className="rounded" src={MartilloImage} width={300} height={300} alt="Martilllo" />
                        <p className="text-center text-secondary font-bold">Garantizamos la iguadad y la justicia.</p>
                    </div>
                </div>


                <div className="mx-5 md:mx-0">
                    <Image className="rounded" src={Escritorio} width={500} height={500} alt="Martilllo" />
                </div>

            </div>

        </section>
    )
}

export default Experience
