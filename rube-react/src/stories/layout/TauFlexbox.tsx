import { Box, SxProps } from "@mui/material";
import { PropsWithChildren } from "react";

export type TauFlexboxProps = {
  sx?: SxProps;
  centered?: boolean;
  right?: boolean;
  direction?: "row" | "column";
  gap?: number;
  padding?: number;
};

export const TauFlexbox = ({
  direction = "row",
  ...props
}: PropsWithChildren<TauFlexboxProps>) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: direction,
        ...(direction === "row" && { alignItems: "center" }),
        ...(direction === "column" && { justifyContent: "center" }),
        ...(direction === "row" &&
          props.centered && { justifyContent: "center" }),
        ...(direction === "row" &&
          props.right && { justifyContent: "flex-end" }),
        ...(direction === "column" &&
          props.centered && { alignItems: "center" }),
        ...(direction === "column" &&
          props.right && { alignItems: "flex-end" }),
        ...(props.gap !== undefined && { gap: props.gap }),
        flexGrow: 1,
        padding: props.padding !== undefined ? props.padding : 1,
        ...props.sx,
      }}
    >
      {props.children}
    </Box>
  );
};

export default TauFlexbox;
