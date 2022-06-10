<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Responsibilities extends Model
{
    use HasFactory;

    static function getByName($request){
        return DB::table('responsibilities')->where('portfolio_fk', $request)->get();
    }
}
