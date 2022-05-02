<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
    use HasFactory;
    protected $fillable = ['client_id','barber_id','agend_id','body','stars'];

    protected $hidden = [
        'agend_id',
        'barber_id',
        'client_id',
        'created_at',
        'updated_at'


    ];

    public function clients(){
        return $this->belongsTo(Client::class);
    }
    public function barbers(){
        return $this->belongsTo(Barber::class);
    }
    public function agends(){
        return $this->belongsTo(Agend::class);
    }
}
