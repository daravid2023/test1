<?php

namespace App\Models;

use App\Traits\DataPaginationQueryFilter;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class PropertyForRent extends Model
{
    use HasFactory, DataPaginationQueryFilter;

    protected $table = 'properties_for_rent';

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
