<?php

namespace App\Http\Controllers\PropertiesController;

use Inertia\Inertia;
use Inertia\Response;

class PropertiesForSaleController extends BasePropertiesController
{
    public function index(): Response
    {
        return Inertia::render('PropertiesForSale');
    }
}
