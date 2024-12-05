export default function ModalInfoFormato({modo, tipo, isHovered , data}) {
    const currentDate = new Date();
    // Formato "12 de diciembre del 2024"
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate2 = currentDate.toLocaleDateString('es-ES', options).replace('de', 'de');

    return (
        <>
            <div className='text-lg text-end'>
                LA PAZ, B.C.S A {formattedDate2.toUpperCase()}
            </div>
            <div className='mb-1'>
                <p className={`text-xs ${isHovered ? 'text-zinc-300' : 'text-zinc-800'}`}>
                    { tipo == 'moral' ? ('RAZON SOCIAL') : ('NOMBRE DEL PROPIETARIO') } :
                </p>
                <p className='text-xl font-bold'>
                    { 
                        tipo == 'moral' ? (
                            data.negocio.persona_moral && data.negocio.persona_moral.razon_social 
                            ? data.negocio.persona_moral.razon_social.toUpperCase() 
                            : '[SIN INFORMACIÓN]'
                        ) 
                        : (
                            data.negocio.persona_fisica && data.negocio.persona_fisica.nombre 
                            ? data.negocio.persona_fisica.nombre.toUpperCase() 
                            : '[SIN INFORMACIÓN]'
                        ) 
                    }
                </p>
            </div>
            <div className='my-1'>
                <p className={`text-xs ${isHovered ? 'text-zinc-300' : 'text-zinc-800'}`}>
                    { tipo == 'moral' ? ('NOMBRE COMERCIO') : ('DENOMINACION COMERCIAL') } :
                </p>
                <p className='text-xl font-bold'> {data.negocio.nombre.toUpperCase()} </p>
            </div>
            <div className='my-1'>
                <p className={`text-xs ${isHovered ? 'text-zinc-300' : 'text-zinc-800'}`}>DOMICILIO: </p>
                <p className='text-xl font-bold'>{data.negocio.direccion.calle_principal.toUpperCase()} E/ {data.negocio.direccion.calles.toUpperCase()}</p>
            </div>
            <div className='flex my-1'>
                <div className='w-1/2'>
                    <p className={`text-xs ${isHovered ? 'text-zinc-300' : 'text-zinc-800'}`}>COLONIA:</p>
                    <p className='text-xl font-bold'>{data.negocio.direccion.colonia.toUpperCase()}</p>
                </div>
                <div className='w-1/4'>
                    <p className={`text-xs ${isHovered ? 'text-zinc-300' : 'text-zinc-800'}`}>CODIGO POSTAL: </p>
                    <p className='text-xl font-bold'>{data.negocio.direccion.codigo_postal.toUpperCase()}</p>
                </div>
                <div className='w-1/4'>
                    <p className={`text-xs ${isHovered ? 'text-zinc-300' : 'text-zinc-800'}`}>POBLACION: </p>
                    <p className='text-xl font-bold'>[SIN INFORMACIÓN]</p>
                </div>
            </div>
            <div className='flex my-1'>
                <div className='w-1/2'>
                    <p className={`text-xs ${isHovered ? 'text-zinc-300' : 'text-zinc-800'}`}>CORREO ELECTRONICO:</p>
                    <p className='text-xl font-bold'>{data.negocio.persona_fisica.email}</p>
                </div>
                <div className='w-1/2'>
                    <p className={`text-xs ${isHovered ? 'text-zinc-300' : 'text-zinc-800'}`}>REGISTRO GENERAL DE CONTR.:</p>
                    <p className='text-xl font-bold'>
                        { 
                            tipo == 'moral' ? (
                                data.negocio.persona_moral && data.negocio.persona_moral.rfc
                                ? data.negocio.persona_moral.rfc 
                                : '[SIN INFORMACIÓN]'
                            ) 
                            : (
                                data.negocio.persona_fisica && data.negocio.persona_fisica.rfc
                                ? data.negocio.persona_fisica.rfc 
                                : '[SIN INFORMACIÓN]'
                            ) 
                        }
                    </p>
                </div>
            </div>
            <div className='my-1'>
                <p className={`text-xs ${isHovered ? 'text-zinc-300' : 'text-zinc-800'}`}>ACTIVIDAD ECONOMICA Y/O PREPONDERANTE:</p>
                <p className='text-xl font-bold'>[SIN INFORMACIÓN]</p>
            </div>
            <div className='flex my-1'>
                <div className='w-1/2'>
                    <p className={`text-xs ${isHovered ? 'text-zinc-300' : 'text-zinc-800'}`}>TELEFONO EMPRESA:</p>
                    <p className='text-xl font-bold'>[SIN INFORMACIÓN]</p>
                </div>
                <div className='w-1/4'>
                    <p className={`text-xs ${isHovered ? 'text-zinc-300' : 'text-zinc-800'}`}>NUM. CELULAR:</p>
                    <p className='text-xl font-bold'>{data.negocio.telefono.toUpperCase()}</p>
                </div>
                <div className='w-1/4'>
                    <p className={`text-xs ${isHovered ? 'text-zinc-300' : 'text-zinc-800'}`}>AGENTE DE VENTA Y/O PERSONA DE ENLACE:</p>
                    <p className='text-xl font-bold'>[SIN INFORMACIÓN]</p>
                </div>
            </div>
            <div className='flex my-1'>
                <div className='w-1/2'>
                    <p className={`text-xs ${isHovered ? 'text-zinc-300' : 'text-zinc-800'}`}>NOMBRE COMPLETO DEL REPRESENTANTE LEGAL:</p>
                    <p className='text-xl font-bold'>[SIN INFORMACIÓN]</p>
                </div>
                <div className='w-1/2'>
                    <p className={`text-xs ${isHovered ? 'text-zinc-300' : 'text-zinc-800'}`}>TELEFONO DEL REPRESENTANTE LEGAL:</p>
                    <p className='text-xl font-bold'>[SIN INFORMACIÓN]</p>
                </div>
            </div>
            <div className='flex my-1'>
                <div className='w-1/2'>
                    <p className={`text-xs ${isHovered ? 'text-zinc-300' : 'text-zinc-800'}`}>RFC DEL REPRESENTANTE LEGAL:</p>
                    <p className='text-xl font-bold'>[SIN INFORMACIÓN]</p>
                </div>
                <div className='w-1/2'>
                    <p className={`text-xs ${isHovered ? 'text-zinc-300' : 'text-zinc-800'}`}>PLAZO DE CREDITO:</p>
                    <p className='text-xl font-bold'>[SIN INFORMACIÓN]</p>
                </div>
            </div>            
        
        </>        
    );
}
