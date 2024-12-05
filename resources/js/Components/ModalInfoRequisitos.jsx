import IconDownUp from './IconDownUp';

export default function ModalInfoRequisitos({modo, tipo}) {
    return (
            <div className="absolute shadow-lg py-10 px-16 z-20 w-full h-[37vw] overflow-y-auto bg-white border border-orange-300 rounded-2xl text-rose-950 font-bold text-justify">
                <div className='mx-2 flex text-xl items-center justify-center'>
                    REQUISITOS {modo.toUpperCase()} PARA PERSONAS {tipo.toUpperCase()}
                    <svg className="h-6 w-6 ml-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path  d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"/>
                    </svg>
                </div>
                {
                    modo === 'actualizacion' ? (
                        <div className='text-sm my-10'>
                            <p className="my-2">
                                1. ESCRITO LIBRE DE INTENCION PARA PERTENECER AL PADRON DE PROVEEDORES MENCION TANTO DEL TIPO DE SERVICIO Y/O EL BIEN EN FORMA GENERAL QUE SE DESEA OFERTAR A ESTA INSTITUCION, ASI COMO DE QUE CUMPLE CON LOS ART. 34 (CUENTA CON 1 AÑO O MAS CON SU REGISTRO ANTE EL SAT) Y ART. 61 (NO SER SERVIDOR(ES) PUBLICO) DE LA LEY DE ADQUISIONES ARRENDAMIENTO Y SERVICIOS DEL ESTADO DE BAJA CALIFORNIA SUR.
                            </p>
                            <p className="my-2">
                                2. CONSTANCIA DE SITUACION FISCAL ACTUALIZADA (CON DETALLE DE ACTIVIDAD)
                            </p>
                            <p className="my-2">
                                {
                                    tipo === 'moral' ? (
                                        '3. PODER NOTARIAL DEL REPRESENTANTE LEGAL E IDENTIDICACION OFICIAL DEL MISMO.'
                                    ): (
                                        '3. CREDENCIAL DE ELECTOR VIGENTE.'
                                    )
                                }
                            </p>
                            <p className="my-2">
                                4. COMPROBANTE DE DOMICILIO DE LA EMPRESA CFE, TELMEX, AGUA (EN CASO DE ARRENDAR EL ESTABLECIMIENTO, COPIA DEL CONTRATO DEL ARRENDAMIENTO VIGENTE Y COPIA DEL ULTIMO RECIBO DE RENTA, EN EL CASO DE SER PRESTADO, CONTRATO DE COMODATO O UN ESCRITO POR PARTE DEL PROPIETARIO E IDENTIFICACION OFICIAL DEL MISMO, DONDE AUTOIZA SE EJERZA LA ACTIVIDAD ECONOMICA EN DICHO LUGAR).
                            </p>
                            <p className="my-2">
                                {
                                    tipo === 'moral' ? (
                                        '5. CREDENCIAL DEL ELECTOR VIGENTE DEL REPRESENTANTE LEGAL Y/O ADMINISTRADOR UNICO.'
                                    ): (
                                        '5. DOCUMENTO MANIFESTACION SU CLABE INTERBANCARIA, CEUNTA BANCARIA, NOMBRE COMPLETO DEL CUENTA HABIENTE Y DEL BANCO DEBIDAMENTE VALIDADO.'
                                    )
                                }
                            </p>
                            <p className="my-2">
                                {
                                    tipo === 'moral' ? (
                                        '6. DOCUMENTO MANIFESTANDO SU CLABE INTERBANCARIA, CUENTA BANCARIA, NOMBRE COMPLETO DEL CUENTA HABIENTE Y DEL BANCO, DEBIENDO VALIDARSE POR EL REPRESENTANTE LEGAL.'
                                    ): (
                                        '6. LICENCIA DE FUNCIONAMIENTO MUNICIPAL EJERCICIO ACTUAL'
                                    )
                                }
                            </p>
                            <p className="my-2">
                                {
                                    tipo === 'moral' ? (
                                        '7. LICENCIA DE FUNCIONAMIENTO MUNICIPAL EJERCICIO ACTUAL.'
                                    ): null
                                }
                            </p>
                            <p className="my-2 text-base underline font-extrabold text-center">
                                PERSONAS {tipo.toUpperCase()} FORANEAS
                            </p>
                            <p className="my-2">
                                ENTREGA DE DOCUMENTOS MARCADOS DEL PUNTO 1 AL  
                                {tipo === 'moral' ? (' 6 '): (' 5 ')}
                                ASI COMO:
                            </p>
                            <p className="my-2 underline font-bold text-center">
                                ACUSE DE LA ULTIMA DECLARACION ANUAL Y/O ACUSE DEL ULTIMO PAGO PROVISIONAL DEL EJERCICIO ACTUAL
                            </p>
                        </div>
                    ) : (
                        <div className='text-sm font-medium my-auto'>
                            <p className="my-2 font-bold">
                                DOCUMENTOS EN COPIA QUE SE REQUIEREN PARA REGISTRARSE EN EL PADRON DE PROVEEDORES DEL MUNICIPIO DE LA PAZ B.C.S.
                            </p>
                            <p className="my-2 font-bold">
                                SIEMPRE Y CUANDO SE CUENTE CON 1 AÑO O MAS RESGISTROS ANTE EL SAT Y NO SEA SERVIDOR PUBLICO (ART. 34 Y 61 DE LA LEY DE ADQUISIONES, ARRENDAMIENTOS Y SERVICIOS DEL ESTADO DE BAJA CALIFORNIA SUR).
                            </p>
                            <div className="my-2 font-bold text-center">
                                PERSONAS {tipo.toUpperCase()} (LOCAL)
                            </div>
                            <p className="my-2">
                                1. ESCRITO LIBRE DE INTENCION PARA PERTENECER AL PADRON DE PROVEEDORES (HACIENDO MENCION TANTO DEL TIPO DE SERVICIO Y/O EL BIEN EN FORMA GENERAL QUE SE DESEA OFERTAR A ESTA INSTITUCION, ASI COMO DE QUE CUMPLE CON LOS ART. 34 Y ART. 61 DE LA LEY DE ADQUISIONES ARRENDAMIENTOS Y SERVICIOS DEÑ ESTADO DE BAJA CALIFORNIA SUR).
                            </p>
                            <p className="my-2">
                                2. CONSTANCIA DE SITUACION FISCAL ACTUALIZADA (CON DETALLE DE ACTIVIDAD)
                            </p>
                            <p className="my-2">
                            {tipo === 'moral' ? 
                                ('3. ACTA CONSTITUTIVA (REGISTRADA ANTE LA DIR. GRAL. DEL REGISTRO PUBLICO DE LA PROPIEDAD Y DEL COMERCIO).') : 
                                ('3. CREDENCIAL DE ELECTOR.')
                            }
                            </p>
                            <p className="my-2">
                                {tipo === 'moral' ? 
                                    ('4. COPIA DE PODER NOTARIAL (REGISTRADO ANTE LA DIR. GRAL. DEL REGISTRO PUBLICO DE LA PROPIEDAD Y DEL COMERCIO).') : 
                                    ('4. COMPROBANTE DE DOMICILIO DE LA EMPRESA CFE, TELMEX, AGUA (EN CASO DE ARRENDAR EL ESTABLECIMIENTO, COPIA DEL CONTRATO DEL ARRENDAMIENTO VIGENTE Y COPIA DEL ULTIMO RECIBO DE RENTA, EN EL CASO DE QUE EL DOMICILIO SEA PRESTADO, CONTRATO DE COMODATO O UN ESCRITO POR PARTE DEL PROPIETARIO E IDENTIFICACION OFICIAL DEL MISMO, DONDE AUTOIZA SE EJERZA LA ACTIVIDAD ECONOMICA EN DICHO LUGAR).')
                                }
                            </p>
                            <p className="my-2">
                                {tipo === 'moral' ? 
                                    ('5. CREDENCIAL DEL ELECTOR VIGENTE DEL REPRESENTANTE LEGAL Y/O ADMINISTRADOR UNICO.') : 
                                    ('5. LICENCIA DE FUNCIONAMIENTO DEL EJERCICIO ACTUAL')
                                }
                            </p>
                            <p className="my-2">
                                {tipo === 'moral' ? 
                                    ('6. COMPROBANTE DE DOMICILIO DE LA EMPRESA CFE, TELMEX, AGUA (EN CASO DE ARRENDAR EL ESTABLECIMIENTO, COPIA DEL CONTRATO DEL ARRENDAMIENTO VIGENTE Y COPIA DEL ULTIMO RECIBO DE RENTA, EN EL CASO DE SER PRESTADO, CONTRATO DE COMODATO O UN ESCRITO POR PARTE DEL PROPIETARIO E IDENTIFICACION OFICIAL DEL MISMO, DONDE AUTOIZA SE EJERZA LA ACTIVIDAD ECONOMICA EN DICHO LUGAR).') : 
                                    ('6. DOCUMENTACION MANIFESTANDO SU CLABE INTERBANCARIA, CUENTA BANCARIA, NOMBRE COMPLETO DEL CEUNTAHABIENTE Y NOMBRE COMPLETO DEL BANCO. (EN CUMPLIMIENTO CON EL ART. 67 DE LA LEY GENERAL DE CONTABILIDAD GUBERNAMENTAL.) DEBIDAMENTE VALIDADA.')
                                }
                            </p>
                            <p className="my-2">
                                {tipo === 'moral' ? 
                                    ('7. LICENCIA DE FUNCIONAMIENTO MUNICIPAL EJERCICIO ACTUAL.') : null
                                }
                            </p>
                            <p className="my-2">
                                {tipo === 'moral' ? 
                                    ('8. DOCUMENTACION MANIFESTANDO SU CLABE INTERBANCARIA, CUENTA BANCARIA, NOMBRE COMPLETO DEL CEUNTAHABIENTE Y NOMBRE COMPLETO DEL BANCO. (EN CUMPLIMIENTO CON EL ART. 67 DE LA LEY GENERAL DE CONTABILIDAD GUBERNAMENTRAL.) DEBIDAMENTE VALIDADA POR EL REPRESENTANTE LEGAL.') : null
                                }
                            </p>
                            <p className="my-2 font-bold text-center">
                                SUCURSALES LOCAL
                            </p>
                            <p className="my-2">
                                {tipo === 'moral' ? 
                                    ('1. ALTA SUCURSAL ANTE EL SAT Y/O CONTANCIA DE SITUACION FISCAL ACTUALIZADA.') : 
                                    ('1. ESCRITO LIBRE DE INTENCION PARA PERTENECER AL PADRON DE PROVEEDORES (HACIENDO MENCION TANTO DEL TIPO DE SERVICIO Y/O EL BIEN EN FORMA GENERAL QUE DESEA OFERTAR A ESTA INSTITUCION COMO DE QUE ESTA EN APEGO AL ART. 34 Y 61 DE LA LEY DE ADQUISIONES ARRENDAMIENTOS Y SERVICOS DEL ESTADO DE BAJA CALIFORNIA SUR).')
                                }
                            </p>
                            <p className="my-2">
                                {tipo === 'moral' ? 
                                    ('2. COPIA DE PODER NOTARIAL DEL REPRESENTANTE LEGAL (EN CASO DE SER DISTINTO AL DE LA MATRIZ).') : 
                                    ('2. ALTA DE SUCURSAL ANTE EL SAT.')
                                }
                            </p>
                            <p className="my-2">
                                {tipo === 'moral' ? 
                                    ('3. CREDENCIAL DE ELECTOR VIGENTE DEL REPRESENTANTE LEGAL Y/O ADMINISTRADOR UNICO (EN CASO DE PROCEDER).') : 
                                    ('3.  COMPROBANTE DE DOMICILIO DE LA EMPRESA CFE, TELMEX O AGUA (EN CASO DE ARRENDAR EL ESTABLECIMINETO, COPIA DEL CONTRATO DE ARRENDAMINETO VIGENTE Y COPIA DEL ULTIMO RECIBO DE RENTA, EN EL CASO DE QUE EL DOMICILIO SEA PRESTADO, CONTRATO DE COMODATO O UN ESCRITO POR PARTE DEL PROPIETARIO E IDENTIFICACION OFICIAL DEL MISMO, DONDE AUTORIZA SE EJERZA LA ACTIVIDAD ECONOMICA EN DICHO LUGAR).')
                                }
                            </p>
                            <p className="my-2">
                                {tipo === 'moral' ? 
                                    ('4. COMPROBANTE DE DOMICILIO DE LA EMPRESA CFE, TELMEX O AGUA (EN CASO DE ARRENDAR EL ESTABLECIMINETO, COPIA DEL CONTRATO DE ARRENDAMINETO VIGENTE Y COPIA DEL ULTIMO RECIBO DE RENTA, EN EL CASO DE QUE EL DOMICILIO SEA PRESTADO, CONTRATO DE COMODATO O UN ESCRITO POR PARTE DEL PROPIETARIO E IDENTIFICACION OFICIAL DEL MISMO, DONDE AUTORIZA SE EJERZA LA ACTIVIDAD ECONOMICA EN DICHO LUGAR).') : 
                                    ('4. LICENCIA DE FUNCIONAMIENTO EJERCICIO ACTUAL')
                                }
                            </p>
                            <p className="my-2">
                                {tipo === 'moral' ? 
                                    ('5. LICENCIA DE FUNCIONAMIENTO EJERCICIO ACTUAL') : 
                                    ('5. DOCUMENTO MANIFESTANDO SU CLABE INTERBANCARIA, CUENTA BANCARIA, NOMBRE COMPLETO DEL CUENTAHABIENTE Y NOMBRE COMPLETO DEL BANCO. (EN CUMPLIMIENTO CON EL ART. 67 DE LA LEY GENERAL DE CONTABILIDAD GUBERNAMENTAL). DEBIDAMENTE VALIDADA.')
                                }
                                
                            </p>
                            <p className="my-2">
                                {tipo === 'moral' ? 
                                    ('6. DOCUMENTO MANIFESTANDO SU CLABE INTERBANCARIA, CUENTA BANCARIA, NOMBRE COMPLETO DEL CUENTAHABIENTE Y NOMBRE COMPLETO DEL BANCO. (EN CUMPLIMIENTO CON EL ART. 67 DE LA LEY GENERAL DE CONTABILIDAD GUBERNAMENTAL). DEBIDAMENTE VALIDADA POR EL REPRESENTANTE LEGAL.') : null
                                }
                            </p>
                            <p className="my-2 font-bold text-center">
                                EN CASO DE QUE EL ESTABLECIMIENTO SE ENCUENTRE FUERA DEL ESTADO DE BAJA CALIFORNIA SUR
                            </p>
                            <p className="my-2 font-bold text-center">
                                PROVEEDOR FORANEO
                            </p>
                            <p className="my-2">
                                1. ESCRITO LIBRE DE INTENCION PARA PERTENECER AL PADRON DE PROVEEDORES (HACIENDO MENCION TANTO DEL TIPO DE SERVICIO Y/O EL BIEN EN FORMA GENERAL QUE DESEA OFERTAR A ESTA INSTITUCION COMO DE ESTA EN APEGO AL ART. 34 Y 61 DE LA LEY DE ADQUISIONES ARRENDAMIENTOS Y SERVICIOS DEL ESTADO DE BAJA CALIFORNIA SUR).
                            </p>
                            <p className="my-2">
                                2. CONSTANCIA DE SITUACION FISCAL ACTUALIZADA (CON EL DETALLE DE LA ACTIVIDAD).
                            </p>
                            <p className="my-2">
                                {tipo === 'moral' ? 
                                    ('3. ACTA CONSTITUTIVA (REGISTRADO ANTE LA DIR. GRAL. DEL REGISTRO PUBLICO DE LA PROPIEDAD Y DEL COMERCIO).') : 
                                    ('3. CREDENCIAL DE ELECTOR.')
                                }
                            </p>
                            <p className="my-2">
                                {tipo === 'moral' ? 
                                    ('4. COPIA DEL PODER NOTARIAL (REGISTRADO ANTE LA DIR. GRAL. DEL REGISTRO PUBLICO DE LA PROPIEDAD Y DEL COMERCIO).') : 
                                    ('4. COMPROBANTE DE DOMICILIO DE LA EMPRESA CFE, TELMEX O AGUA (EN CASO DE ARRENDAR EL ESTABLECIMIENTO. COPIA DEL CONTRATO, DE ARRENDIMIENTO VIGENTE Y COPÍA DEL ULTIMO RECIBO DE RENTA, EN EL CASO DE QUE EL DOMICILIO SEA PRESTADO, CONTRATO DE COMODATO O UN ESCRITO POR PARTE DEL PROPIETARIO E IDENTIFICACION OFICIAL DEL MISMO,DONDE AUTORIZA SE EJERZA LA ATIVIDAD ECONOMICA EN DICHO LUGAR).')
                                }
                            </p>
                            <p className="my-2">
                                {tipo === 'moral' ? 
                                    ('5. CREDENCIAL DE ELECTOR VIGENTE DEL REPRESENTANTE LEGAL Y/O ADMINISTRADOR UNICO.') : 
                                    ('5. ACUSE DE LA ÚLTIMA DECLARACIÓN ANUAL ANTE EL SAT Y/O EL ÚLTIMO PAGO PROVISIONAL DEL EJERCICIO ACTUAL.')
                                }
                            </p>
                            <p className="my-2">
                                {tipo === 'moral' ? 
                                    ('6. COMPROBANTE DE DOMICILIO DE LA EMPRESA CFE, TELMEX O AGUA (EN CASO DE ARRENDAR EL ESTABLECIMIENTO. COPIA DEL CONTRATO, DE ARRENDIMIENTO VIGENTE Y COPÍA DEL ULTIMO RECIBO DE RENTA, EN EL CASO DE QUE EL DOMICILIO SEA PRESTADO, CONTRATO DE COMODATO O UN ESCRITO POR PARTE DEL PROPIETARIO E IDENTIFICACION OFICIAL DEL MISMO,DONDE AUTORIZA SE EJERZA LA ATIVIDAD ECONOMICA EN DICHO LUGAR).') : 
                                    ('6. DOCUMENTO MANIFIESTANDO SU CLABE INTERBANCARIA, CUENTA BANCARIA, NOMBRE COMPLETO DEL CUENTAHABIENTE Y NOMBRE COMPLETO DEL BANCO. (EN CUMPLIMIENTO CON EL ART. 67 DE LA LEY GENERAL DE CONTABILIDAD GUBERNAMENTAL) DEBIDAMENTE VALIDADA.')
                                }
                            </p>
                            <p className="my-2">
                                {tipo === 'moral' ? 
                                    ('7. ACUSE DE LA ÚLTIMA DECLARACIÓN ANUAL ANTE EL SAT Y/O EL ÚLTIMO PAGO PROVISIONAL DEL EJERCICIO ACTUAL.') : null
                                }
                            </p>
                            <p className="my-2">
                                {tipo === 'moral' ? 
                                    ('8. DOCUMENTO MANIFIESTANDO SU CLABE INTERBANCARIA, CUENTA BANCARIA, NOMBRE COMPLETO DEL CUENTAHABIENTE Y NOMBRE COMPLETO DEL BANCO. (EN CUMPLIMIENTO CON EL ART. 67 DE LA LEY GENERAL DE CONTABILIDAD GUBERNAMENTAL DEBIDA,MENTE VALIDADA POR EL REPRESENTANTE LEGAL).') : null
                                }
                            </p>
                        </div>
                    )
                }
            </div>
        
    );
}
