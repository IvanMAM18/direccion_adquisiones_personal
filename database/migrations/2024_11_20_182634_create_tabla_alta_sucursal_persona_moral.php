<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTablaAltaSucursalPersonaMoral extends Migration
{
    public function up()
    {
        Schema::create('tabla_alta_sucursal_persona_moral', function (Blueprint $table) {
            $table->id(); // ID
            $table->foreignId('id_alta_persona_moral')->constrained('tabla_alta_persona_moral'); // Relación con la tabla alta_persona_moral
            $table->string('local_foraneo'); // Local o foráneo
            $table->string('razon_social_nombre_comercial'); // RAZON SOCIAL / NOMBRE COMERCIAL
            $table->string('domicilio'); // Domicilio
            $table->string('colonia'); // Colonia
            $table->string('codigo_postal'); // Código postal
            $table->string('poblacion'); // Población
            $table->string('correo_electronico'); // Correo electrónico
            $table->string('telefono_empresa'); // Teléfono de la empresa
            $table->string('celular'); // Celular
            $table->string('agente_venta_personal_enlace'); // Agente de venta o personal enlace
            $table->date('fecha_registro'); // Fecha del formato
            $table->timestamps(); // Timestamps
        });
    }

    public function down()
    {
        Schema::dropIfExists('tabla_alta_sucursal_persona_moral');
    }
}