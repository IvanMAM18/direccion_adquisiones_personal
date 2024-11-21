import React from 'react';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Esto añade una transición suave
        });
    };

    return (
        <footer className="bg-rose-950 text-white py-4 mt-auto">
            <div className="container mx-auto text-center">
                <img 
                    src='/../images/logoLapaz_blanco.png' 
                    className="w-40 drop-shadow-3xl mx-auto cursor-pointer" 
                    alt="Logo" 
                    onClick={scrollToTop} // Añadido el manejador de clic
                />
                <p className="text-xs mt-2">
                    BOULEVARD LUIS DONALDO COLOSIO E/AV. DE LOS DEPORTES Y CARABINEROS. 
                    TEL. (612) 123-79-00 EXT. 2530 Y 2639. &copy; {new Date().getFullYear()} Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}