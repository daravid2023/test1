import { createStyles, Text, Title, Box, useMantineTheme } from "@mantine/core";
import { ArrowLeft, ArrowRight, CurrentLocation } from "tabler-icons-react";
import { useArrayCarousel } from "../../hooks/carousel/useArrayCarousel";
import { Carousel } from "./Carousel";

const useStyles = createStyles((theme) => ({
  container__main: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    cursor: "pointer",
    boxShadow: theme.shadows.sm,

    [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
      width: "calc(100% - 30%)",
    },
  },

  container__title: {
    padding: "0.368rem",
    backgroundColor: theme.colors.gray[8],
    color: theme.white,
  },

  container__content: {
    display: "flex",
    flexDirection: "column",

    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: "row",
    },
  },

  container__carousel: {
    position: "relative",
    width: "100%",
    img: {
      width: "100%",
    },
    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      width: 300,
    },
  },

  container__description: {
    margin: "1.111rem",
    color: theme.colors.gray[7],
    flex: 2,
  },

  details: {
    display: "flex",
    gap: 10,
  },
}));

const INITIAL_DATA = [
  {
    id: 1,
    desc: "yikes",
  },
  {
    id: 2,
    desc: "chips",
  },
  {
    id: 3,
    desc: "monke",
  },
  {
    id: 4,
    desc: "dong",
  },
];

function Listing() {
  const theme = useMantineTheme();
  const { next, prev, hasNext, hasPrev, reset, ...restCarousel } =
    useArrayCarousel(INITIAL_DATA);

  const { classes } = useStyles();
  return (
    <div className={classes.container__main}>
      <div className={classes.container__title}>
        <Title order={4}>Okide; The royal condonium</Title>
      </div>

      <div className={classes.container__content}>
        <div className={classes.container__carousel}>
          <Box
            sx={{
              position: "absolute",
              left: 0,
              zIndex: 1,
              top: "50%",
              transform: "translate(50%,-50%)",
            }}
          >
            <div onClick={prev}>
              <ArrowLeft
                color={hasPrev ? theme.colors.gray[0] : theme.colors.gray[5]}
              />
            </div>
          </Box>
          <Box
            sx={{
              position: "absolute",
              right: 0,
              zIndex: 1,
              top: "50%",
              transform: "translate(-50%,-50%)",
            }}
          >
            <div onClick={next}>
              <ArrowRight
                color={hasNext ? theme.colors.gray[0] : theme.colors.gray[5]}
              />
            </div>
          </Box>
          <Carousel {...restCarousel} />
        </div>
        <div className={classes.container__description}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Title order={5}>Project A</Title>
            <Title order={5}>$73,000</Title>
          </Box>
          <Box
            sx={{
              marginTop: "1.111rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className={classes.details}>
              <CurrentLocation />
              <Text size="sm">Preaek Aeng, Chbar Ampov, Phnom Penh</Text>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Listing;
