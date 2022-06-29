<?php

namespace App\Http\Controllers\PropertiesController;

//use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\Model;

class BasePropertiesController extends Controller
{
    protected function queryAll(Model $model)
    {
        return $model->all();
    }
}
