<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Portfolio;

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
        $portfolio_data = Portfolio::all();
        $data = $this->data;

        $i = 0;

        switch ($name) {
            case "castle3d":
                $i = 0;
                break;
            case "watch3d":
                $i = 1;
                break;
            case "danfit":
                $i = 2;
                break;
            case "komb":
                $i = 3;
                break;
            case "zielonewidoki":
                $i = 4;
                break;
            case "ats":
                $i = 5;
                break; 
        }

        $portfolio_data_decoded = json_decode($portfolio_data, true);
        $portfolio_data_decoded_r = json_decode($portfolio_data_decoded[$i]["responsibilities"], true);
        $portfolio_data_decoded_l = json_decode($portfolio_data_decoded[$i]["links"], true);
        $portfolio_data_decoded_g = json_decode($portfolio_data_decoded[$i]["goals"], true);
        $portfolio_data_decoded_i = json_decode($portfolio_data_decoded[$i]["images"], true);

        // dd($portfolio_data_decoded[0]["id"] - 1); 

        // count($portfolio_data_decoded)

        // if (stristr('europeisthebest', $name)){
        // }

            // dd($portfolio_data_decoded[$i]["alts"]);


        return view('portfolio', [
            'portfolioName' => $data["name"] ?? 'Portfolio o nazwie ' . $name . ' nie istnieje'
        ])->with('portfolioName',$portfolio_data_decoded[$i]["name"])
        ->with('portfolioInfo',$portfolio_data_decoded[$i]["info"])
        ->with('portfolioResponsibilities',$portfolio_data_decoded_r["responsibilities"])
        ->with('portfolioLinks',$portfolio_data_decoded_l["links"])
        ->with('portfolioGoals',$portfolio_data_decoded_g["goals"])
        ->with('portfolioImages',$portfolio_data_decoded_i["images"])
        ->with('portfolioAlts',$portfolio_data_decoded[$i]["alts"]);
    }
}

