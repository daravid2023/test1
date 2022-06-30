<?php

namespace App\Traits;

use Illuminate\Support\Facades\DB;

trait DataPaginationQueryFilter
{
    private $locations = null;
    private $types = null;
    private $min_price = null;
    private $max_price = null;

    public function setLocations($locations)
    {
        $this->locations = $locations;
        return $this;
    }

    public function setTypes($types)
    {
        $this->types = $types;
        return $this;
    }

    public function setMinPrice($min_price)
    {
        $this->min_price = $min_price;
        return $this;
    }

    public function setMaxPrice($max_price)
    {
        $this->max_price = $max_price;
        return $this;
    }

    public function queryData()
    {
        return DB::table($this->table)->when($this->locations, function ($query, $locations) {
            $query->whereIn('property_location', $locations);
        })->when($this->types, function ($query, $types) {
            $query->whereIn('property_type', $types);
        })->when($this->min_price, function ($query, $min_price) {
            $query->where('price', '>=', $min_price);
        })->when($this->max_price, function ($query, $max_price) {
            $query->where('price', '<=', $max_price);
        })->paginate(20);
    }
}
