import { createStyles, Title } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  container__title: {
    padding: ".475rem",
    backgroundColor: theme.colors.gray[7],
  },
}));

function ListingCardTitle({ title }) {
  const { classes } = useStyles();
  return (
    <div className={classes.container__title}>
      <Title
        sx={(theme) => ({
          color: theme.white,
        })}
        order={4}
      >
        {title}
      </Title>
    </div>
  );
}

export default ListingCardTitle;
