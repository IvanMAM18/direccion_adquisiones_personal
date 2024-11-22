import { Link } from '@inertiajs/react';
import React, { useState } from 'react';

export default function ResponsiveNavLink({ active = false, className = '', linkName = '', children, ...props }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    return (
        <div 
            onClick={toggleDropdown}
            className={`w-full  items-start ps-3 pe-4 py-2 border-l-4 ${
                        active
                            ? 'border-orange-400 dark:border-orange-300 text-orange-700 dark:text-orange-300 bg-rose-900 dark:bg-rose-900 dark:focus:text-orange-200 focus:bg-orange-100 dark:focus:bg-orange-300 focus:border-orange-300 dark:focus:border-orange-300'
                            : 'border-transparent dark:text-orange-300 dark:hover:bg-rose-900 hover:border-orange-300 dark:hover:border-orange-300 focus:text-orange-800 dark:focus:text-orange-300 focus:bg-orange-50 dark:focus:bg-orange-700 focus:border-orange-300 dark:focus:border-orange-600'
                    } text-base font-medium focus:outline-none transition duration-150 ease-in-out ${className}`}
        >

            {children === 'INICIO' ? (
                <Link
                    {...props}
                    
                >
                    {children}
                </Link>
            ) : (
                <>
                    <div>
                       {children}
                    </div>
                    {isOpen && (
                        <div className="relative w-full rounded mt-1">
                            <Link
                                href={route(linkName, { tipo: 'moral' })} className="block px-4 py-2 text-black rounded-md hover:bg-gray-200" onClick={closeDropdown}
                            >
                                MORAL
                            </Link>
                            <Link href={route(linkName, { tipo: 'fisica' })} className="block px-4 py-2 text-black rounded-md hover:bg-gray-200" onClick={closeDropdown}>
                                FISICA
                            </Link>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}