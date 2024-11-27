export default function IconLocalForaneo({ selectedTipoLF , tamanio}) {
    return (
        
            selectedTipoLF === 'LOCAL' ? 
            (
                <svg className={`h-${tamanio} w-${tamanio}`} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>  
            )
            :
            (
                <svg className={`h-${tamanio} w-${tamanio}`} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />  <line x1="2" y1="12" x2="22" y2="12" />  
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg> 
            )
        
    );
}
