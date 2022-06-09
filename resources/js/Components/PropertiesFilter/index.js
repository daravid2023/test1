import { Grid } from "@mantine/core";

import PropertyApplyFilterButton from "./PropertyApplyFilterButton";
import PropertyLocationFilter from "./PropertyLocationFilter";
import PropertyPriceRangeFilter from "./PropertyPriceRangeFilter";
import PropertyTypeFilter from "./PropertyTypeFilter";

function PropertiesFilter() {
    return (
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
    );
}

export default PropertiesFilter;
