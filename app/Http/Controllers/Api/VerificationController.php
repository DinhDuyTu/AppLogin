<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\VerifiesEmails;
use Illuminate\Http\Request;
use Illuminate\Auth\Events\Verified;

class VerificationController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Email Verification Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling email verification for any
    | user that recently registered with the application. Emails may also
    | be re-sent if the user didn't receive the original email message.
    |
    */

    use VerifiesEmails;

    /**
     * Where to redirect users after verification.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api',['except' => ['verify', 'resend']]);
        $this->middleware('signed')->only('verify');
        $this->middleware('throttle:6,1')->only('verify', 'resend');
    }

    public function verify(Request $request)
    {
        auth()->loginUsingId($request->route('id'));

        if ($request->route('id') != $request->user()->getKey()) {
            throw new AuthorizationException;
        }
        if ($request->user()->hasVerifiedEmail()) {
            return response(['message' => 'Already verified']);
        }
        if ($request->user()->markEmailAsVerified()) {
            event(new Verified($request->user()));
        }

        return response(['message' => 'Successfully verified']);
    }

    public function resend(Request $request)
    {
        $token = $request->cookies->get(config('session.cookie'));
        if ($request->user()->hasVerifiedEmail()) {
            return response(['message' => 'Already verified'])->header('Authorization', $token);
        }
        $request->user()->sendEmailVerificationNotification();
        if ($request->wantsJson()) {
            return response(['message' => 'Email Sent'])->header('Authorization', $token);
        }

        return back()->with('resent', true)->header('Authorization', $token);
    }
}
