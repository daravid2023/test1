import { createStyles, Text, Title, Box, useMantineTheme } from "@mantine/core";
import { ArrowLeft, ArrowRight, CurrentLocation } from "tabler-icons-react";
import toArrayIgnoreNull from "../../hooks/carousel/formatter/toArrayIgnoreNull";
import { useArrayCarousel } from "../../hooks/carousel/useArrayCarousel";
import { Carousel } from "./Carousel";

const useStyles = createStyles((theme) => ({
    container__main: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        cursor: "pointer",
        boxShadow: theme.shadows.sm,

        [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
            width: "calc(100% - 30%)",
        },
    },

    container__title: {
        padding: "0.368rem",
        backgroundColor: theme.colors.gray[8],
        color: theme.white,
    },

    container__content: {
        display: "flex",
        flexDirection: "column",

        [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
            flexDirection: "row",
        },
    },

    container__carousel: {
        position: "relative",
        width: "100%",
        img: {
            width: "100%",
        },
        [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
            width: 300,
        },
    },

    container__description: {
        margin: "1.111rem",
        color: theme.colors.gray[7],
        flex: 2,
    },

    details: {
        display: "flex",
        gap: 10,
    },
}));

function Listing({ property }) {
    const theme = useMantineTheme();
    const { classes } = useStyles();

    const { next, prev, hasNext, hasPrev, reset, ...restCarousel } =
        useArrayCarousel(property, toArrayIgnoreNull);

    return (
        <div className={classes.container__main}>
            <div className={classes.container__title}>
                <Title order={4}>{property.title}</Title>
            </div>

            <div className={classes.container__content}>
                <div className={classes.container__carousel}>
                    <Box
                        sx={{
                            position: "absolute",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            left: 0,
                            zIndex: 1,
                            height: "100%",
                            width: "15%",
                            ":hover": {
                                backgroundColor: "rgba(0, 0, 0, 0.5)",
                            },
                        }}
                        onClick={prev}
                    >
                        <div>
                            <ArrowLeft
                                color={
                                    hasPrev
                                        ? theme.colors.gray[0]
                                        : theme.colors.gray[5]
                                }
                            />
                        </div>
                    </Box>
                    <Box
                        sx={{
                            position: "absolute",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            right: 0,
                            zIndex: 1,
                            height: "100%",
                            width: "15%",
                            ":hover": {
                                backgroundColor: "rgba(0, 0, 0, 0.5)",
                            },
                        }}
                        onClick={next}
                    >
                        <div>
                            <ArrowRight
                                color={
                                    hasNext
                                        ? theme.colors.gray[0]
                                        : theme.colors.gray[5]
                                }
                            />
                        </div>
                    </Box>
                    <Carousel {...restCarousel} />
                </div>
                <div className={classes.container__description}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Title order={5}>{property.heading}</Title>
                        <Title order={5}>${property.price}</Title>
                    </Box>
                    <Box
                        sx={{
                            marginTop: "1.111rem",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <div className={classes.details}>
                            <CurrentLocation />
                            <Text size="sm">{property.property_location}</Text>
                        </div>
                    </Box>
                </div>
            </div>
        </div>
    );
}

export default Listing;
