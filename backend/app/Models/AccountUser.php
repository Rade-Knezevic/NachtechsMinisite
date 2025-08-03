<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AccountUser extends Model
{
    use HasFactory;

    protected $fillable = [
    'account_name',
    'unique_identifier_code',
    'authorization_level',
    'active',
    'description',
];
}
