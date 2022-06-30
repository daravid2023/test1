<?php

namespace App\Http\Controllers\PropertiesController;

use Illuminate\Http\Request;

use App\Models\PropertyForRent;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class PropertiesForRentController extends BasePropertiesController
{

    private $model;

    public function __construct(PropertyForRent $propertyForRent)
    {
        $this->model = $propertyForRent;
    }

    public function index(): Response
    {
        return Inertia::render('PropertiesForRent', [
            'properties' => $this->queryData($this->model),
        ]);
    }

    public function show()
    {
        return Inertia::render('PropertiesForRentShow');
    }

    public function store(Request $request)
    {
        $property = new PropertyForRent;
        $property->title = $request->title;
        $property->heading = $request->heading;
        $property->property_location = $request->property_location;
        $property->description = $request->description;
        $property->price = $request->price;

        $storedFilePaths = [
            'image_one' => null,
            'image_two' => null,
            'image_three' => null,
            'image_four' => null,
            'image_five' => null
        ];

        foreach ($storedFilePaths as $key => $_) {
            if ($request->hasFile($key)) {
                $storedFilePaths[$key] = $request->file($key)->store('public');
            }
        }

        $property->image_one = $storedFilePaths['image_one'];
        $property->image_two = $storedFilePaths['image_two'];
        $property->image_three = $storedFilePaths['image_three'];
        $property->image_four = $storedFilePaths['image_four'];
        $property->image_five = $storedFilePaths['image_five'];
        $property->user_id = auth()->user()->id;

        $property->save();

        return response()->setStatusCode(200)->setContent('application/json');
    }
}
