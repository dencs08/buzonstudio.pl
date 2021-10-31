<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('start');
});

Route::get('start', function () {
    return view('start');
});


// Route::get('oferta', function () {
//     return view('oferta');
// });

Route::get('oferta', [App\Http\Controllers\PortfolioController::class, 'offerShow']);

Route::get('opinie', function () {
    return view('opinie');
});

Route::get('polityka', function () {
    return view('polityka_prywatnosci');
});

Route::get('/kontakt', [App\Http\Controllers\EmailController::class, 'create']);
Route::post('/kontaktsent', [App\Http\Controllers\EmailController::class, 'sendEmail'])->name('send.email');

Route::get('portfolio/{name}', [App\Http\Controllers\PortfolioController::class, 'show']);

// Route::get('test', function () {
//     return view('test');
// });
