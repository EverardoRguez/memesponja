<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Imagen; // Asegúrate de importar el modelo correcto

class ImagenController extends Controller
{
    public function index(){
        $imagenes = Imagen::all();
        return Inertia::render('Imagenes/Index',['imagenes'=>$imagenes]);
    }
}
