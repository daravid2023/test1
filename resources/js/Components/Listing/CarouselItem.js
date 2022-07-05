import { Box, Image } from "@mantine/core";

export function CarouselItem({ width, image_url }) {
    return (
        <Box
            sx={{
                flexBasis: width,
                flexShrink: 0,
            }}
        >
            <img
                style={{
                    height: "100%",
                }}
                src={
                    (image_url && `storage/${image_url.split("public/")[1]}`) ||
                    "/static/brand/hero.jpg"
                }
                alt="carousel image"
            />
        </Box>
    );
}
