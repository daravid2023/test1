import { Container, Divider, Stack, Text } from "@mantine/core";
import { Head } from "@inertiajs/inertia-react";

import Base from "@/Layouts/Base";
import Listing from "../Components/Listing";
import PropertiesFilter from "../Components/PropertiesFilter";
import React from "react";

function PropertiesForRent({ properties, ...props }) {
    console.log(properties)
    return (
        <Base {...props}>
            <Head title="Properties for Rent" />
            <Container
                size="lg"
                sx={{
                    margin: "1.111rem auto",
                }}
            >
                <PropertiesFilter />
                <Text size="xl" my="sm">
                    Properties For Rent
                </Text>
                <Divider my="sm" />
                <Stack spacing="md">
                    {properties.data.map((property, index) => (
                        <React.Fragment key={index}>
                            <Listing property={property} />
                        </React.Fragment>
                    ))}
                </Stack>
            </Container>
        </Base>
    );
}

export default PropertiesForRent;
