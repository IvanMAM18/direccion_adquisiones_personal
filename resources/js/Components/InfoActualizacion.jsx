import { Head } from '@inertiajs/react';
import React, { useState,useRef,useEffect } from 'react';
import IconLocalForaneo from './IconLocalForaneo';
import IconDownUp from './IconDownUp';
import axios from 'axios';
//import FileUpload from "@/Components/FileUpload";

export default function InfoExtraTabla({tipo}) {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 680);
    const [isVisible, setIsVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState('LOCAL');
    const [isOpen, setIsOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [abajoArriba, setAbajoArriba] = useState(false);
    const [isOpenTwo, setIsOpenTwo] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpenTwo(false);
    };

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const toggleAbajo = () => {
        setAbajoArriba(!abajoArriba);
    };

    useEffect(() => {
        const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 800);
    };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    
    
    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        setIsExpanded(true);
    };


    return (
            <>
                <div className='relative mt-4 pb-10 mx-auto'>
                    <div className='flex mb-4'>
                        <div className="relative inline-block text-left">
                            <div className='flex items-center cursor-pointer' onClick={toggleDropdown}>
                                <IconLocalForaneo selectedTipoLF={selectedOption} tamanio={4}/>
                                <div className='mx-2'>
                                    {selectedOption}
                                </div>
                                <IconDownUp DownUp={isOpen} tamanio={4} />
                            </div>

                            {isOpen && (
                                <div className="absolute left-0 z-10 mt-1 bg-rose-950 rounded-md shadow-lg">
                                    <div 
                                        className="block flex items-center px-4 py-2 rounded-md text-white hover:text-orange-200 hover:font-bold hover:bg-rose-900 cursor-pointer"
                                        onClick={() => handleOptionClick('LOCAL')}
                                    >
                                        <svg className="h-4 w-4 mr-1" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                        LOCAL
                                    </div>
                                    <div 
                                        className="block flex items-center px-4 py-2 rounded-md text-white hover:text-orange-200 hover:font-bold hover:bg-rose-900 cursor-pointer"
                                        onClick={() => handleOptionClick('FORANEO')}
                                    >
                                        <svg className="h-4 w-4 mr-1" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                        </svg>
                                        FORANEO
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className='ml-auto flex'>
                            <div className='mx-2 flex items-center'>
                                BUSCAR
                                <svg className="h-4 w-4 mx-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8" />  
                                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                </svg>
                            </div>
                            <div className='mx-2 flex items-center'>
                                REQUISITOS
                                <svg className="h-4 w-4 ml-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    
                    <div className='relative'>
                        <div
                            className={`px-4  text-rose-950 rounded-2xl opacity-85   transition-all duration-300 ${
                                isExpanded ? 'bg-orange-300 cursor-pointer hover:opacity-100 hover:text-white hover:shadow-xl hover:drop-shadow-lg' : 'h-auto border-2 border-orange-300'
                            }`}
                        >
                            {isExpanded ? (
                                <div 
                                    className='z-10 py-4 flex items-center'
                                    onClick={toggleExpand}
                                >
                                    <IconLocalForaneo selectedTipoLF={selectedOption} tamanio={10} />
                                    <div className='px-4 text-xl font-bold'>
                                        NOMBRE {tipo}
                                    </div>
                                    <div  className='ml-auto mx-4'>
                                        22/11/2024
                                    </div>
                                    <IconDownUp  DownUp={isExpanded} tamanio={4} />
                                </div>
                            ):(
                               <div className='px-4 pb-4'>
                                    <div className='z-10 py-4 flex items-center'>
                                        <IconLocalForaneo selectedTipoLF={selectedOption} tamanio={16} />
                                        <div className='px-4 text-xl font-bold'>
                                            {selectedOption}
                                        </div>
                                        <div  
                                            className='ml-auto mx-2 hover:text-orange-300 cursor-pointer'
                                            onClick={toggleExpand}
                                            onMouseEnter={toggleAbajo} 
                                            onMouseLeave={toggleAbajo}
                                        >
                                            <IconDownUp  DownUp={abajoArriba} tamanio={8} />
                                        </div>
                                    </div>
                                    <div className='text-lg text-end'>
                                        LA PAZ, B.C.S A 15 DE NOVIEMBRE DEL 2024
                                    </div>
                                    <div className='mb-1'>
                                        <p className='text-xs text-zinc-800'>RAZON SOCIAL:</p>
                                        <p className='text-xl font-bold'>[Razón Social]</p>
                                    </div>
                                    <div className='my-1'>
                                        <p className='text-xs text-zinc-800'>NOMBRE COMERCIO:</p>
                                        <p className='text-xl font-bold'>[Nombre Comercio]</p>
                                    </div>
                                    <div className='my-1'>
                                        <p className='text-xs text-zinc-800'>DOMICILIO: </p>
                                        <p className='text-xl font-bold'>[Domicilio]</p>
                                    </div>
                                    <div className='flex my-1'>
                                        <div className='w-1/2'>
                                            <p className='text-xs text-zinc-800'>COLONIA:</p>
                                            <p className='text-xl font-bold'>[Colonia]</p>
                                        </div>
                                        <div className='w-1/4'>
                                            <p className='text-xs text-zinc-800'>CODIGO POSTAL: </p>
                                            <p className='text-xl font-bold'>[Código Postal]</p>
                                        </div>
                                        <div className='w-1/4'>
                                            <p className='text-xs text-zinc-800'>POBLACION: </p>
                                            <p className='text-xl font-bold'>[Población]</p>
                                        </div>
                                    </div>
                                    <div className='flex my-1'>
                                        <div className='w-1/2'>
                                            <p className='text-xs text-zinc-800'>CORREO ELECTRONICO:</p>
                                            <p className='text-xl font-bold'>[Correo Electrónico]</p>
                                        </div>
                                        <div className='w-1/2'>
                                            <p className='text-xs text-zinc-800'>REGISTRO GENERAL DE CONTR.:</p>
                                            <p className='text-xl font-bold'>[Registro General]</p>
                                        </div>
                                    </div>
                                    <div className='my-1'>
                                        <p className='text-xs text-zinc-800'>ACTIVIDAD ECONOMICA Y/O PREPONDERANTE:</p>
                                        <p className='text-xl font-bold'>[Actividad Económica]</p>
                                    </div>
                                    <div className='flex my-1'>
                                        <div className='w-1/2'>
                                            <p className='text-xs text-zinc-800'>TELEFONO EMPRESA:</p>
                                            <p className='text-xl font-bold'>[Teléfono Empresa]</p>
                                        </div>
                                        <div className='w-1/4'>
                                            <p className='text-xs text-zinc-800'>NUM. CELULAR:</p>
                                            <p className='text-xl font-bold'>[Número Celular]</p>
                                        </div>
                                        <div className='w-1/4'>
                                            <p className='text-xs text-zinc-800'>AGENTE DE VENTA Y/O PERSONA DE ENLACE:</p>
                                            <p className='text-xl font-bold'>[Agente de Venta]</p>
                                        </div>
                                    </div>
                                    <div className='flex my-1'>
                                        <div className='w-1/2'>
                                            <p className='text-xs text-zinc-800'>NOMBRE COMPLETO DEL REPRESENTANTE LEGAL:</p>
                                            <p className='text-xl font-bold'>[Nombre Completo]</p>
                                        </div>
                                        <div className='w-1/2'>
                                            <p className='text-xs text-zinc-800'>TELEFONO DEL REPRESENTANTE LEGAL:</p>
                                            <p className='text-xl font-bold'>[Teléfono del Representante]</p>
                                        </div>
                                    </div>
                                    <div className='flex my-1'>
                                        <div className='w-1/2'>
                                            <p className='text-xs text-zinc-800'>RFC DEL REPRESENTANTE LEGAL:</p>
                                            <p className='text-xl font-bold'>[RFC]</p>
                                        </div>
                                        <div className='w-1/2'>
                                            <p className='text-xs text-zinc-800'>PLAZO DE CREDITO:</p>
                                            <p className='text-xl font-bold'>[Plazo de Crédito]</p>
                                        </div>
                                    </div>
                                    <div className='justify-items-end'>
                                        <button className='flex items-center bg-orange-300 text-zinc-800 py-2 px-4 rounded hover:bg-orange-400 hover:font-bold hover:text-white'>
                                            <svg className="h-4 w-4" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z"/>  
                                                <path d="M14 3v4a1 1 0 0 0 1 1h4" />  
                                                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />  
                                                <line x1="12" y1="11" x2="12" y2="17" />  
                                                <polyline points="9 14 12 17 15 14" />
                                            </svg>
                                            EXPORTAR EXCEL
                                        </button>
                                    </div>
                                </div> 
                            )}
                        </div>
                    </div>
                    

                    
                    
                </div>
            </>
    );
}
