import { Head } from '@inertiajs/react';
import React, { useState,useRef,useEffect } from 'react';
import axios from 'axios';
//import FileUpload from "@/Components/FileUpload";

export default function InfoExtraTabla() {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 680);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 640);
    };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
            <>
                <div className={`relative mt-4 pb-10 mx-auto`}>
                    <div className={`text-pink-950 w-full ${isSmallScreen ? ('text-xl mt-4 text-center') : ('mt-8 text-2xl')} font-extrabold`}>
                        FORMATO DE ACTUALIZACION
                    </div>
                    <a href='formato/actualizacion/moral'>
                        <div className={`relative my-6 px-10 bg-orange-300  text-rose-950 rounded-2xl opacity-85 cursor-pointer hover:opacity-100 hover:shadow-xl hover:drop-shadow-lg`}>
                            <div className={`z-10 py-4 ${isSmallScreen ?('mx-auto'):('flex')} items-center`}>
                                <svg className={`h-24 w-24 ${isSmallScreen ?('w-full'):('')}`} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />  <line x1="9" y1="9" x2="10" y2="9" />  <line x1="9" y1="13" x2="15" y2="13" />  
                                    <line x1="9" y1="17" x2="15" y2="17" />
                                </svg>
                                <div className={`${isSmallScreen ? ('text-xl text-center') : ('px-6 text-2xl')} font-bold`}>
                                    PADRON DE PROVEEDORES PARA PERSONAS MORALES
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href='formato/actualizacion/fisica'>
                    <div className={`relative my-10 px-10 bg-orange-300  text-rose-950 rounded-2xl opacity-85 cursor-pointer hover:opacity-100 hover:shadow-xl hover:drop-shadow-lg`}>
                            <div className={`z-10 py-4 ${isSmallScreen ?('mx-auto'):('flex')} items-center`}>
                                <svg className={`h-24 w-24 ${isSmallScreen ?('w-full'):('')}`} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />  <line x1="9" y1="9" x2="10" y2="9" />  <line x1="9" y1="13" x2="15" y2="13" />  
                                    <line x1="9" y1="17" x2="15" y2="17" />
                                </svg>
                                <div className={`${isSmallScreen ? ('text-xl text-center') : ('px-6 text-2xl')} font-bold`}>
                                    PADRON DE PROVEEDORES PARA PERSONAS FISICAS
                                </div>
                            </div>
                        </div>
                    </a>
                    <div className={`text-pink-950 w-full mt-16 ${isSmallScreen ? ('text-xl text-center') : ('text-2xl')} font-bold`}>
                        FORMATO DE ALTA
                    </div>
                    <a href='formato/alta/moral'>
                        <div className={`relative my-10 px-10 bg-rose-950  text-orange-300 rounded-2xl opacity-85 cursor-pointer hover:opacity-100 hover:shadow-xl hover:drop-shadow-lg`}>
                            <div className={`z-10 py-4 ${isSmallScreen ?('mx-auto'):('flex')} items-center`}>
                                <svg className={`h-24 w-24 ${isSmallScreen ?('w-full'):('')}`} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />  <line x1="9" y1="9" x2="10" y2="9" />  <line x1="9" y1="13" x2="15" y2="13" />  
                                    <line x1="9" y1="17" x2="15" y2="17" />
                                </svg>
                                <div className={`${isSmallScreen ? ('text-xl text-center') : ('px-6 text-2xl')} font-extrabold`}>
                                    PADRON DE PROVEEDORES PARA PERSONAS MORALES
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href='formato/alta/fisica'>
                        <div className={`relative my-4 px-10 bg-rose-950  text-orange-300 rounded-2xl opacity-85 cursor-pointer hover:opacity-100 hover:shadow-xl hover:drop-shadow-lg`}>
                            <div className={`z-10 py-4 ${isSmallScreen ?('mx-auto'):('flex')} items-center`}>
                                <svg className={`h-24 w-24 ${isSmallScreen ?('w-full'):('')}`} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />  <line x1="9" y1="9" x2="10" y2="9" />  <line x1="9" y1="13" x2="15" y2="13" />  
                                    <line x1="9" y1="17" x2="15" y2="17" />
                                </svg>
                                <div className={`${isSmallScreen ? ('text-xl text-center') : ('px-6 text-2xl')} font-bold`}>
                                    PADRON DE PROVEEDORES PARA PERSONAS FISICAS
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </>
    );
}
