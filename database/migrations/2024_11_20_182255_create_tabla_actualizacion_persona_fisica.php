<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTablaActualizacionPersonaFisica extends Migration
{
    public function up()
    {
        Schema::create('tabla_actualizacion_persona_fisica', function (Blueprint $table) {
            $table->id(); // ID
            $table->enum('local_foraneo', ['local', 'foraneo']); // Local o foráneo
            $table->string('nombre_propietario'); // Nombre del propietario
            $table->string('denominacion_comercial'); // Denominacion comercial
            $table->string('domicilio'); // Domicilio
            $table->string('colonia'); // Colonia
            $table->string('codigo_postal'); // Código postal
            $table->string('poblacion'); // Población
            $table->string('correo_electronico'); // Correo electrónico
            $table->string('registro_general_contr'); // Registro general de contribuyentes
            $table->string('actividad_economica_preponderante'); // Actividad económica preponderante
            $table->string('telefono_empresa'); // Teléfono de la empresa
            $table->string('celular'); // Celular
            $table->string('agente_venta_personal_enlace'); // Agente de venta o personal enlace
            $table->integer('plazo_legal'); // Plazo legal
            $table->string('fecha_registro'); // Fecha del formato
            $table->timestamps(); // Timestamps
        });
    }

    public function down()
    {
        Schema::dropIfExists('tabla_actualizacion_persona_fisica');
    }
}
