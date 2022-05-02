<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBarbersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('barbers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->string('user');
            $table->string('avatar')->nullable;
            $table->string('name');
            $table->string('cell')->nullable;
            $table->string('latitude')->nullable;
            $table->string('longitude')->nullable;
            $table->float('distance')->nullable;
            $table->float('stars')->nullable;
            $table->json('photos')->nullable;
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('barbers');
    }
}
