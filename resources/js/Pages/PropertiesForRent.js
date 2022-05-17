import {
    Container,
    createStyles,
    Grid,
    Group,
    Stack,
    Text,
    Title,
} from "@mantine/core";

import { Clock, CurrentLocation } from "tabler-icons-react";

import ListingCard from "@/components/ListingCard";

import {
    PropertyApplyFilterButton,
    PropertyLocationFilter,
    PropertyPriceRangeFilter,
    PropertyTypeFilter,
} from "@/Components/PropertiesFilter";

import Base from "@/Layouts/Base";

const useStyles = createStyles((theme) => ({
    container__main: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        cursor: "pointer",
        boxShadow: theme.shadows.sm,

        [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
            flexDirection: "row",
        },
    },

    container__carousel: {
        width: "100%",
        img: {
            width: "100%",
        },

        [`@media (min-width: ${theme.breakpoints.xs}px)`]: {
            width: "350px",
        },
    },

    container__description: {
        padding: "1.111rem",
        flex: 1,
    },

    main__description: {
        paddingBottom: "1.111rem",
        fontWeight: "bold",
        color: theme.colors.gray[7],
    },

    main__content: {
        height: "100%",
    },
}));

function PropertiesForRent(props) {
    const { classes } = useStyles();

    return (
        <Base {...props}>
            <Container
                size="lg"
                sx={{
                    margin: "1.111rem auto",
                }}
            >
                <Grid>
                    <Grid.Col sm={3}>
                        <PropertyLocationFilter />
                    </Grid.Col>
                    <Grid.Col sm={4}>
                        <PropertyTypeFilter />
                    </Grid.Col>
                    <Grid.Col sm={3}>
                        <PropertyPriceRangeFilter />
                    </Grid.Col>
                    <Grid.Col sm={2}>
                        <PropertyApplyFilterButton />
                    </Grid.Col>
                </Grid>

                <Title
                    order={3}
                    sx={{
                        margin: ".475rem 0",
                    }}
                >
                    Property for Rent in Cambodia
                </Title>

                <ListingCard>
                    <ListingCard.Title title="2 Bedroom Duplex Apartment" />
                    <ListingCard.Content>
                        <div className={classes.container__main}>
                            <div className={classes.container__carousel}>
                                <img
                                    src="./static/brand/hero.jpg"
                                    alt="images"
                                />
                            </div>
                            <div className={classes.container__description}>
                                <Stack
                                    className={classes.main__content}
                                    justify="space-between"
                                >
                                    <div>
                                        <Group
                                            className={
                                                classes.main__description
                                            }
                                            position="apart"
                                        >
                                            <Text>Apartment</Text>
                                            <Text>$150,000</Text>
                                        </Group>
                                        <Group spacing={4}>
                                            <CurrentLocation size={16} />
                                            <Text>
                                                Phsar Thmei III, Daun Penh,
                                                Phnom Penh
                                            </Text>
                                        </Group>
                                    </div>
                                    <div>
                                        <Group spacing={4}>
                                            <Clock size={16} />
                                            <Text>Updated: 2 days ago</Text>
                                        </Group>
                                        <Text>
                                            DABEST PROPERTIES CAMBODIA CO., LTD
                                        </Text>
                                    </div>
                                </Stack>
                            </div>
                        </div>
                    </ListingCard.Content>
                </ListingCard>
            </Container>
        </Base>
    );
}

export default PropertiesForRent;
