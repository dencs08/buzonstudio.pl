<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Portfolio;

class AppController extends Controller
{
    function start(){
        $request = Portfolio::findMany([1,11,5,3,2])->sortBy('name');
        $portfolio_data = json_decode($request, false);

        return view('start', [
            'portfolio_data' => $portfolio_data
        ]);
    }

    function offer(){
        return view('offer');
    }

    function contact(){
        return view('contact');
    }

    function privacy(){
        return view('privacy');
    }
}
