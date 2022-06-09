import { Container, Divider, Text } from "@mantine/core";
import { Head } from "@inertiajs/inertia-react";

import Base from "@/Layouts/Base";
import Listing from "../Components/Listing";
import PropertiesFilter from "../Components/PropertiesFilter";

function PropertiesForSale(props) {
    return (
        <Base {...props}>
            <Head title="Properties for Sale" />
            <Container
                size="lg"
                sx={{
                    margin: "1.111rem auto",
                }}
            >
                <PropertiesFilter />
                <Text size="xl" my="sm">
                    Properties For Sale
                </Text>
                <Divider my="sm" />
                <Listing />
            </Container>
        </Base>
    );
}

export default PropertiesForSale;
