<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Imagen extends Model
{
    protected $table = 'imagenes';
    use HasFactory;
    protected $fillable = [
        'imagen_id',
        'imagen',
    ];
}
