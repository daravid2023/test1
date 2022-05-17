import { Button, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {
    width: "100%",
    color: theme.colors.gray[6],

    "&:not(:disabled):active": {
      transform: "none",
    },
  },
}));

function DropDownButton({ UpIcon, DownIcon, content, opened, setOpened }) {
  const { classes } = useStyles();

  return (
    <Button
      variant="default"
      className={classes.root}
      rightIcon={opened ? <UpIcon size={18} /> : <DownIcon size={18} />}
      onClick={() => setOpened(!opened)}
    >
      {content}
    </Button>
  );
}

export default DropDownButton;
