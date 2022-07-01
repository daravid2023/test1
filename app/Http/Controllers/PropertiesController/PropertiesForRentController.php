<?php

namespace App\Http\Controllers\PropertiesController;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\PropertyForRent;
use Inertia\Inertia;

class PropertiesForRentController extends Controller
{
    private $modal;

    public function __construct(PropertyForRent $modal)
    {
        $this->modal = $modal;
    }

    public function index(Request $request)
    {
        $types = [];

        $query = $request->query();
        if ($request->has('property_type')) {
            if (array_key_exists('residential', $query['property_type'])) {
                $types = array_merge($query['property_type']['residential'], $types);
            } elseif (array_key_exists('commercial', $query['property_type'])) {
                $types = array_merge($query['property_type']['commercial'], $types);
            };
        }

        return Inertia::render('PropertiesForRent', [
            'properties' => $this->modal->setLocations($request->query('locations', null))->setMaxPrice($request->query('max_price', null))->queryData(),
            'filters' => $request->only('locations', 'property_type', 'min_price', 'max_price')
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
        $property->property_type = $request->property_type;
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

        return redirect(route('properties-for-rent-show'));
    }
}
