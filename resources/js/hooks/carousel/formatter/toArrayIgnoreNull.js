export default function toArrayIgnoreNull(data) {
    const unformatted_image_array = [
        data.image_one,
        data.image_two,
        data.image_three,
        data.image_four,
        data.image_five,
    ];
    return unformatted_image_array.filter((image) => {
        if (typeof image !== "null") return image;
    });
}
