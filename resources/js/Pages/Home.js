import React from "react";
import {Title, Button, createStyles} from "@mantine/core";
import {Link, Head} from "@inertiajs/inertia-react";
import {ArrowRight} from "tabler-icons-react";
import Navbar from "@/Components/Navbar";

const useStyles = createStyles((theme) => ({
    hero__container: {
        position: "relative",
        height: "90vh",
        backgroundSize: "auto",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 80%",
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url("/static/brand/hero.jpg")`,

        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            height: "content",
            backgroundSize: "cover",
        },
    },

    hero__main: {
        width: `calc(100% / 1.2)`,
        textTransform: "uppercase",
        fontFamily: theme.fontFamily,
        color: theme.colors.gray[0],
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    },

    hero__main_secondary_text: {
        fontWeight: "normal",
    },

    hero__main_cta_button: {
        height: "auto",
        padding: "18px 36px",
        marginTop: "1.111rem",

        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            padding: "9px 18px",
        },
    },
}));

export default function Home(props) {
    const {classes} = useStyles();
    return (
        <>
            <Head title="Home"/>
            <Navbar/>
            <div>
                <div className={classes.hero__container}>
                    <div className={classes.hero__main}>
                        <Title order={1}>
                            Discover quality homes with ease.
                        </Title>
                        <Title
                            order={3}
                            className={classes.hero__main_secondary_text}
                        >
                            Rent or buy; We have you covered.
                        </Title>
                        <Link href={route("properties-for-sale")} as="span">
                            <Button
                                className={classes.hero__main_cta_button}
                                rightIcon={<ArrowRight/>}
                                variant="gradient"
                            >
                                Browse
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
