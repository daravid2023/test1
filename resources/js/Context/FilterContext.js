import {
    createContext,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from "react";
import { usePage } from "@inertiajs/inertia-react";
import _ from "lodash";
import produce from "immer";
import locationsArrayToMapAble from "./formatter/locationsArrayToMap";

export const FilterContext = createContext();

export const startingEndingPrices = [
    20, 40, 60, 80, 100, 125, 150, 175, 200, 250, 300, 400, 500, 600, 700, 800,
    900, 1000, 1500, 2000,
].map((price) => price * 1000);

function FilterContextProvider({ children }) {
    const { filters } = usePage().props;

    const [data, setData] = useState({
        locations:
            (filters?.locations &&
                new Map(locationsArrayToMapAble(filters.locations))) ||
            new Map(),
        property_type: filters?.property_type || {
            residential: {},
            commercial: {},
        },
        min_price: filters?.min_price || startingEndingPrices[0],
        max_price: filters?.max_price || startingEndingPrices[7],
    });

    const toggleLocation = useCallback(
        (name) => {
            if (data.locations.has(name)) {
                return setData(
                    produce((draft) => {
                        draft.locations.delete(name);
                    })
                );
            }
            setData(
                produce((draft) => {
                    draft.locations.set(name, true);
                })
            );
        },
        [data.locations]
    );

    const isNoLocationChosen = useMemo(() => {
        return data.locations.size === 0;
    }, [data.locations]);

    const setMinPriceRange = useCallback((minPrice) => {
        setData((prev) => ({
            ...prev,
            min_price: minPrice,
        }));
    }, []);

    const setMaxPriceRange = useCallback((maxPrice) => {
        setData((prev) => ({
            ...prev,
            max_price: maxPrice,
        }));
    }, []);

    const toggleResidentialProperty = useCallback(
        (propertyType) => {
            if (!_.has(data.property_type.residential, propertyType)) {
                return setData(
                    produce((draft) => {
                        draft.property_type.residential[propertyType] =
                            propertyType;
                    })
                );
            }
            setData(
                produce((draft) => {
                    draft.property_type.residential = _.omitBy(
                        draft.property_type.residential,
                        (val) => val == propertyType
                    );
                })
            );
        },
        [data.property_type.residential, setData]
    );

    const toggleCommercialProperty = useCallback(
        (propertyType) => {
            if (!_.has(data.property_type.commercial, propertyType)) {
                return setData(
                    produce((draft) => {
                        draft.property_type.commercial[propertyType] =
                            propertyType;
                    })
                );
            }
            setData(
                produce((draft) => {
                    draft.property_type.commercial = _.omitBy(
                        draft.property_type.commercial,
                        (val) => val == propertyType
                    );
                })
            );
        },
        [data.property_type.commercial, setData]
    );

    useEffect(() => {
        if (Number(data.max_price) < Number(data.min_price)) {
            setMinPriceRange(startingEndingPrices[0]);
        }
    }, [data.min_price, data.max_price, setMinPriceRange]);

    const context = {
        data,
        isNoLocationChosen,
        toggleLocation,
        setMinPriceRange,
        setMaxPriceRange,
        toggleResidentialProperty,
        toggleCommercialProperty,
    };

    return (
        <FilterContext.Provider value={context}>
            {children}
        </FilterContext.Provider>
    );
}

export default FilterContextProvider;
