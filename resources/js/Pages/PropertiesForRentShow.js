import {
    Button,
    NativeSelect,
    NumberInput,
    Stack,
    TextInput,
} from "@mantine/core";
import { Head, useForm } from "@inertiajs/inertia-react";

import Dashboard from "../Layouts/Dashboard";
import { commercialTypes, LOCATIONS, residentialTypes } from "../Enum";

function PropertiesForRentShow(props) {
    const { data, setData, post, progress } = useForm({
        title: "",
        heading: "",
        description: "",
        property_location: "",
        property_type: "",
        price: 0,
        image_one: null,
        image_two: null,
        image_three: null,
        image_four: null,
        image_five: null,
    });

    function submit(e) {
        e.preventDefault();
        post(route("properties-for-rent-store"));
    }

    return (
        <Dashboard {...props}>
            <Head title="Properties for Rent" />
            <form onSubmit={submit}>
                <Stack>
                    <TextInput
                        value={data.title}
                        onChange={(e) => setData("title", e.target.value)}
                        label="Title"
                        required
                    />
                    <TextInput
                        value={data.heading}
                        onChange={(e) => setData("heading", e.target.value)}
                        label="Heading"
                        required
                    />

                    <TextInput
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                        label="Description"
                        required
                    />

                    <NativeSelect
                        value={data.property_location}
                        data={LOCATIONS.map((location) => location.name)}
                        onChange={(e) =>
                            setData("property_location", e.target.value)
                        }
                        placeholder="Pick a location"
                        label="Select a location for your property"
                        required
                    />

                    <NativeSelect
                        value={data.property_type}
                        data={commercialTypes.concat(residentialTypes)}
                        onChange={(e) =>
                            setData("property_type", e.target.value)
                        }
                        placeholder="Pick a type for your property"
                        label="Select your  type"
                        required
                    />

                    <NumberInput
                        min={0}
                        parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                        formatter={(value) =>
                            !Number.isNaN(parseFloat(value))
                                ? `$ ${value}`.replace(
                                      /\B(?=(\d{3})+(?!\d))/g,
                                      ","
                                  )
                                : "$ "
                        }
                        value={data.price}
                        onChange={(number) => setData("price", number)}
                        label="Price in $"
                        required
                    />

                    <label>Image 1</label>
                    <input
                        type="file"
                        defaultValue={data.image_one}
                        onChange={(e) =>
                            setData("image_one", e.target.files[0])
                        }
                    />

                    <label>Image 2</label>
                    <input
                        type="file"
                        defaultValue={data.image_two}
                        onChange={(e) =>
                            setData("image_two", e.target.files[0])
                        }
                    />

                    <label>Image 3</label>
                    <input
                        type="file"
                        defaultValue={data.image_three}
                        onChange={(e) =>
                            setData("image_three", e.target.files[0])
                        }
                    />

                    <label>Image 4</label>
                    <input
                        type="file"
                        defaultValue={data.image_three}
                        onChange={(e) =>
                            setData("image_three", e.target.files[0])
                        }
                    />

                    <label>Image 5</label>
                    <input
                        type="file"
                        defaultValue={data.image_three}
                        onChange={(e) =>
                            setData("image_three", e.target.files[0])
                        }
                    />

                    {progress && (
                        <progress value={progress.percentage} max="100">
                            {progress.percentage}%
                        </progress>
                    )}

                    <div>
                        <Button type="submit">Submit</Button>
                    </div>
                </Stack>
            </form>
        </Dashboard>
    );
}

export default PropertiesForRentShow;
