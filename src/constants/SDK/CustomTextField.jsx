import { TextField, styled } from "@mui/material";
import React from "react";

import { colors } from "../colors";

const CustomNameField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: colors.mainGreen,
    },
  },
}));

const NameField = ({ onChange, helperText, ...rest }) => {
  const ALPHA_REGEX = /^[a-zA-Z0-9@_\-.!#$%^&*()+=?/|\\[\]{},:;'"<>~`\s]+$/; 
  return (
    <CustomNameField
      sx={{
        "& .Mui-error": {
          color: "red",
        },
        "& .MuiFormHelperText-root": {
          color: "red",
        },
      }}
      {...rest}
      helperText={helperText}
      onChange={(e) => {
        const value = e.target.value;
        if (value !== "" && !ALPHA_REGEX.test(value)) {
          return;
        }
        if (onChange) {
          onChange(e);
        }
      }}
    />
  );
};

export const MemoizedNameField = React.memo(NameField);
