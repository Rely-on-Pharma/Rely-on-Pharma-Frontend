import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import React from "react";

const AutoCompleteSelectDropDown = ({
  form,
  id,
  name,
  onChange,
  required,
  inputValue,
  value,
  label,
  defaultValue,
  onInputChange,
  helperText,
  options,
  title,
  ...rest
}) => {
  return (
    <Autocomplete
      value={value || defaultValue}
      onChange={onChange}
      inputValue={inputValue}
      onInputChange={onInputChange}
      fullWidth={true}
      label={label}
      id={id}
      options={options}
      renderInput={(params) => <TextField {...params} label="Select Brand" />}
    />
  );
};

export const MemoizedAutoSelectDropDown = React.memo(
  AutoCompleteSelectDropDown
);
