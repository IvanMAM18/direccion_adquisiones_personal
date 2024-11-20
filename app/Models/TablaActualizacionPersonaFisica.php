<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TablaActualizacionPersonaFisica extends Model
{
    use HasFactory;

    protected $table = 'tabla_actualizacion_personal_fisica';

    protected $fillable = [
        'local_foraneo',
        'nombre_propetario',
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
        'plazo_legal',
        'fecha_registro'
    ];
}