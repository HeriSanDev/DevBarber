<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\BarberController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\AgendController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
   // return $request->user();
//});

Route::apiResource('barbers', BarberController::class)->middleware('apiJWT');
Route::get('/barber/{name}', [BarberController::class, 'showByName'])->middleware('apiJWT');
Route::get('/user/favorited/{id}', [UserController::class, 'favorited'])->middleware('apiJWT');
Route::post('auth/login', [AuthController::class,'login']);
Route::post('auth/logout', [AuthController::class,'logout'])->middleware('apiJWT');
Route::post('auth/refresh', [AuthController::class,'refresh'])->middleware('apiJWT');
Route::post('auth/me', [AuthController::class,'me']);
Route::post('/user/agend', [AgendController::class, 'store'])->middleware('apiJWT');
