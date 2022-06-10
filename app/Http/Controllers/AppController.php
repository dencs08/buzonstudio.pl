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
        return view('portfolio',[
            
        ]);
    }
}
