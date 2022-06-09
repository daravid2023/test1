import { Box } from "@mantine/core";

export function CarouselItem({ id, desc, width }) {
    return (
        <Box
            sx={{
                flexBasis: width,
                flexShrink: 0,
            }}
        >
            <img src="/static/brand/hero.jpg" alt="hero" />
        </Box>
    );
}
