import Image from 'next/image'
import LogoIcon from '../../public/logo-abogado.svg';

const Footer = () => {
    return (
        <footer className='bg-primary mt-20 pt-12'>
            <div className='flex justify-between items-center mx-10 md:mx-20 mb-10 gap-5 '>
                <div className='flex flex-col items-center md:flex-row md:gap-2'>
                    <Image src={LogoIcon} width={50} height={50} alt='Logo' />
                    <p className='tracking-widest text-tertiary text-md uppercase mt-2 md:mt-0'>Grupo</p>
                    <p className='font-bold text-tertiary text-md uppercase'>Dany Rivera</p>
                </div>
                <div className='md:flex md:gap-5'>
                    <p className='font-semibold text-xl uppercase text-tertiary mb-4 md:mb-0'>Menu</p>

                    <ul className='text-tertiary grid grid-cols-2 justify-center items-center gap-3 md:flex'>
                        <li>Nosotros</li>
                        <li>Casos</li>
                        <li>Servicios</li>
                        <li>Contacto</li>
                    </ul>
                </div>
            </div>
            <div className='border-t border-tertiary'>
                <p className='text-center text-tertiary py-5 md:py-7 text-sm px-5'>&copy; Grupo Rivera Abogados y Soluciones - Todos los Derechos Reservados</p>
            </div>
        </footer>
    )
}

export default Footer
