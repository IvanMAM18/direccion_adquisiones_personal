import { Head } from '@inertiajs/react';
import React, { useState,useRef,useEffect } from 'react';
import IconLocalForaneo from './IconLocalForaneo';
import ButtonExportExcel from './ButtonExportExcel';
import ModalInfoRequisitos from './ModalInfoRequisitos';
import ModalInfoFormato from './ModalInfoFormato';
import IconDownUp from './IconDownUp';
import axios from 'axios';
//import FileUpload from "@/Components/FileUpload";

export default function InfoFormato({modo, tipo}) {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 680);
    const [isVisible, setIsVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState('LOCAL');
    const [isOpen, setIsOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const [isOpenTwo, setIsOpenTwo] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const currentDate = new Date();
    const [estaEnBusqueda, setEstaEnBusqueda] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [id, setId] = useState('6');//id = '5'; // ID fijo para buscar
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('https://177u01isy3.lapaz.gob.mx/api/negocios/buscar', {
                    q: id,
                }, {
                    headers: {
                        'Authorization': 'Bearer $2y$10$cY1S7FqotCNZ6l6t4z//UOxkKiWisAtnPtnRsRtOHpkTMNEeyFgkq',
                        'Content-Type': 'application/json',
                    },
                });
                setData(response.data);
                console.log(data);
                setError(null);
            } catch (err) {
                setError('Error al buscar el negocio');
                setData(null);
            }
        };

        fetchData();
    }, []);

    const manejarCambio = (e) => {
        setInputValue(e.target.value); // Actualiza el estado con el valor del input
        console.log(e.target.value); // Muestra el valor en la consola
    };


    const manejarClickDeCancelar = () => {
        console.log('BUSCAR: '+inputValue);
        setId(inputValue);
        const fetchData = async () => {
            try {
                const response = await axios.post('https://177u01isy3.lapaz.gob.mx/api/negocios/buscar', {
                    q: inputValue,
                }, {
                    headers: {
                        'Authorization': 'Bearer $2y$10$cY1S7FqotCNZ6l6t4z//UOxkKiWisAtnPtnRsRtOHpkTMNEeyFgkq',
                        'Content-Type': 'application/json',
                    },
                });
                
                setData(response.data);
                console.log(data);
                setError(null);
            } catch (err) {
                // Manejo específico para el error 404
                if (err.response.status === 404) {
                    setError('No se encontró información para la búsqueda.');
                } else {
                    setError('Error al buscar el negocio');
                }
                setData(null);
            }
        };

        fetchData();
        setIsExpanded(true);
        setInputValue(''); // Limpia el campo de entrada
        console.log('Input limpiado'); // Mensaje en la consola
        console.log(error);
        setEstaEnBusqueda(false);
    };

    // Formato "11/12/2024"
    const formattedDate1 = `${currentDate.getDate().toString().padStart(2, '0')}/${(currentDate.getMonth() + 1).toString().padStart(2, '0')}/${currentDate.getFullYear()}`;

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpenTwo(false);
    };

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
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
                        {/* PARA CUANDO SE PUEDA VISUALIZAR SI SON LOCAL O FORANEOS */}
                        {/* <div className="relative inline-block text-left ">
                            <div className={`${isOpen ? ('bg-rose-950 text-orange-300 shadow-lg') : ('hover:bg-rose-950 hover:text-orange-300 text-rose-950')} flex items-center p-2 rounded-lg cursor-pointer  font-bold transition-all duration-300 ease-in-out`} 
                                onClick={toggleDropdown}
                            >
                                <IconLocalForaneo selectedTipoLF={selectedOption} tamanio={4}/>
                                <div className='pl-1 pr-6'>
                                    {selectedOption}
                                </div>
                                <IconDownUp clase={'w-full h-full left-0 pr-2'} tamanio={4} />
                            </div>

                            {isOpen && (
                                <div className="absolute p-1 left-0 z-10 mt-1 bg-rose-950 rounded-md shadow-lg">
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
                                            <circle cx="12" cy="12" r="10" />  <line x1="2" y1="12" x2="22" y2="12" />  
                                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                        </svg>
                                        FORANEO
                                    </div>
                                </div>
                            )}
                        </div> */}
                        <div className="flex items-center transition duration-700 ease-in-out rounded-lg mr-2">
                            <div className="relative rounded-lg">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={manejarCambio} 
                                    className="pl-2 border rounded-lg bg-transparent border-transparent text-rose-950 placeholder-rose-900 hover:border hover:border-rose-900 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-rose-900 "
                                    placeholder="BUSCAR"
                                />
                                <button
                                    onClick={manejarClickDeCancelar}
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-rose-900 hover:text-rose-950"
                                >
                                    <svg
                                        className="h-4 w-4" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"
                                    >
                                        <circle cx="11" cy="11" r="8" />
                                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        
                        <div className='ml-auto flex text-rose-950 font-bold'>  
                            <div onClick={toggleModal} className={`${isModalOpen ? ('bg-rose-950 text-orange-300 shadow-lg') : ('hover:bg-rose-950 hover:text-orange-300 hover:shadow-lg')} cursor-pointer flex p-2 items-center rounded-lg`}>
                                REQUISITOS
                                <svg className="h-4 w-4 ml-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    {isModalOpen && (
                        <ModalInfoRequisitos modo={modo} tipo={tipo}/>
                    )}
                    <div className='relative'>
                        
                        <div
                            className=
                            {`px-4 rounded-2xl opacity-85 transition-all duration-300 h-auto
                                ${isExpanded
                                    ? 'bg-orange-300 text-zinc-800 cursor-pointer hover:opacity-100 hover:text-pink-950 hover:shadow-xs hover:drop-shadow-lg'
                                    : isHovered
                                        ? 'bg-pink-950 text-orange-300 border-2 border-orange-300'
                                        : 'bg-transparent text-pink-950 border-2 border-orange-300'
                                } 
                            `}
                        >
                            {data ? (
                                isExpanded ? (
                                    <div 
                                        className='z-10 py-4 flex items-center'
                                        onClick={toggleExpand}
                                    >
                                        <svg className="h-10 w-10" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />  
                                            <polyline points="14 2 14 8 20 8" />  
                                            <line x1="16" y1="13" x2="8" y2="13" />  
                                            <line x1="16" y1="17" x2="8" y2="17" />  
                                            <polyline points="10 9 9 9 8 9" />
                                        </svg>
                                        <div className='px-4 text-xl font-bold'>
                                            {data.negocio.nombre.toUpperCase()}
                                        </div>
                                        <div  className='ml-auto mx-4'>
                                            {formattedDate1}
                                        </div>
                                        <IconDownUp clase={'w-full h-full left-0 pr-2'} tamanio={4} titulosFormatos={null}/>
                                    </div>
                                ):(
                                    <div className={`px-4 pb-4 `}>
                                        <div className='z-10 py-4 flex items-center'
                                            onMouseEnter={() => setIsHovered(true)} // Cambia el estado a true cuando el cursor entra
                                            onMouseLeave={() => setIsHovered(false)} // Cambia el estado a false cuando el cursor sale
                                        >
                                            <svg className="h-16 w-16" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />  
                                                <polyline points="14 2 14 8 20 8" />  
                                                <line x1="16" y1="13" x2="8" y2="13" />  
                                                <line x1="16" y1="17" x2="8" y2="17" />  
                                                <polyline points="10 9 9 9 8 9" />
                                            </svg>
                                            <div className='px-4 text-xl font-bold'>
                                                FORMATO DE {modo.toUpperCase()} {tipo.toUpperCase()}
                                            </div>
                                            <div  
                                                className='hover:text-orange-300  cursor-pointer justify-center'
                                                onClick={toggleExpand}
                                            >
                                                <IconDownUp clase={'w-full py-6 pr-8 mt-3 left-0 top-0'} tamanio={14} titulosFormatos={null} />
                                            </div> 
                                        </div>
                                        <ModalInfoFormato modo={modo} tipo={tipo} isHovered={isHovered} data={data}/>
                                        <ButtonExportExcel data={data} modo={modo} tipo={tipo}/>
                                    </div> 
                                )
                            ) : (
                                <div 
                                    className='z-10 py-4 flex items-center'
                                >
                                    <svg className="h-10 w-10" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />  
                                        <polyline points="13 2 13 9 20 9" />
                                    </svg>
                                    <div className='px-4 text-xl font-bold'>
                                        {tipo.toUpperCase()}
                                    </div>
                                    <div  className='ml-auto mx-4'>
                                        {formattedDate1}
                                    </div>
                                    <IconDownUp clase={'w-full h-full left-0 pr-2'} tamanio={4} titulosFormatos={null} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </>
    );
}
