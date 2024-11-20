<?php

namespace App\Http\Controllers;

use App\Models\TablaAltaSucursalPersonaMoral;
use Illuminate\Http\Request;

class TablaAltaSucursalPersonaMoralController extends Controller
{
    public function index()
    {
        $sucursales = TablaAltaSucursalPersonaMoral::all();
        return response()->json($sucursales);
    }

    public function store(Request $request)
    {
        $request->validate([
            'id_alta_persona_moral' => 'required|exists:tabla_alta_persona_moral,id',
            'razon_social_nombre_comercial' => 'required|string|max:255',
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
            'fecha_registro' => 'required|date'
        ]);

        $sucursal = TablaAltaSucursalPersonaMoral::create($request->all());
        return response()->json($sucursal, 201);
    }

    public function show($id)
    {
        $sucursal = TablaAltaSucursalPersonaMoral::findOrFail($id);
        return response()->json($sucursal);
    }

    public function update(Request $request, $id)
    {
        $sucursal = TablaAltaSucursalPersonaMoral::findOrFail($id);
        $sucursal->update($request->all());
        return response()->json($sucursal);
    }

    public function destroy($id)
    {
        $sucursal = TablaAltaSucursalPersonaMoral::findOrFail($id);
        $sucursal->delete();
        return response()->json(null, 204);
    }
}