<?php

use App\Http\Controllers\TablaDataArmonizacionController;
use App\Http\Controllers\DataArmonizacionController;
use App\Http\Controllers\ChirpController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TituloController;
use App\Http\Controllers\LogsController;
use App\Http\Controllers\TablaActualizacionPersonaFisicaController;
use App\Http\Controllers\TablaActualizacionPersonaMoralController;
use App\Http\Controllers\TablaAltaPersonaFisicaController;
use App\Http\Controllers\TablaAltaPersonaMoralController;
use App\Http\Controllers\TablaAltaSucursalPersonaFisicaController;
use App\Http\Controllers\TablaAltaSucursalPersonaMoralController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});

Route::resource('/actualizacion-persona-moral', TablaActualizacionPersonaMoralController::class)
    ->only(['index', 'store', 'update', 'destroy'])
    ->middleware('auth');

Route::resource('/actualizacion-persona-fisica', TablaActualizacionPersonaFisicaController::class)
    ->only(['index', 'store', 'update', 'destroy'])
    ->middleware('auth');

Route::resource('/alta-persona-moral', TablaAltaPersonaMoralController::class)
    ->only(['index', 'store', 'update', 'destroy'])
    ->middleware('auth');

Route::resource('/alta-persona-fisica', TablaAltaPersonaFisicaController::class)
    ->only(['index', 'store', 'update', 'destroy'])
    ->middleware('auth');

    Route::resource('/alta-sucursal-persona-moral', TablaAltaSucursalPersonaMoralController::class)
    ->only(['index', 'store', 'update', 'destroy'])
    ->middleware('auth');

Route::resource('/alta-sucursal-persona-fisica', TablaAltaSucursalPersonaFisicaController::class)
    ->only(['index', 'store', 'update', 'destroy'])
    ->middleware('auth');

Route::resource('/titulos', TituloController::class)
    ->only(['index', 'store', 'update', 'destroy'])
    ->middleware('auth');

Route::resource('/logs', LogsController::class)
    ->only(['index', 'store', 'update', 'destroy'])
    ->middleware('auth');

Route::resource('/titulosPublicos', TituloController::class)
    ->only(['index']);

Route::resource('/logsPublicos', LogsController::class)
    ->only(['index']);

 Route::get('/home', function () {
    return Inertia::render('Dashboard');
 })->middleware(['auth', 'verified'])->name('home');

Route::middleware('auth')->prefix('admin')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
