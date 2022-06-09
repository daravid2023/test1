import { Box } from "@mantine/core";
import { motion } from "framer-motion";
import useBoundingClientRect from "../../hooks/utils/useBoundingClientRect";
import { CarouselItem } from "./CarouselItem";

const MotionBox = motion(Box);

export function Carousel({ carousel, currentIndex }) {
  const [ref, { width }] = useBoundingClientRect();

  return (
    <Box
      ref={ref}
      sx={() => ({
        margin: "0 auto",
        overflowX: "hidden",
      })}
    >
      <MotionBox
        animate={{
          x: -(("undefined" == typeof width ? 0 : width) * currentIndex),
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        sx={() => ({
          display: "flex",
          flexWrap: "nowrap",
        })}
      >
        {carousel.map((content) => (
          <CarouselItem key={content.id} width={width} {...content} />
        ))}
      </MotionBox>
    </Box>
  );
}
