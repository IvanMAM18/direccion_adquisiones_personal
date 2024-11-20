<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TablaAltaSucursalPersonaMoral extends Model
{
    use HasFactory;

    protected $table = 'tabla_alta_sucursal_persona_moral';

    protected $fillable = [
        'id_alta_persona_moral',
        'local_foraneo',
        'razon_social_nombre_comercial',
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