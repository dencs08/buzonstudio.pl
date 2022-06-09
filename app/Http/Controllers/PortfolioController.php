<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Portfolio;

class PortfolioController extends Controller
{

    public $data = [

    ];

    public function offerShow(){
        $data = $this->data;
        
        return view('oferta', [
            'portfolios' => $data
        ]);
    }
    
    public function show($name){
        $portfolio_data = Portfolio::all();
        $data = $this->data;

        return view('portfolio', [
            // 'portfolioName' => $data["name"] ?? 'Portfolio o nazwie ' . $name . ' nie istnieje'
        ]);
    }
}

