<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Available extends Model
{
    use HasFactory;

    protected $fillable = ['barber_id','date','hours','disponivel'];

    protected $casts = [
        'hours'=>'array'
    ];

    protected $hidden = [
        'barber_id',
        'created_at',
        'updated_at'


    ];

    public function barbers()
    {
    return $this->belongsTo(Barber::class);
    }
}
