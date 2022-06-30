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

import { Archive } from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
    listing_item: {
        borderRadius: theme.radius.sm,
        padding: theme.spacing.md - theme.spacing.xs,
        color: theme.colors.gray[9],
        cursor: "pointer",
        ":hover": {
            backgroundColor: theme.colors.gray[2],
        },
    },
}));

export default function Dashboard({ children }) {
    const { classes } = useStyles();
    return (
        <AppShell
            padding="md"
            navbar={
                <Navbar width={{ base: 300 }}>
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
                                <Text className={classes.listing_item}>
                                    Properties For Sale
                                </Text>
                            </Box>
                            <Link
                                as="div"
                                href={route("properties-for-rent-show")}
                            >
                                <Text className={classes.listing_item}>
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
