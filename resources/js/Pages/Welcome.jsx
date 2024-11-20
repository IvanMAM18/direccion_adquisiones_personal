import { Link, Head } from '@inertiajs/react';
import React, { useState,useRef,useEffect } from 'react';
import TablaTitulosPublica from '@/Components/TablaTitulosPublica';
import Login from './Auth/Login';
import Dashboard from './Dashboard';
import InfoExtraTabla from '@/Components/InfoExtraTabla';
import __ from '@/Hooks/useTranslation'

export default function Welcome({ auth }) {

    return (
        <>
            <Head title="Tabla" />
            <div className="relative w-full h-screen bg-dots-darker bg-center bg-white dark:bg-white selection:bg-red-500 selection:text-white">
                <div className="">
                    
                    {auth.user ? (
                        <>
                            <Dashboard></Dashboard>
                        </>
                    ) : (
                        <>
                            <Login></Login>
                        </>
                    )}
                </div>
            </div>

            <style>{`
                    .bg-dots-darker {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0, 0, 0, 0.13)'/%3E%3C/svg%3E");
                    }
                    @media (prefers-color-scheme: dark) {
                        .dark\\:bg-dots-lighter {
                            background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0, 0, 0, 0.13)'/%3E%3C/svg%3E");
                        }
                    }
                `}</style>
        </>
    );
}
