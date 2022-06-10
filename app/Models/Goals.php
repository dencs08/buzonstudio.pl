<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Goals extends Model
{
    use HasFactory;

    static function getByName($request){
        return DB::table('goals')->where('portfolio_fk', $request)->get();
    }
}
