import { createStyles, NativeSelect, Popover, Text } from "@mantine/core";
import { useContext, useState } from "react";
import { ArrowDown, ArrowUp } from "tabler-icons-react";
import DropdownButton from "@/Components/DropdownButton";

import {
    FilterContext,
    startingEndingPrices,
} from "../../Context/FilterContext";

const useStyles = createStyles((theme) => ({
    price_range__container: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 2,
    },
}));

function PropertyPriceRangeFilter() {
    const { classes } = useStyles();
    const [opened, setOpened] = useState(false);

    const {
        data: { min_price, max_price },
        setMinPriceRange,
        setMaxPriceRange,
    } = useContext(FilterContext);

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
                    value={`$${min_price}`}
                    onChange={(event) =>
                        setMinPriceRange(
                            Number(event.currentTarget.value.split("$")[1])
                        )
                    }
                    data={startingEndingPrices.map((price) => `$${price}`)}
                />
                <Text>-</Text>
                <NativeSelect
                    value={`$${max_price}`}
                    onChange={(event) =>
                        setMaxPriceRange(
                            Number(event.currentTarget.value.split("$")[1])
                        )
                    }
                    data={startingEndingPrices.map((price) => `$${price}`)}
                />
            </div>
        </Popover>
    );
}

export default PropertyPriceRangeFilter;
