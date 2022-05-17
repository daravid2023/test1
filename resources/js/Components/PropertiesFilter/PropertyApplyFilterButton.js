import { Button, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

function PropertyApplyFilterButton() {
  const { classes } = useStyles();
  return (
    <Button
      className={classes.root}
      variant="gradient"
      gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
    >
      Apply Filter
    </Button>
  );
}

export default PropertyApplyFilterButton;
