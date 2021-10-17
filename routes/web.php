<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('start');
});

Route::get('start', function () {
    return view('start');
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

Route::get('/kontakt', [App\Http\Controllers\EmailController::class, 'create']);
Route::post('/kontaktsent', [App\Http\Controllers\EmailController::class, 'sendEmail'])->name('send.email');

// Route::get('test', function () {
//     return view('test');
// });
