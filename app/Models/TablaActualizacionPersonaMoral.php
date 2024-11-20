<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TablaActualizacionPersonaMoral extends Model
{
    use HasFactory;

    protected $table = 'tabla_actualizacion_personal_moral';

    protected $fillable = [
        'local_foraneo',
        'razon_social',
        'nombre_comercial',
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
        'nombre_representante_legal',
        'telefono_representante_legal',
        'rfc_representante_legal',
        'plazo_legal',
        'fecha_registro'
    ];
}