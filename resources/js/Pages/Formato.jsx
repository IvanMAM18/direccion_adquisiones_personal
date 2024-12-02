import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InfoFormato from '@/Components/InfoFormato';
import IconDownUp from '@/Components/IconDownUp';
import Footer from '@/Layouts/Footer';
import { Head } from '@inertiajs/react';

export default function Formato({ auth , modo ,tipo}) {
    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
                header=
                {
                    <IconDownUp 
                        clase={'w-full text-white'} 
                        tamanio={4} 
                        titulosFormatos=
                            {
                                `FORMATO DE ${modo.toUpperCase()} PARA PERSONAS ${tipo === 'moral' ?('MORALES'):('FISICAS')}`
                            }
                    /> 
                }
            >
                <Head title="Inicio"/>

                <div className="relative w-full min-h-screen pt-4 bg-dots-darker bg-center  selection:bg-red-500 selection:text-white">
                    <div className="w-11/12 mx-auto">
                        <InfoFormato modo={modo} tipo={tipo}/> 
                    </div>
                </div>
                <Footer/>
            </AuthenticatedLayout>
            <style>{`
                .bg-dots-darker {
                    background-color: rgba(240, 234, 225, 1);
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
