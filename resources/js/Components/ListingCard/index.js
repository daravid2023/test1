import ListingCardTitle from "./Title";
import ListingCardContent from "./Content";
import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  container: {
    width: "100%",
    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      width: "calc(100% - 10%)",
    },
  },
}));

function ListingCard({ children }) {
  const { classes } = useStyles();
  return <div className={classes.container}>{children}</div>;
}

ListingCard.Title = ListingCardTitle;
ListingCard.Content = ListingCardContent;

export default ListingCard;
