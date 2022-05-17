import produce from "immer";
import { Checkbox, createStyles, Input, Popover, Stack } from "@mantine/core";
import { useEffect, useMemo, useState } from "react";

const useStyles = createStyles((theme) => ({
  input__container: {
    position: "relative",
  },

  input__label_placeholder: {
    color: theme.colors.gray[6],
    fontWeight: "600",
    fontFamily: theme.other.fontFamilySecondary,
    fontSize: theme.fontSizes.sm,
    lineHeight: 1,
    display: "block",
    transformOrigin: "left top",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "calc(100% - 24px)",
    position: "absolute",
    left: "0px",
    top: "0px",
    transform: "translate(14px, 12px)",
    pointerEvents: "none",
  },
}));

function PropertyLocationFilter() {
  const { classes } = useStyles();
  const [locations, setLocations] = useState(() => [
    {
      name: "Phnom Penh",
      isChecked: false,
    },
    {
      name: "Battambang",
      isChecked: false,
    },
    {
      name: "Siam Reap",
      isChecked: false,
    },
    {
      name: "Sihanoukville",
      isChecked: false,
    },
  ]);

  const [isNoLocationChosen, setIsNoLocationChosen] = useState(true);

  const [opened, setOpened] = useState(false);

  const handleLocationCheck = (e, index) => {
    setLocations(
      produce((draft) => {
        draft[index].isChecked = e.target.checked;
      })
    );
  };

  useEffect(() => {
    for (let i = 0; i < locations.length; i++) {
      if (locations[i].isChecked) {
        return setIsNoLocationChosen(false);
      }
    }
    return setIsNoLocationChosen(true);
  }, [locations, setIsNoLocationChosen]);

  const inputValue = useMemo(() => {
    const checkedLocations = locations.filter((location) => location.isChecked);
    return checkedLocations.map((location) => location.name).join(", ");
  }, [locations]);

  return (
    <>
      <Popover
        sx={{
          display: "block",
        }}
        width={300}
        opened={opened}
        onClose={() => setOpened(false)}
        position="bottom"
        placement="start"
        withArrow
        trapFocus={false}
        closeOnEscape={false}
        transition="pop-bottom-right"
        target={
          <div className={classes.input__container}>
            <Input
              value={inputValue}
              readOnly
              onFocusCapture={() => setOpened(true)}
            />
            {isNoLocationChosen && (
              <span className={classes.input__label_placeholder}>
                Property Location
              </span>
            )}
          </div>
        }
      >
        <Stack spacing="xs">
          {locations.map((location, index) => (
            <Checkbox
              key={index}
              checked={location.isChecked}
              label={location.name}
              onChange={(e) => handleLocationCheck(e, index)}
            />
          ))}
        </Stack>
      </Popover>
    </>
  );
}

export default PropertyLocationFilter;
