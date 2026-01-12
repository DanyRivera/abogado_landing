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
                    <nav className={`p-3 flex justify-between items-center fixed w-full transition-colors duration-300 ${scrolled
                            ? 'bg-secondary'
                            : 'bg-[#b0a884af]'
                        }`}>
                        <div className='flex gap-3'>
                            <Image src={LogoIcon} width={50} height={50} alt='Logo' />
                            <div className='flex flex-col justify-center items-center uppercase'>
                                <p className='tracking-widest text-[#f5f2f0e8]'>Grupo</p>
                                <p className='font-bold text-[#f5f2f0e8]'>Dany Rivera</p>
                            </div>
                        </div>
                        <div onClick={handleOpenMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" color='#f5f2f0b9' fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                            </svg>
                        </div>
                    </nav>
                    <section className='flex h-screen items-center mx-5'>
                        <div className='flex flex-col gap-3 '>
                            <h1 className='text-tertiary font-bold text-4xl uppercase leading-10'>Grupo Dany Rivera <br /> <span className='text-secondary font-light '>Asesoría Legal y Soluciones Jurídicas</span></h1>
                            <div className='flex flex-col gap-10'>
                                <p className='text-tertiary text-base'>
                                    En Grupo Dany Rivera, nos dedicamos a proteger tus intereses con soluciones jurídicas efectivas y personalizadas. Contamos con un equipo de profesionales del derecho altamente calificados, comprometidos con brindarte una atención cercana, ágil y eficiente, adaptada a tus necesidades.
                                </p>
                                <div>
                                    <button
                                        className='bg-secondary text-tertiary py-4 px-7 font-bold rounded uppercase text-sm tracking-wider'
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
                <section className={`absolute z-30 h-full w-full top-0 bg-[#2f1d0e] px-7 py-10 ${showMenuMobil ? 'menu-visible' : 'menu-hidden'}`}>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <Image
                                src="/images/coffe-header-mobil.svg"
                                alt="Logo"
                                width={40}
                                height={40}
                            />
                            <h1 className="text-white tracking-wider m-0 text-2xl font-bold">Dany Coffe</h1>
                        </div>
                        <div>
                            <svg onClick={handleCloseMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between h-full py-10">
                        <div>
                            <ul className="flex flex-col gap-5">
                                <li className="text-xl text-white font-bold tracking-wide border-b-2 pb-3">Oferta</li>
                                <li className="text-xl text-white font-bold tracking-wide border-b-2 pb-3">Nosotros</li>
                                <li className="text-xl text-white font-bold tracking-wide border-b-2 pb-3">Reseñas</li>
                                <li className="text-xl text-white font-bold tracking-wide border-b-2 pb-3">Por que Café Dany</li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-5">
                            <div className="flex gap-5">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex gap-5">
                                <button className="text-white tracking-wider">Login</button>
                                <button className="text-white tracking-wider">Sign Up</button>
                            </div>
                        </div>

                    </div>
                </section>
            )}
        </>



    )
}

export default Hero
