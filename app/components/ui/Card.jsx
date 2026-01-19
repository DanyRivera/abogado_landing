import React from 'react'
import Image from 'next/image'
import Facebook from '@/public/fb.svg';
import X from '@/public/x.svg';
import Instagram from '@/public/ig.svg';
import Youtube from '@/public/yt.svg';

const Card = ({ name, work, image }) => {
    return (
        <div>
            <Image className="rounded-t-xl h-50 md:h-60" src={`/${image}.jpg`} width={500} height={500} alt="Persona1" />
            <div className='bg-primary rounded-b-xl p-5 flex flex-col gap-5'>
                <div className='flex justify-between items-center'>
                    <div>
                        <h3 className='text-secondary text-xl md:text-3xl font-bold'>{name}</h3>
                        <p className='text-tertiary text-sm md:text-base'>{work}</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 md:text-6 text-tertiary">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                    </svg>
                </div>

                <div className='border-t text-secondary'></div>

                <div className='flex gap-3'>
                    <Image className="bg-secondary p-2 rounded-full" src={Facebook} width={40} height={40} alt="Social-Media" />
                    <Image className="bg-secondary p-2 rounded-full" src={X} width={40} height={40} alt="Social-Media" />
                    <Image className="bg-secondary p-2 rounded-full" src={Instagram} width={40} height={40} alt="Social-Media" />
                    <Image className="bg-secondary p-2 rounded-full" src={Youtube} width={40} height={40} alt="Social-Media" />
                </div>
            </div>
        </div>
    )
}

export default Card
