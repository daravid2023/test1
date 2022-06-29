<?php

namespace App\Http\Controllers\PropertiesController;

use Illuminate\Http\Request;

use App\Models\PropertyForRent;
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
            'properties' => $this->queryAll($this->model),
        ]);
    }

    public function store(Request $request)
    {
        $property = new PropertyForRent;
        $property->title = $request->title;
        $property->heading = $request->heading;
        $property->property_location = $request->property_location;
        $property->description = $request->description;
        $property->price = $request->price;

        $storedFilePath = [];

        if ($request->hasFile('image_one')) {
            $storedFilePath['image_one'] = $request->file('image_one')->store('public');
        } elseif ($request->hasFile('image_two')) {
            $storedFilePath['image_two'] = $request->file('image_two')->store('public');
        } elseif ($request->hasFile('image_three')) {
            $storedFilePath['image_three'] = $request->file('image_three')->store('public');
        } elseif ($request->hasFile('image_four')) {
            $storedFilePath['image_four'] = $request->file('image_four')->store('public');
        } elseif ($request->hasFile('image_five')) {
            $storedFilePath['image_five'] = $request->file('image_five')->store('public');
        }

        // if ($request->image_one) {
        //     $property->image_one = $storedFilePath['image_one'];
        // } elseif ($request->image_two) {
        //     $property->image_two = $storedFilePath['image_two'];
        // } elseif ($request->image_three) {
        //     $property->image_three = $storedFilePath['image_three'];
        // } elseif ($request->image_four) {
        //     $property->image_four = $storedFilePath['image_four'];
        // } elseif ($request->image_five) {
        //     $property->image_five = $storedFilePath['image_five'];
        // }

        if ($storedFilePath['image_one']) {
            $property->image_one = $storedFilePath['image_one'];
        } elseif ($storedFilePath['image_two']) {
            $property->image_two = $storedFilePath['image_two'];
        } elseif ($storedFilePath['image_three']) {
            $property->image_three = $storedFilePath['image_three'];
        } elseif ($storedFilePath['image_four']) {
            $property->image_four = $storedFilePath['image_four'];
        } elseif ($storedFilePath['image_five']) {
            $property->image_five = $storedFilePath['image_five'];
        }

        $property->user_id = auth()->user()->id;

        $property->save();

        return response()->json([])->setStatusCode(200)->setContentType('application/json');
    }
}
