<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Agend extends Model
{
    use HasFactory;

    protected $fillable = ['client_id','barber_id','date','hour','status'];



    public function clients(){
        return $this->belongsTo(Client::class);
    }
    public function barbers(){
        return $this->belongsTo(Barber::class);
    }
    public function testimonial(){
        return $this->hasOne(Testimonial::class);
    }
}


