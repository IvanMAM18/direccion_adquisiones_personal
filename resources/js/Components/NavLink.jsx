import { Link } from '@inertiajs/react';
import React, { useState } from 'react';

export default function NavLink({ active = false, className = '', linkName = '' , children, ...props }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    
    return (
        <div 
            onMouseEnter={toggleDropdown} 
            onMouseLeave={closeDropdown} 
            className={
            'relative group inline-flex items-center px-1 pt-1 border-b-4 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
            (active
                ? 'border-orange-200 dark:border-orange-200 dark:text-orange-200 focus:border-orange-200 '
                : 'border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-orange-200 hover:border-orange-200 dark:hover:border-orange-200 focus:text-orange-200 dark:focus:text-orange-200 focus:border-orange-200 dark:focus:border-orange-200 ') +
            className
        }>
            
            {
                children === 'INICIO' ? 
                    (
                        <Link
                            {...props}
                        >
                            {children}
                        </Link>
                    ) : (
                        <>
                            <div
                                {...props}
                                className='cursor-default'
                            >
                                {children}
                            </div>
                            {isOpen && (
                                <div className="absolute w-auto z-10 left-1/2 transform -translate-x-1/2 top-full mt-1 text-center bg-orange-50 border-2 border-orange-200 shadow-lg rounded-md transition-opacity duration-200">
                                    <Link href={route(linkName, { modo: 'actualizacion' ,  tipo: 'moral' })} className="block px-4 py-2 text-rose-950 border border-x-transparent border-t-transparent border-b-orange-200 hover:rounded-t-md hover:text-orange-200 hover:bg-rose-900" onClick={closeDropdown}>
                                        ACTUALIZACION MORAL
                                    </Link>
                                    <Link href={route(linkName, { modo: 'actualizacion' ,  tipo: 'fisica' })} className="block px-4 py-2 text-rose-950 border border-x-transparent border-t-transparent border-b-orange-200 hover:text-orange-200 hover:bg-rose-900" onClick={closeDropdown}>
                                        ACTUALIZACION FISICA
                                    </Link>
                                    <Link href={route(linkName, { modo: 'alta' ,  tipo: 'moral' })} className="block px-4 py-2 text-rose-950 border border-x-transparent border-t-transparent border-b-orange-200 hover:text-orange-200 hover:bg-rose-900" onClick={closeDropdown}>
                                        ALTA MORAL
                                    </Link>
                                    <Link href={route(linkName, { modo: 'alta' ,  tipo: 'fisica' })} className="block px-4 py-2 text-rose-950 rounded-b-md hover:text-orange-200 hover:bg-rose-900" onClick={closeDropdown}>
                                        ALTA FISICA
                                    </Link>
                                </div>
                            )}
                        </>
                    )
            }
        </div>
    );
}