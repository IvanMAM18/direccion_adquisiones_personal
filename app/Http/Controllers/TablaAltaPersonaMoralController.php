<?php

namespace App\Http\Controllers;

use App\Models\TablaAltaPersonaMoral;
use Illuminate\Http\Request;

class TablaAltaPersonaMoralController extends Controller
{
    public function index()
    {
        $personasMorales = TablaAltaPersonaMoral::all();
        return response()->json($personasMorales);
    }

    public function store(Request $request)
    {
        $request->validate([
            'local_foraneo' => 'required|in:local,foraneo',
            'razon_social' => 'required|string|max:255',
            'nombre_comercial' => 'required|string|max:255',
            'domicilio' => 'required|string|max:255',
            'colonia' => 'required|string|max:255',
            'codigo_postal' => 'required|string|max:255',
            'poblacion' => 'required|string|max:255',
            'correo_electronico' => 'required|email',
            'registro_general_contr' => 'required|string|max:255',
            'actividad_economica_preponderante' => 'required|string|max:255',
            'telefono_empresa' => 'required|numeric|max:12',
            'celular' => 'required|numeric|max:12',
            'agente_venta_personal_enlace' => 'required|string|max:255',
            'nombre_representante_legal' => 'required|string|max:255',
            'telefono_representante_legal' => 'required|numeric|max:12',
            'rfc_representante_legal' => 'required|string|max:13',
            'plazo_legal' => 'required|string|max:13',
            'total_sucursales' => 'required|numeric',
            'fecha_registro' => 'required|date'
        ]);

        $personaMoral = TablaAltaPersonaMoral::create($request->all());
        return response()->json($personaMoral, 201);
    }

    public function show($id)
    {
        $personaMoral = TablaAltaPersonaMoral::findOrFail($id);
        return response()->json($personaMoral);
    }

    public function update(Request $request, $id)
    {
        $personaMoral = TablaAltaPersonaMoral::findOrFail($id);
        $personaMoral->update($request->all());
        return response()->json($personaMoral);
    }

    public function destroy($id)
    {
        $personaMoral = TablaAltaPersonaMoral::findOrFail($id);
        $personaMoral->delete();
        return response()->json(null, 204);
    }
}