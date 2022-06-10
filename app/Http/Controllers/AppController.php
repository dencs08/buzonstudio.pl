<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Portfolio;
use App\Models\Responsibilities;
use App\Models\Goals;
use App\Models\Images;

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

    function project($name){
        // $portfolio_data = Portfolio::all();
        // $data = $this->data;

        $project = Portfolio::getByName($name);
        $images = Images::getByName($name);
        $responsibilities = Responsibilities::getByName($name);
        $goals = Goals::getByName($name);

        return view('project', [
            'name' => $project->name ?? 'Portfolio o nazwie ' . $name . ' nie istnieje',
            'website' => $project->website ?? '',
            'info' => $project->info ?? '',
            'responsibilities' => $responsibilities ?? '',
            'goals' => $goals ?? '',
            'images' => $images ?? ''
        ]);
    }

    function portfolio(){
        $request = Portfolio::all();
        $request = json_decode($request,false);

        //get wanted projects from request
        foreach ($request as $project) {
            switch ($project->name) {
            case "bielanypark":
                $bielanypark=$project;
                break;
            case "Meble":
                $meble=$project;
                break;
            case "danfit":
                $danfit=$project;
                break;
            case "komb":
                $komb=$project;
                break;
            case "watch3d":
                $watch3d=$project;
                break;
            case "Jaguar":
                $jaguar=$project;
                break;
            case "castle3d":
                $castle=$project;
                break;
            case "ats":
                $ats=$project;
                break;
            }
        } 

        // put it in array in my own order
        $portfolio_row_first[] = $bielanypark;
        $portfolio_row_first[] = $meble;
        $portfolio_row_second[] = $danfit;
        $portfolio_row_second[] = $komb;
        $portfolio_row_third[] = $watch3d;
        $portfolio_row_third[] = $jaguar;
        $portfolio_row_fourth[] = $castle;
        $portfolio_row_fourth[] = $ats;

        $portfolio_sections[] = $portfolio_row_first;
        $portfolio_sections[] = $portfolio_row_second;
        $portfolio_sections[] = $portfolio_row_third;
        $portfolio_sections[] = $portfolio_row_fourth;

        return view('portfolio',[
            'portfolio_row_first' => $portfolio_row_first,
            'portfolio_row_second' => $portfolio_row_second,
            'portfolio_row_third' => $portfolio_row_third,
            'portfolio_row_fourth' => $portfolio_row_fourth,
        ]);
    }
}
