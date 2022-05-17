<?php

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

Route::get('/', [\App\Http\Controllers\HomeController::class, 'show'])->name('home');

Route::get('/properties-for-rent', [\App\Http\Controllers\PropertiesForRentController::class, 'show'])->name('properties-for-rent');

Route::get('/properties-for-sale', [\App\Http\Controllers\PropertiesForSaleController::class, 'show'])->name('properties-for-sale');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__ . '/auth.php';
