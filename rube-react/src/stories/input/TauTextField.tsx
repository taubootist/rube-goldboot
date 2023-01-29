import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { IconButton, InputAdornment, SxProps } from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";
import { NumericFormat, PatternFormat } from "react-number-format";

export interface TauTextFieldProps {
  id?: string;
  label?: string;
  helperText?: string;
  placeholder?: string;
  type?: string;
  currency?: boolean;
  phone?: boolean;
  variant?: "outlined" | "filled" | "standard";
  width?: number;
  fullWidth?: boolean;
  size?: "medium" | "small";
  sx?: SxProps;
  isx?: SxProps;
  maxLength?: number;
  inputComponent?: any;
  InputProps?: any;
  value?: string;
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  multiline?: boolean;
  rows?: number;
  maxRows?: number;
  useCheck?: boolean;
}

interface CustomProps {
  onChange: (event: { target: { id: string; value: string } }) => void;
  id: string;
}

const CurrencyTextField = React.forwardRef<HTMLElement, CustomProps>(
  function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props;

    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              id: props.id,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        valueIsNumericString
        prefix="$"
      />
    );
  }
);

const PhoneTextField = React.forwardRef<HTMLElement, CustomProps>(
  function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props;

    return (
      <PatternFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              id: props.id,
              value: values.value,
            },
          });
        }}
        format="(###) ###-####"
        mask="_"
      />
    );
  }
);

export const TauTextField = ({
  variant = "standard",
  type = "text",
  ...props
}: TauTextFieldProps) => {
  const [checkVisible, checkVisibleTo] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // if (props.useCheck) checkVisibleTo(true);
    if (props.onChange) props.onChange(event);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    // if (props.useCheck) checkVisibleTo(false);
    if (props.onBlur) props.onBlur(event);
  };

  return (
    <>
      <TextField
        id={props.id}
        variant={variant}
        label={props?.label}
        placeholder={props?.placeholder}
        fullWidth={props?.fullWidth}
        multiline={props?.multiline}
        rows={props?.rows}
        maxRows={props?.maxRows}
        type={type}
        InputProps={{
          ...(props.currency && { inputComponent: CurrencyTextField as any }),
          ...(props.phone && { inputComponent: PhoneTextField as any }),
          readOnly: props.readOnly,
          sx: {
            ...props.isx,
          },
          endAdornment: (
            <>
              {checkVisible && (
                <InputAdornment position="end">
                  <IconButton
                    sx={{ paddingRight: 1.5 }}
                    aria-label="confirm-value"
                    onClick={() => checkVisibleTo(false)}
                    edge="end"
                  >
                    <CheckCircleIcon color="primary" fontSize="small" />
                  </IconButton>
                </InputAdornment>
              )}
            </>
          ),
          ...props.InputProps,
        }}
        inputProps={{
          maxLength: props?.maxLength,
        }}
        size={props.size}
        sx={{
          ...(props.width && { width: `${props.width}px` }),
          height: props.label ? "61px" : "49px",
          ...props.sx,
        }}
        value={props.value}
        disabled={props.disabled}
        error={props?.error}
        helperText={props?.helperText}
        onBlur={handleBlur}
        onChange={handleChange}
      />
    </>
  );
};
