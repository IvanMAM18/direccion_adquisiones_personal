<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TablaAltaPersonaMoralResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->resource->id,
            'local_foraneo' => $this->resource->local_foraneo,
            'razon_social' => $this->resource->razon_social,
            'nombre_comercial' => $this->resource->nombre_comercial,
            'domicilio' => $this->resource->domicilio,
            'colonia' => $this->resource->colonia,
            'codigo_postal' => $this->resource->codigo_postal,
            'poblacion' => $this->resource->poblacion,
            'correo_electronico' => $this->resource->correo_electronico,
            'registro_general_contr' => $this->resource->registro_general_contr,
            'actividad_economica_preponderante' => $this->resource->actividad_economica_preponderante,
            'telefono_empresa' => $this->resource->telefono_empresa,
            'celular' => $this->resource->celular,
            'agente_venta_personal_enlace' => $this->resource->agente_venta_personal_enlace,
            'nombre_representante_legal' => $this->resource->nombre_representante_legal,
            'telefono_representante_legal' => $this->resource->telefono_representante_legal,
            'rfc_representante_legal' => $this->resource->rfc_representante_legal,
            'plazo_legal' => $this->resource->plazo_legal,
            'total_sucursales' => $this->resource->total_sucursales,
            'fecha_registro' => $this->resource->fecha_registro,
            'createdAt' => $this->resource->created_at->diffForHumans(),
            'edited' => $this->resource->created_at != $this->resource->updated_at,
            'user' => UserResource::make($this->whenLoaded('user')),
        ];
    }
}
