import React, { useState } from 'react';
import axios from 'axios';

export default function BuscarNegocios() {
    const [query, setQuery] = useState('');
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        try {
            const response = await axios.post('https://177u01isy3.lapaz.gob.mx/api/negocios/buscar', {
                q: query,
            }, {
                headers: {
                    'Authorization': 'Bearer $2y$10$cY1S7FqotCNZ6l6t4z//UOxkKiWisAtnPtnRsRtOHpkTMNEeyFgkq',
                    'Content-Type': 'application/json',
                },
            });
            setData(response.data);
            setError(null);
        } catch (err) {
            setError('Error al buscar negocios');
            setData(null);
        }
    };

    return (
        <div className="relative p-4 bg-red-200">
            <h1 className="text-xl font-bold mb-4">Buscar Negocios</h1>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="border p-2 rounded w-full mb-4"
                placeholder="Ingresa el ID del negocio"
            />
            <button
                onClick={handleSearch}
                className="bg-blue-500 text-white p-2 rounded"
            >
                Buscar
            </button>

            {error && <p className="text-red-500 mt-4">{error}</p>}

            {data && (
                <div className="mt-4">
                    <h2 className="text-lg font-bold">Resultados:</h2>
                    <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(data, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}