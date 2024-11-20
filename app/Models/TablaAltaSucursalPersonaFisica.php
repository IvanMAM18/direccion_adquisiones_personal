<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TablaAltaSucursalPersonaFisica extends Model
{
    use HasFactory;

    protected $table = 'tabla_alta_sucursal_persona_fisica';

    protected $fillable = [
        'id_alta_persona_fisica',
        'local_foraneo',
        'denominacion_comercial',
        'domicilio',
        'colonia',
        'codigo_postal',
        'poblacion',
        'correo_electronico',
        'registro_general_contr',
        'actividad_economica_preponderante',
        'telefono_empresa',
        'celular',
        'agente_venta_personal_enlace',
        'fecha_registro'
    ];
}