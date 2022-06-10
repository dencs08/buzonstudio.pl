<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Portfolio;
use App\Models\Responsibilities;
use App\Models\Goals;
use App\Models\Images;

class PortfolioController extends Controller
{
    public function portfolio($name){
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
}

