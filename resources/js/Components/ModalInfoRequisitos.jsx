export default function ModalInfoRequisitos({ selectedTipoLF , tamanio}) {
    return (
            <div className="absolute shadow-lg py-8 px-16 z-10 w-full bg-white border border-orange-300 rounded-2xl text-rose-950 font-bold text-justify">
                <div className='mx-2 flex text-xl items-center justify-center'>
                    REQUISITOS
                    <svg className="h-6 w-6 ml-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"/>
                    </svg>
                </div>
                <p className="my-2">
                    1. ESCRITO LIBRE DE INTENCION PARA PERTENECER AL PADRON DE PROVEEDORES MENCION TANTO DEL TIPO DE SERVICIO Y/O EL BIEN EN FORMA GENERAL QUE SE DESEA OFERTAR A ESTA INSTITUCION, ASI COMO DE QUE CUMPLE CON LOS ART. 34 (CUENTA CON 1 AÑO O MAS CON SU REGISTRO ANTE EL SAT) Y ART. 61 (NO SER SERVIDOR(ES) PUBLICO) DE LA LEY DE ADQUISIONES ARRENDAMIENTO Y SERVICIOS DEL ESTADO DE BAJA CALIFORNIA SUR.
                </p>
                <p className="my-2">
                    2. CONSTANCIA DE SITUACION FISCAL ACTUALIZADA (CON DETALLE DE ACTIVIDAD)
                </p>
                <p className="my-2">
                    3. PODER NOTARIAL DEL REPRESENTANTE LEGAL E IDENTIDICACION OFICIAL DEL MISMO.
                </p>
                <p className="my-2">
                    4. COMPROBANTE DE DOMICILIO DE LA EMPRESA CFE, TELMEX, AGUA (EN CASO DE ARRENDAR EL ESTABLECIMIENTO, COPIA DEL CONTRATO DEL ARRENDAMIENTO VIGENTE Y COPIA DEL ULTIMO RECIBO DE RENTA, EN EL CASO DE SER PRESTADO, CONTRATO DE COMODATO O UN ESCRITO POR PARTE DEL PROPIETARIO E IDENTIFICACION OFICIAL DEL MISMO, DONDE AUTOIZA SE EJERZA LA ACTIVIDAD ECONOMICA EN DICHO LUGAR).
                </p>
                <p className="my-2">
                    5. CREDENCIAL DEL ELECTOR VIGENTE DEL REPRESENTANTE LEGAL Y/O ADMINISTRADOR UNICO.
                </p>
                <p className="my-2">
                    6. DOCUMENTO MANIFESTANDO SU CLABE INTERBANCARIA, CUENTA BANCARIA, NOMBRE COMPLETO DEL CUENTA HABIENTE Y DEL BANCO, DEBIENDO VALIDARSE POR EL REPRESENTANTE LEGAL.
                </p>
                <p className="my-2">
                    7. LICENCIA DE FUNCIONAMIENTO MUNICIPAL EJERCICIO ACTUAL.
                </p>          
            </div>
        
    );
}
