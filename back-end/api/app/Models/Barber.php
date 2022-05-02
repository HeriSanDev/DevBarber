<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Barber extends Model
{
    use HasFactory;

    protected $fillable = ['user',
    'avatar','name','cell','latitude','longitude','distance','photos', 'stars'];

    protected $hidden = [
        'user',
        'cell',
        'created_at',
        'updated_at',
        'user_id'

    ];


    protected $casts = [
        'photos'=>'json'
    ];

    public function agends()
    {
        return $this->hasMany(Agend::class); //barber_id
    }
    public function services()
    {
        return $this->hasMany(Service::class); //barber_id
    }
    public function availables()
    {
        return $this->hasMany(Available::class); //barber_id
    }
    public function testimonials()
    {
        return $this->hasMany(Testimonial::class); //barber_id
    }
    public function users()
    {
        return $this->hasOne(User::class); //user_id
    }
    public function favorites()
    {
        return $this->belongsToMany(Client::class, table('favorites')); //barber_id
    }

}
