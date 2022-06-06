<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UsersModel extends Model
{
    use HasFactory;
    protected $fillable = [
        "nombre",
        "apellido",
        "email",
        "telefono",
        "pais",
        "pregunta1",
        "pregunta2",
        "pregunta3",
        "pregunta4",
        "contraseña",
        "updated_at",
        "created-at"
    ];
}
