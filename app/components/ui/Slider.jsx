'use client'

import { useState, useEffect } from "react"
import Card from "./Card";
import data from "@/data.json";
import { motion, AnimatePresence } from "framer-motion";


const Slider = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerSection, setItemsPerSection] = useState(3);
    const [direction, setDirection] = useState(0);

    // Función para determinar cuántos ítems mostrar
    const updateItemsPerSection = () => {
        if (typeof window !== 'undefined') {
            setItemsPerSection(window.innerWidth <= 768 ? 1 : 4);
        }
    };

    useEffect(() => {
        // Establecer valor inicial
        updateItemsPerSection();

        // Escuchar cambios de tamaño
        window.addEventListener('resize', updateItemsPerSection);

        // Cleanup
        return () => {
            window.removeEventListener('resize', updateItemsPerSection);
        };
    }, []);

    const totalItems = Math.ceil(data.length / itemsPerSection); // Total number of review items


    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % totalItems);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
    };

    const goToPage = (index) => {
        setDirection(index > currentIndex ? 1 : index < currentIndex ? -1 : 0);
        setCurrentIndex(index);
    };

    const startIndex = currentIndex * itemsPerSection;
    const visibleData = data.slice(startIndex, startIndex + itemsPerSection);

    // Animation variants based on direction
    const getAnimationVariants = () => ({
        initial: { opacity: 0, x: direction > 0 ? 35 : direction < 0 ? -35 : 0 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: direction > 0 ? -35 : direction < 0 ? 35 : 0 },
        transition: { duration: 0.3 }
    });

    return (
        <>
            <div className="flex flex-row gap-1 justify-center items-center mt-10 md:mx-14 md:gap-10">
                <button onClick={prevSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 text-primary cursor-pointer">
                        <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
                    </svg>
                </button>
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        {...getAnimationVariants()}
                        className="flex flex-col md:flex-row md:justify-center gap-10 contenedor"
                    >
                        {visibleData.map((info, index) => (
                            <Card key={index} name={info.name} work={info.work} image={info.image} />
                        ))}
                    </motion.div>
                </AnimatePresence>

                <button onClick={nextSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 text-primary cursor-pointer">
                        <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>

            <div className="flex justify-center gap-3 mt-10 ">
                {Array.from({ length: totalItems }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToPage(index)}
                        className={`w-5 h-5 rounded-full transition-colors cursor-pointer ${index === currentIndex ? "bg-primary" : "bg-secondary"
                            }`}
                    ></button>
                ))}
            </div>
        </>
    )
}

export default Slider
