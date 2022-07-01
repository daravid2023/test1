<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('properties_for_sale', function (Blueprint $table) {
            $table->id();
            $table->string('title', 255);
            $table->string('heading', 77);
            $table->string('property_location', 100);
            $table->string('property_type', 100);
            $table->string('description', 255);
            $table->decimal('price', unsigned: true);
            $table->string('image_one');
            $table->string('image_two')->nullable();
            $table->string('image_three')->nullable();
            $table->string('image_four')->nullable();
            $table->string('image_five')->nullable();
            $table->foreignId('user_id')->constrained();
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
        Schema::dropIfExists('properties_for_sale');
    }
};
