export default function IconDownUp({ DownUp , tamanio}) {
    return (
        
            DownUp ? 
            (
                <svg className={`h-${tamanio} w-${tamanio}`} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"/>  
                    <polyline points="6 15 12 9 18 15" />
                </svg>  
            )
            :
            (
                <svg className={`h-${tamanio} w-${tamanio}`} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            )
        
    );
}
