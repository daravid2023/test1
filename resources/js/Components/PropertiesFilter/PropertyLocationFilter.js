import { Checkbox, createStyles, Input, Popover, Stack } from "@mantine/core";
import { useContext, useMemo, useState } from "react";
import { FilterContext } from "../../Context/FilterContext";
import { LOCATIONS } from "../../Enum";

const useStyles = createStyles((theme) => ({
    input__container: {
        position: "relative",
    },

    input__label_placeholder: {
        color: theme.colors.gray[6],
        fontWeight: "600",
        fontFamily: theme.other.fontFamilySecondary,
        fontSize: theme.fontSizes.sm,
        lineHeight: 1,
        display: "block",
        transformOrigin: "left top",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        maxWidth: "calc(100% - 24px)",
        position: "absolute",
        left: "0px",
        top: "0px",
        transform: "translate(14px, 12px)",
        pointerEvents: "none",
    },
}));

function PropertyLocationFilter() {
    const { classes } = useStyles();

    const {
        data: { locations },
        toggleLocation,
        isNoLocationChosen,
    } = useContext(FilterContext);

    const [opened, setOpened] = useState(false);

    const inputValue = useMemo(() => {
        return Array.from(locations.keys())
            .map((location) => location)
            .join(", ");
    }, [locations]);

    return (
        <>
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
                    <div className={classes.input__container}>
                        <Input
                            value={inputValue}
                            readOnly
                            onFocusCapture={() => setOpened(true)}
                        />
                        {isNoLocationChosen && (
                            <span className={classes.input__label_placeholder}>
                                Property Location
                            </span>
                        )}
                    </div>
                }
            >
                <Stack spacing="xs">
                    {LOCATIONS.map((location, index) => (
                        <Checkbox
                            key={index}
                            checked={locations.has(location.name)}
                            label={location.name}
                            onChange={() => toggleLocation(location.name)}
                        />
                    ))}
                </Stack>
            </Popover>
        </>
    );
}

export default PropertyLocationFilter;
