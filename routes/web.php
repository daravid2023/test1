<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\PropertiesController\PropertiesForRentController;
use App\Http\Controllers\PropertiesController\PropertiesForSaleController;
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

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/properties-for-sale', [PropertiesForSaleController::class, 'index'])->name('properties-for-sale');
Route::get('/properties-for-rent', [PropertiesForRentController::class, 'index'])->name('properties-for-rent');

Route::prefix('dashboard')->middleware(['auth', 'verified'])->group(
    function () {
        Route::get('/', function () {
            return Inertia::render('DashboardWelcome');
        })->name('dashboard');

        Route::get('/properties-for-rent', [PropertiesForRentController::class, 'show'])->name('properties-for-rent-show');
        Route::post('/properties-for-rent', [PropertiesForRentController::class, 'store'])->name('properties-for-rent-store');
    }
);

require __DIR__ . '/auth.php';
