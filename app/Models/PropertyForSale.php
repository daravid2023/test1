<?php

namespace App\Models;

use App\Traits\DataPaginationQueryFilter;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PropertyForSale extends Model
{
    use HasFactory, DataPaginationQueryFilter;

    protected $table = 'properties_for_sale';

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
