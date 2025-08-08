<?php

use App\Models\Lead;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function (Request $request) {
    return Inertia::render('Welcome', [
        'status' => $request->session()->get('status'),
    ]);
})->name('home');


Route::post('/leads', function (Request $request) {
    $request->validate([
        'email' => ['required', 'email:filter', 'max:100'],
        'location' => ['nullable', 'string']
    ]);

    Lead::create([
        'email' => $request->email,
        'location' => $request->location
    ]);

    $request->session()->put('status', 'Thank you. We will let you know when we go live.');

    return Redirect::back();
})->name('leads');
