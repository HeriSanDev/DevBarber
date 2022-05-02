<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;
    protected $fillable = ['barber_id','name','description','price'];

    protected $hidden = [
        'barber_id',
        'description',
        'created_at',
        'updated_at'


    ];

    public function barbers()
    {
    return $this->belongsTo(Barber::class);
    }
}
