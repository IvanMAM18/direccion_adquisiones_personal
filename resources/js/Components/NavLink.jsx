import { Link } from '@inertiajs/react';
import React from 'react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <div className={
            'relative group inline-flex items-center px-1 pt-1 border-b-4 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
            (active
                ? 'border-orange-200 dark:border-orange-200 text-white dark:text-white focus:border-orange-200 '
                : 'border-transparent text-gray-500 dark:text-gray-600 hover:text-white dark:hover:text-white hover:border-orange-200 dark:hover:border-orange-200 focus:text-orange-200 dark:focus:text-orange-200 focus:border-orange-200 dark:focus:border-orange-200 ') +
            className
        }>
            <Link
                {...props}
                className={
                    'inline-flex items-center px-1 pt-1 border-b-4 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                    (active
                        ? 'border-orange-200 dark:border-orange-200 text-white dark:text-white focus:border-orange-200 '
                        : 'border-transparent text-gray-500 dark:text-gray-600 hover:text-white dark:hover:text-white hover:border-orange-200 dark:hover:border-orange-200 focus:text-orange-200 dark:focus:text-orange-200 focus:border-orange-200 dark:focus:border-orange-200 ') +
                    className
                }
            >
                {children}
            </Link>

            {children !== 'INICIO' && (
                <div className="absolute left-0 mt-36 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <Link href={route('home')} className="block px-4 py-2 text-black hover:bg-gray-200">
                        MORAL
                    </Link>
                    <Link href={route('home')} className="block px-4 py-2 text-black hover:bg-gray-200">
                        PERSONA
                    </Link>
                </div>
            )}
        </div>
    );
}