<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class EmailController extends Controller
{
    public function create()
    {
        return view('kontakt');
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
          'controlInfo' => $request->controlInfo
        ];

        Mail::send('email-template', $data, function($message) use ($data) {
          $message->to("biuro@bisonstudio.pl")
          ->subject("Nowa wiadomość ze strony bisonstudio");
        });

        return view('email-sent');
    }
}