import { useContext, useState } from "react";

import DropdownButton from "@/Components/DropdownButton";
import { ArrowDown, ArrowUp } from "tabler-icons-react";
import { Button, createStyles, Popover, Tabs } from "@mantine/core";

import { FilterContext } from "../../Context/FilterContext";
import { commercialTypes, residentialTypes } from "../../Enum";

const useStyles = createStyles(() => ({
    property_types_container: {
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 8,
    },
}));

function PropertyTypeFilter() {
    const { classes } = useStyles();
    const [opened, setOpened] = useState(false);
    const [activeTab, setActiveTab] = useState(0);

    const {
        data: { property_type },
        toggleResidentialProperty,
        toggleCommercialProperty,
    } = useContext(FilterContext);

    return (
        <>
            <Popover
                sx={{
                    display: "block",
                }}
                width={350}
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
                        content="Property Type"
                        opened={opened}
                        setOpened={setOpened}
                    />
                }
            >
                <Tabs grow active={activeTab} onTabChange={setActiveTab}>
                    <Tabs.Tab label="Residential">
                        <div className={classes.property_types_container}>
                            {residentialTypes.map((type) => (
                                <Button
                                    onClick={() =>
                                        toggleResidentialProperty(type)
                                    }
                                    key={type}
                                    compact
                                    color={
                                        property_type?.residential?.[type]
                                            ? "indigo"
                                            : "blue"
                                    }
                                >
                                    {type}
                                </Button>
                            ))}
                        </div>
                    </Tabs.Tab>
                    <Tabs.Tab label="Commercial">
                        <div className={classes.property_types_container}>
                            {commercialTypes.map((type) => (
                                <Button
                                    onClick={() =>
                                        toggleCommercialProperty(type)
                                    }
                                    key={type}
                                    compact
                                    color={
                                        property_type?.commercial?.[type]
                                            ? "indigo"
                                            : "blue"
                                    }
                                >
                                    {type}
                                </Button>
                            ))}
                        </div>
                    </Tabs.Tab>
                </Tabs>
            </Popover>
        </>
    );
}

export default PropertyTypeFilter;
