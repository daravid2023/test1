import { Container, Divider, Pagination, Stack, Text } from "@mantine/core";
import { Head } from "@inertiajs/inertia-react";

import Base from "@/Layouts/Base";
import Listing from "../Components/Listing";
import PropertiesFilter from "../Components/PropertiesFilter";
import React from "react";
import { Inertia } from "@inertiajs/inertia";

function PropertiesForRent({ properties, ...props }) {
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
                <Divider my="md"/>
                <Pagination
                    initialPage={properties.current_page}
                    total={Math.ceil(properties.total / properties.per_page)}
                    onChange={(page) =>
                        Inertia.visit(properties.path, {
                            data: {
                                page: page,
                            },
                        })
                    }
                />
            </Container>
        </Base>
    );
}

export default PropertiesForRent;
