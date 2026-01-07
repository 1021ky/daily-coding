<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum'); // 認証あり

Route::get('/helloworld', function () {
    return response('helloworld', 200)->header('Content-Type', 'text/plain');
}); // middlewareなしなので、認証なしでアクセス可能