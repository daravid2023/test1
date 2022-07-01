import React from "react";
import { Link } from "@inertiajs/inertia-react";

import {
    AppShell,
    Navbar,
    Stack,
    Box,
    Text,
    Divider,
    createStyles,
} from "@mantine/core";

import { usePage } from "@inertiajs/inertia-react";

import { Archive } from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
    listing_item: {
        padding: theme.spacing.md - theme.spacing.xs,
        color: theme.colors.dark[10],
        cursor: "pointer",
    },

    active: {
        fontWeight: 600,
        borderLeft: "4px solid",
        borderRightColor: theme.colors.dark[2],
    },
}));

export default function Dashboard({ children }) {
    const { component } = usePage();
    const { classes, cx } = useStyles();
    return (
        <AppShell
            padding="md"
            navbar={
                <Navbar
                    width={{ base: 300 }}
                    sx={{
                        position: "sticky",
                        top: 0,
                    }}
                >
                    <Box p="sm">
                        <Text size="xl" weight={500} transform="uppercase">
                            Dashboard
                        </Text>
                    </Box>
                    <Divider />
                    <Box p="sm">
                        <Box
                            sx={(theme) => ({
                                display: "flex",
                                gap: theme.spacing.xs,
                                color: theme.colors.gray[6],
                            })}
                        >
                            <Archive />
                            <Text transform="uppercase" weight={500}>
                                Listings
                            </Text>
                        </Box>
                        <Stack spacing="xs" mt="xs">
                            <Box>
                                <Text
                                    className={cx(classes.listing_item, {
                                        [classes.active]:
                                            component ==
                                            "PropertiesForSaleShow",
                                    })}
                                >
                                    Properties For Sale
                                </Text>
                            </Box>
                            <Link
                                as="div"
                                href={route("properties-for-rent-show")}
                            >
                                <Text
                                    className={cx(classes.listing_item, {
                                        [classes.active]:
                                            component ==
                                            "PropertiesForRentShow",
                                    })}
                                >
                                    Properties For Rent
                                </Text>
                            </Link>
                        </Stack>
                    </Box>
                </Navbar>
            }
        >
            {children}
        </AppShell>
    );
}
