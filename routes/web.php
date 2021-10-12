<?php

use Illuminate\Support\Facades\Route;

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
    return view('start');
});

Route::get('start', function () {
    return view('start');
});

Route::get('kontakt', function () {
    return view('kontakt');
});

Route::get('oferta', function () {
    return view('oferta');
});

Route::get('opinie', function () {
    return view('opinie');
});

Route::get('polityka_prywatnosci', function () {
    return view('polityka_prywatnosci');
});

Route::get('test', function () {
    return view('test');
});

Route::get('/email', [App\Http\Controllers\EmailController::class, 'create']);
Route::post('/email', [App\Http\Controllers\EmailController::class, 'sendEmail'])->name('send.email');