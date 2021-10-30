<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PortfolioController extends Controller
{

    public $data = [
        'castle3d' => 'castle3d',
        'watch3d' => 'watch3d',
        'komb' => 'komb',
        'danfit' => 'danfit',
        'zielonewidoki' => 'zielonewidoki',
        'ats' => 'ats',
    ];

    public function offerShow(){
        $data = $this->data;

        return view('oferta', [
            'portfolios' => $data
        ]);
    }

    public function show($name){
        $data = $this->data;

        return view('portfolio', [
            'portfolios' => $data[$name] ?? 'Portfolio o nazwie ' . $name . ' nie istnieje'
        ]);
    }
}
