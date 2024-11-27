import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function BuscarNegocios() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const id = '26'; // ID fijo para buscar

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('https://177u01isy3.lapaz.gob.mx/api/negocios/buscar', {
                    q: id,
                }, {
                    headers: {
                        'Authorization': 'Bearer $2y$10$cY1S7FqotCNZ6l6t4z//UOxkKiWisAtnPtnRsRtOHpkTMNEeyFgkq',
                        'Content-Type': 'application/json',
                    },
                });
                setData(response.data);
                setError(null);
            } catch (err) {
                setError('Error al buscar el negocio');
                setData(null);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="relative p-4 bg-red-200">
            <h1 className="text-xl font-bold mb-4">Buscar Negocio por ID: {id}</h1>

            {error && <p className="text-red-500 mt-4">{error}</p>}

            {data && data.negocio ? (
                <div className="mt-4">
                    <h2 className="text-lg font-bold">Resultados:</h2>
                    <p>Negocio encontrado: {data.negocio.nombre}</p>
                    <p>ID del negocio: {data.negocio.id}</p>
                    {/* Aquí puedes agregar más detalles del negocio */}
                </div>
            ) : (
                <p>No se encontraron resultados para el ID {id}.</p>
            )}
            {data && (
                <div className="mt-4">
                    <h2 className="text-lg font-bold">Resultados:</h2>
                    <p>Cantidad de negocios encontrados: {data.negocio.length}</p>
                </div>
            ) }
        </div>
    );
}