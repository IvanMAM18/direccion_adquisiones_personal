import React, { useState } from 'react';
import * as XLSX from 'xlsx';

export default function ButtonExportExcel ({ data, tipo }) {
    const exportarDatos = () => {
        const wb = XLSX.utils.book_new();
        const wsData = [
            ["Información", "Detalles"],
            [tipo === 'moral' ? 'RAZON SOCIAL' : 'NOMBRE DEL PROPIETARIO', tipo === 'moral' ? data.negocio.persona_moral.razon_social.toUpperCase() : data.negocio.persona_fisica.nombre.toUpperCase()],
            ['NOMBRE COMERCIO', data.negocio.nombre.toUpperCase()],
            ['DOMICILIO', `${data.negocio.direccion.calle_principal.toUpperCase()} E/ ${data.negocio.direccion.calles.toUpperCase()}`],
            ['COLONIA', data.negocio.direccion.colonia.toUpperCase()],
            ['CÓDIGO POSTAL', data.negocio.direccion.codigo_postal.toUpperCase()],
            ['POBLACIÓN', '[SIN INFORMACIÓN]'],
            ['CORREO ELECTRÓNICO', data.negocio.persona_fisica.email],
            ['REGISTRO GENERAL DE CONTR.', tipo === 'moral' ? data.negocio.persona_moral.rfc : data.negocio.persona_fisica.rfc],
            ['ACTIVIDAD ECONÓMICA Y/O PREPONDERANTE', '[SIN INFORMACIÓN]'],
            ['TELÉFONO EMPRESA', '[SIN INFORMACIÓN]'],
            ['NUM. CELULAR', data.negocio.telefono.toUpperCase()],
            ['AGENTE DE VENTA Y/O PERSONA DE ENLACE', '[SIN INFORMACIÓN]'],
            ['NOMBRE COMPLETO DEL REPRESENTANTE LEGAL', '[SIN INFORMACIÓN]'],
            ['TELÉFONO DEL REPRESENTANTE LEGAL', '[SIN INFORMACIÓN]'],
            ['RFC DEL REPRESENTANTE LEGAL', '[SIN INFORMACIÓN]'],
            ['PLAZO DE CRÉDITO', '[SIN INFORMACIÓN]'],
        ];

        const ws = XLSX.utils.aoa_to_sheet(wsData);
        XLSX.utils.book_append_sheet(wb, ws, 'Datos');
        XLSX.writeFile(wb, 'DATOS_NEGOCIO_'+data.negocio.nombre.toUpperCase()+'.xlsx');
    };

    return (
        <div className='justify-items-end'>
            <button 
                onClick={exportarDatos} 
                className='flex items-center bg-orange-300 text-zinc-800 py-2 px-4 rounded hover:bg-orange-400 hover:font-bold hover:text-pink-950'
            >
                <svg 
                    className="h-4 w-4" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    strokeWidth="2" 
                    stroke="currentColor" 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z"/>  
                    <path d="M14 3v4a1 1 0 0 0 1 1h4" />  
                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />  
                    <line x1="12" y1="11" x2="12" y2="17" />  
                    <polyline points="9 14 12 17 15 14" />
                </svg>
                EXPORTAR EXCEL
            </button>
        </div>
    );
};
