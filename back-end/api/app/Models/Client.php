<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    protected $fillable = ['user','avatar','name','cell','latitude','longitude','distance'];

    public function agends()
    {
        return $this->hasMany(Agend::class); //client_id
    }
    public function testimonials()
    {
        return $this->hasMany(Testimonial::class); //client_id
    }
    public function users()
    {
        return $this->hasOne(User::class); //user_id
    }
    public function favorites()
    {
        return $this->belongsToMany(Barber::class,'favorites',); //barber_id
    }
}
