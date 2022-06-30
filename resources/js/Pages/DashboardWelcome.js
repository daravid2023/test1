import { Text } from "@mantine/core";
import { Head } from "@inertiajs/inertia-react";
import Dashboard from "../Layouts/Dashboard";

function PropertiesForRent(props) {
    return (
        <Dashboard {...props}>
            <Head title="Welcome" />
            <Text transform="uppercase" size="xl" weight={700}>
                Welcome, to your dashboard!
            </Text>
        </Dashboard>
    );
}

export default PropertiesForRent;
