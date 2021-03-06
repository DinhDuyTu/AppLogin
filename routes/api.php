<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::post('register', 'AuthController@register');
Route::post('login', 'AuthController@login');
Route::post('logout', 'AuthController@logout');

Route::get('get_list_user', 'UserController@index');
Route::group(['middleware' => 'jwt.auth'], function(){
  Route::get('user', 'AuthController@getAuthenticatedUser');
  Route::get('email/resend', 'Api\VerificationController@resend')->name('verification.resend');
});

Route::get('email/verify/{id}/{hash}', 'Api\VerificationController@verify')->name('verification.verify');
