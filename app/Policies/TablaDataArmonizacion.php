<?php

namespace App\Policies;

use App\Models\TablaDataArmonizacion;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class TablaDataArmonizacionPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): void
    {
        //
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, TablaDataArmonizacion $tablaDataArmonizacion): void
    {
        //
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): void
    {
        //
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, TablaDataArmonizacion $tablaDataArmonizacion): bool
    {
        return $user->is($tablaDataArmonizacion->user);
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, TablaDataArmonizacion $tablaDataArmonizacion): bool
    {
        return $user->is($tablaDataArmonizacion->user);
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, TablaDataArmonizacion $tablaDataArmonizacion): void
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, TablaDataArmonizacion $tablaDataArmonizacion): void
    {
        //
    }
}