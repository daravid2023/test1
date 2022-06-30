import {
    Container,
    Divider,
    Input,
    NumberInput,
    Text,
    TextInput,
} from "@mantine/core";
import { Head, useForm } from "@inertiajs/inertia-react";

import Dashboard from "../Layouts/Dashboard";

function PropertiesForRentShow(props) {
    const { data, setData, post, progress } = useForm({
        title: "",
        heading: "",
        description: "",
        property_location: "",
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
                <TextInput
                    value={data.title}
                    onChange={(e) => setData("title", e.target.value)}
                />
                <TextInput
                    value={data.heading}
                    onChange={(e) => setData("heading", e.target.value)}
                />
                <TextInput
                    value={data.description}
                    onChange={(e) => setData("description", e.target.value)}
                />
                <TextInput
                    value={data.property_location}
                    onChange={(e) =>
                        setData("property_location", e.target.value)
                    }
                />

                <NumberInput
                    parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                    formatter={(value) =>
                        !Number.isNaN(parseFloat(value))
                            ? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                            : "$ "
                    }
                    value={data.price}
                    onChange={(number) => setData("price", number)}
                />

                <Input
                    type="file"
                    defaultValue={data.image_one}
                    onChange={(e) => setData("image_one", e.target.files[0])}
                />

                <Input
                    type="file"
                    defaultValue={data.image_two}
                    onChange={(e) => setData("image_two", e.target.files[0])}
                />

                <Input
                    type="file"
                    defaultValue={data.image_three}
                    onChange={(e) => setData("image_three", e.target.files[0])}
                />

                {progress && (
                    <progress value={progress.percentage} max="100">
                        {progress.percentage}%
                    </progress>
                )}

                <button type="submit">Submit</button>
            </form>
        </Dashboard>
    );
}

export default PropertiesForRentShow;
