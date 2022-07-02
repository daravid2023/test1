<?php

namespace App\Http\Controllers\PropertiesController;

use App\Http\Controllers\Controller;
use App\Models\PropertyForSale;
use Inertia\Inertia;
use Inertia\Response;

class PropertiesForSaleController extends Controller
{
    private $model;

    public function __construct(PropertyForSale $propertyForSaleModel)
    {
        $this->model = $propertyForSaleModel;
    }

    public function index(): Response
    {
        return Inertia::render('PropertiesForSale', [
            'properties' => $this->model->queryData()
        ]);
    }
}
