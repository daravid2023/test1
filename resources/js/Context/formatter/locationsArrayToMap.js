export default function locationsArrayToMapAble(locationsArray) {
    return locationsArray.map(function (location) {
        return [location, true];
    });
}
