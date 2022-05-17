import { createStyles, NativeSelect, Popover, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowUp } from "tabler-icons-react";
import DropdownButton from "@/Components/DropdownButton";

const useStyles = createStyles((theme) => ({
    price_range__container: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 2,
    },
}));

const startingEndingPrices = [
    20, 40, 60, 80, 100, 125, 150, 175, 200, 250, 300, 400, 500, 600, 700, 800,
    900, 1000, 1500, 2000,
].map((price) => "$" + String(price * 1000));

function PropertyPriceRangeFilter() {
    const { classes } = useStyles();
    const [opened, setOpened] = useState(false);

    const [startingPriceRange, setStartingPriceRange] = useState(
        startingEndingPrices[0]
    );
    const [endingPriceRange, setEndingPriceRange] = useState(
        startingEndingPrices[0]
    );

    useEffect(() => {
        if (
            Number(endingPriceRange.substring(1)) <
            Number(startingPriceRange.substring(1))
        ) {
            setStartingPriceRange(startingEndingPrices[0]);
        }
    }, [startingPriceRange, endingPriceRange]);

    return (
        <Popover
            sx={{
                display: "block",
            }}
            width={300}
            opened={opened}
            onClose={() => setOpened(false)}
            position="bottom"
            placement="start"
            withArrow
            trapFocus={false}
            closeOnEscape={false}
            transition="pop-bottom-right"
            target={
                <DropdownButton
                    UpIcon={ArrowUp}
                    DownIcon={ArrowDown}
                    content="Price Range"
                    opened={opened}
                    setOpened={setOpened}
                />
            }
        >
            <div className={classes.price_range__container}>
                <NativeSelect
                    value={startingPriceRange}
                    onChange={(event) =>
                        setStartingPriceRange(event.currentTarget.value)
                    }
                    data={startingEndingPrices}
                />
                <Text>-</Text>
                <NativeSelect
                    value={endingPriceRange}
                    onChange={(event) =>
                        setEndingPriceRange(event.currentTarget.value)
                    }
                    data={startingEndingPrices}
                />
            </div>
        </Popover>
    );
}

export default PropertyPriceRangeFilter;
