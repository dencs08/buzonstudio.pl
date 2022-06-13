<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class EmailController extends Controller
{
    public function view()
    {
        return view('contact');
    }

    public function sendEmail(Request $request)
    {
        $request->validate([
          'email' => 'required|email',
          'name' => 'required',
          'content' => 'required',
          'controlInfo' => ''
        ]);

        $data = [
          'name' => $request->name,
          'email' => $request->email,
          'content' => $request->content,
          'controlInfo' => $request->controlInfo,
          // 'logo' => asset('/images/logos/buzonstudio_black.svg')
        ];

        Mail::send('emails.email-template', $data, function($message) use ($data) {
          $message->to(env('MAIL_USERNAME'))
          ->subject("Nowa wiadomość ze strony buzonstudio")
          ->from(env('MAIL_USERNAME'), env('APP_NAME'))
          ->sender(env('MAIL_USERNAME'), env('APP_NAME'));
        });

        Mail::send('emails.email-template-user-confirm', $data, function($message) use ($data) {
          $message->to($data['email'])
          ->subject("Dziękujemy za kontakt!")
          ->from(env('MAIL_USERNAME'), env('APP_NAME'))
          ->sender(env('MAIL_USERNAME'), env('APP_NAME'));
        });

        return view('emails.email-sent');
    }
}