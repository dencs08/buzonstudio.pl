<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [App\Http\Controllers\AppController::class, 'start']);
Route::get('start', [App\Http\Controllers\AppController::class, 'start']);
Route::get('oferta', [App\Http\Controllers\AppController::class, 'offer']);
Route::get('polityka', [App\Http\Controllers\AppController::class, 'privacy']);
Route::get('kontakt', [App\Http\Controllers\EmailController::class, 'view']);
Route::post('/kontaktsent', [App\Http\Controllers\EmailController::class, 'sendEmail'])->name('send.email');
Route::get('portfolio', [App\Http\Controllers\AppController::class, 'portfolio']);
Route::get('portfolio/{name}', [App\Http\Controllers\AppController::class, 'project']);