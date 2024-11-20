<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTablaAltaPersonaMoral extends Migration
{
    public function up()
    {
        Schema::create('tabla_alta_persona_moral', function (Blueprint $table) {
            $table->id(); // ID
            $table->string('local_foraneo'); // Local o foráneo
            $table->string('razon_social'); // Razón social
            $table->string('nombre_comercial'); // Nombre comercial
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
            $table->string('nombre_representante_legal'); // Nombre del representante legal
            $table->string('telefono_representante_legal'); // Teléfono del representante legal
            $table->string('rfc_representante_legal'); // RFC del representante legal
            $table->string('plazo_legal'); // Plazo legal
            $table->integer('total_sucursales'); // Total de sucursales
            $table->date('fecha_registro'); // Fecha del formato
            $table->timestamps(); // Timestamps
        });
    }

    public function down()
    {
        Schema::dropIfExists('tabla_alta_persona_moral');
    }
}