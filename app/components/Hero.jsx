'use client'

import { useState, useEffect } from "react";
import Image from 'next/image'
import LogoIcon from '../../public/logo-abogado.svg';

const Hero = () => {

    const [showMenuMobil, setShowMenuMobil] = useState(false);
    const [menuIsAmount, setMenuIsAmount] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    let timeoutId = null;

    useEffect(() => {
        if (showMenuMobil) setMenuIsAmount(true);
    }, [showMenuMobil])

    // Detectar scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleCloseMenu = () => {
        setShowMenuMobil(false);

        // Cancelar el timeout anterior si existe
        if (timeoutId) clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            setMenuIsAmount(false);
        }, 500);
    };

    const handleOpenMenu = () => {
        // Cancelar cualquier timeout previo
        if (timeoutId) clearTimeout(timeoutId);

        setShowMenuMobil(true);
        setMenuIsAmount(true); // Mostrar inmediatamente
    };

    // const handleClickMenuMobil = (element, offset) => {
    //     setShowMenuMobil(false);

    //     setTimeout(() => {
    //         setMenuIsAmount(false);
    //         scroller.scrollTo(element, {
    //             smooth: true,
    //             duration: 2500,
    //             offset: offset
    //         })
    //     }, 350);
    // }

    return (

        <>

            <header className='hero'>
                <section className='hero-content'>
                    <nav className={`md:hidden p-3 flex justify-between items-center fixed w-full transition-colors duration-300 ${scrolled
                        ? 'bg-secondary'
                        : 'bg-[#b0a884af]'
                        }`}>
                        <div className=''>
                            <Image src={LogoIcon} width={50} height={50} alt='Logo' />
                        </div>
                        <div>
                            <div className='flex flex-col justify-center items-center uppercase'>
                                <p className='tracking-widest text-tertiary'>Grupo</p>
                                <p className='font-bold text-tertiary'>Dany Rivera</p>
                            </div>
                        </div>
                        <div onClick={handleOpenMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" color='#f5f2f0b9' fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                            </svg>
                        </div>
                    </nav>
                    <nav className="hidden md:flex items-center justify-between mx-20 mt-10">
                        <div>
                            <div className='flex gap-3'>
                                <Image src={LogoIcon} width={60} height={60} alt='Logo' />
                                <div className='flex flex-col justify-center items-center uppercase'>
                                    <p className='tracking-widest text-tertiary text-2xl'>Grupo</p>
                                    <p className='font-bold text-tertiary text-2xl'>Dany Rivera</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <ul className="flex gap-10 uppercase text-tertiary">
                                <li>Nosotros</li>
                                <li>Casos</li>
                                <li>Servicios</li>
                                <li>Contacto</li>
                            </ul>
                        </div>
                        <div className="">
                            <div className="flex items-center gap-5">
                                <div className="relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 absolute bottom-3 left-3 text-tertiary">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                    <input className="outline-none border-2 text-white border-tertiary pl-10 pr-3 py-3 text-base rounded-full" type="search" placeholder="Buscar..." />
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-tertiary">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                            </div>
                        </div>
                    </nav>
                    <section className='flex h-screen items-center mx-5 md:mx-20 md:w-1/2 md:pb-34'>
                        <div className='flex flex-col gap-3 '>
                            <h1 className='text-tertiary font-bold text-4xl uppercase leading-10 md:text-6xl md:leading-15'>Grupo Dany Rivera <br /> <span className='text-secondary font-bold'>Asesoría Legal y Soluciones Jurídicas</span></h1>
                            <div className='flex flex-col gap-10'>
                                <p className='text-tertiary text-sm md:text-base md:w-2/3'>
                                    En Grupo Dany Rivera, nos dedicamos a proteger tus intereses con soluciones jurídicas efectivas y personalizadas. Contamos con un equipo de profesionales del derecho altamente calificados, comprometidos con brindarte una atención cercana, ágil y eficiente, adaptada a tus necesidades.
                                </p>
                                <div>
                                    <button
                                        className='bg-secondary text-tertiary py-4 px-7 font-bold  uppercase text-sm tracking-wider rounded-full'
                                    >Contactanos</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </header>

            <div>ok</div>
            <div>ok</div>
            <div>ok</div>
            <div>ok</div>
            <div>ok</div>
            <div>ok</div>
            <div>ok</div>
            <div>ok</div>
            <div>ok</div>
            <div>ok</div>
            <div>ok</div>
            <div>ok</div>
            <div>ok</div>
            <div>ok</div>
            <div>ok</div>
            <div>ok</div>
            <div>ok</div>
            <div>ok</div>

            {menuIsAmount && (
                <section className={`fixed z-30 h-full w-full top-0 text-tertiary bg-secondary px-7 py-10 ${showMenuMobil ? 'menu-visible' : 'menu-hidden'}`}>
                    <div className="flex justify-between items-center">
                        <div className='flex flex-col justify-start items-start uppercase'>
                            <p className='tracking-widest  text-xl'>Grupo</p>
                            <p className='font-bold text-xl'>Dany Rivera</p>
                        </div>
                        <div onClick={handleCloseMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-tertiary size-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>

                        </div>
                    </div>

                    <div className="flex flex-col justify-between h-full py-10">
                        <div>
                            <ul className="flex flex-col gap-5">
                                <li className="text-lg  tracking-wider uppercase">Experiencia</li>
                                <li className="text-lg  tracking-wider uppercase">Nosotros</li>
                                <li className="text-lg  tracking-wider uppercase">Servicios</li>
                                <li className="text-lg  tracking-wider uppercase">Clientes</li>
                                <li className="text-lg  tracking-wider uppercase">Contacto</li>
                            </ul>
                        </div>

                        <div className="">
                            <div className="flex items-center gap-5">
                                <div className="relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 absolute bottom-3 left-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                    <input className="outline-none border border-tertiary pl-10 pr-3 py-3 text-base rounded-full" type="search" placeholder="Buscar..." />
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}

export default Hero
