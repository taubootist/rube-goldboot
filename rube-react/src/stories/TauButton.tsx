import { SxProps } from "@mui/material";
import Button from "@mui/material/Button";
import { FormikProps } from "formik";

export interface TauButtonProps {
  sx?: SxProps;
  disabled?: boolean;
  formikProps?: FormikProps<any>;
  label: string;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  type?: "button" | "submit" | "reset";
  variant?: "contained" | "outlined" | "text";
  component?: any;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  startIcon?: any;
  // onChange?: any;
}

export const borderRadius = (size: "small" | "medium" | "large") =>
  size === "large" ? "12px" : size === "medium" ? "8px" : "8px";

export const TauButton = ({
  color = "primary",
  variant = "contained",
  size = "medium",
  type = "button",
  ...props
}: TauButtonProps) => {
  return (
    <Button
      color={color}
      disabled={
        props.formikProps ? props.formikProps.isSubmitting : props.disabled
      }
      size={size}
      sx={{
        borderRadius: borderRadius(size),
        ...props.sx,
      }}
      onClick={props.onClick}
      type={type}
      variant={variant}
      component={props.component}
      startIcon={props.startIcon}
      // accept={props.accept}
      // onChange={props.onChange}
    >
      {props.label}
    </Button>
  );
};

export default TauButton;
