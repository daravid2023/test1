import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import { Button, createStyles } from "@mantine/core";
import { useContext } from "react";
import { FilterContext } from "../../Context/FilterContext";

const useStyles = createStyles(() => ({
    root: {
        width: "100%",
    },
}));

function PropertyApplyFilterButton({ url }) {
    const { classes } = useStyles();
    const { data } = useContext(FilterContext);

    const handleClick = () => {
        Inertia.get(
            url,
            {
                ...data,
                locations: Array.from(data.locations.keys()),
            },
            {
                preserveState: true,
            }
        );
    };

    return (
        <Button
            className={classes.root}
            variant="gradient"
            gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
            onClick={handleClick}
        >
            Apply Filter
        </Button>
    );
}

export default PropertyApplyFilterButton;
