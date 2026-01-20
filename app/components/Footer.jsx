'use client'

import Image from 'next/image'
import LogoIcon from '../../public/logo-abogado.svg';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <footer className='bg-primary mt-20 pt-12'>
            <div className='flex justify-between items-center mx-8 md:mx-20 mb-10 gap-5 '>
                <div className='flex flex-col items-center md:flex-row md:gap-2'>
                    <Image src={LogoIcon} width={40} height={40} alt='Logo' />
                    <p className='tracking-widest text-tertiary text-sm md:text-md uppercase mt-2 md:mt-0'>Grupo</p>
                    <p className='font-bold text-tertiary text-sm md:text-md uppercase'>Dany Rivera</p>
                </div>
                <div className='md:flex md:gap-5'>
                    <p className='font-semibold text-lg uppercase text-tertiary mb-4 md:mb-0'>Menu</p>

                    <ul className='text-tertiary grid grid-cols-2 justify-center items-center gap-3 md:flex text-sm md:text-base'>
                        <Link className="cursor-pointer" to="about" smooth={true} offset={-50} duration={2000}>Nosotros</Link>
                        <Link className="cursor-pointer" to="services" smooth={true} offset={-50} duration={2000}>Servicios</Link>
                        <Link className="cursor-pointer" to="abogados" smooth={true} offset={-50} duration={2000}>Abogados</Link>
                        <Link className="cursor-pointer" to="contact" smooth={true} offset={-50} duration={2000}>Contacto</Link>
                    </ul>
                </div>
            </div>
            <div className='border-t border-tertiary'>
                <p className='text-center text-tertiary py-7 text-sm px-5'>&copy; Grupo Rivera Abogados y Soluciones - Todos los Derechos Reservados</p>
            </div>
        </footer>
    )
}

export default Footer
