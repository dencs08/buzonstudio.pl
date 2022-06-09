<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Portfolio extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('portfolio', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('info');
            $table->foreignId('responsibilities_fk');
            $table->foreignId('links_fk');
            $table->foreignId('goals_fk');
            $table->foreignId('images_fk');
            $table->foreignId('alts_fk');
            $table->foreignId('team_fk');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('portfolio');
    }
}