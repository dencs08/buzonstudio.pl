<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AppController extends Controller
{
    function start(){
        return view('start');
    }

    function offer(){
        return view('offer');
    }

    function portfolio(){
        return view('portfolio');
    }

    function contact(){
        return view('contact');
    }

    function privacy(){
        return view('privacy');
    }
}
