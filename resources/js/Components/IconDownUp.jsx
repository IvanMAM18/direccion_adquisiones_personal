import React, { useState } from 'react';
import { Link } from '@inertiajs/react';

export default function IconDownUp({clase, tamanio, titulosFormatos}) {
    
    const [abajoArriba, setAbajoArriba] = useState(false);
    const [showOptions, setShowOptions] = useState(false);

    const toggleAbajo = () => {
        setAbajoArriba(!abajoArriba);
        setShowOptions(!showOptions);
    };
    
    return (
        <>
        
            {
                titulosFormatos != null ? (
                    <>
                        <div 
                            className='reltive px-16 py-3 flex items-center text-xl text-white cursor-pointer'
                            onClick={toggleAbajo}
                        >
                            <p className='pr-4'>
                                {titulosFormatos}
                            </p>
                            {abajoArriba ? 
                            (
                                <svg className={`h-${tamanio} w-${tamanio}`} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"/>  
                                    <polyline points="6 15 12 9 18 15" />
                                </svg>  
                            )
                            :
                            (
                                <svg className={`h-${tamanio} w-${tamanio}`} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            )}
                        </div>

                        {showOptions && (
                            <div className="relative px-16 bg-rose-950 text-black text-orange-200 opacity-90">
                                <Link href={route('formato', { modo: 'actualizacion' ,  tipo: 'moral' })} className="block hover:opacity-100 px-4 py-2 border border-x-transparent border-t-transparent border-b-orange-200 hover:text-orange-300 hover:border-2 hover:border-b-orange-300 hover:font-bold" >
                                    FORMATO DE ACTUALIZACION PARA PERSONAS MORALES
                                </Link>
                                <Link href={route('formato', { modo: 'actualizacion' ,  tipo: 'fisica' })} className="block px-4 py-2 border border-x-transparent border-t-transparent border-b-orange-200 hover:text-orange-300 hover:border-2 hover:border-b-orange-300 hover:font-bold" >
                                    FORMATO DE ACTUALIZACION PARA PERSONAS FISICAS
                                </Link>
                                <Link href={route('formato', { modo: 'alta' ,  tipo: 'moral' })} className="block px-4 py-2 border border-x-transparent border-t-transparent border-b-orange-200 hover:text-orange-300 hover:border-2 hover:border-b-orange-300 hover:font-bold" >
                                    FORMATO DE ALTA PARA PERSONAS MORALES
                                </Link>
                                <Link href={route('formato', { modo: 'alta' ,  tipo: 'fisica' })} className="block px-4 py-2 hover:text-orange-300 hover:font-bold">
                                    FORMATO DE ALTA PARA PERSONAS FISICAS
                                </Link>
                            </div>
                        )}
                    </>
                ) : (
                    <div 
                        className={`absolute ${clase} rounded-2xl flex items-center justify-end`}
                        onMouseEnter={toggleAbajo} 
                        onMouseLeave={toggleAbajo}
                    >
                        {abajoArriba ? 
                        (
                            <svg className={`h-${tamanio} w-${tamanio}`} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z"/>  
                                <polyline points="6 15 12 9 18 15" />
                            </svg>  
                        )
                        :
                        (
                            <svg className={`h-${tamanio} w-${tamanio}`} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        )}
                    </div>    
                )
            }
            
            
        </>
        
    );
}

