import {  MenuItem, Select } from "@mui/material";
import React from "react";


import { colors } from "../colors";
import { getSelectOptions } from "./selectFieldsOptions";

const SelectDropDown = ({
  form, //formik form
  id, 
  labelId, 
  name,
  onChange,
  label,
  required, //true or false
  value,
  title, // placeholder
  optionsData, // options for dropdown
  defaultValue,
  ...rest
}) => {


  return (
    <>
    <Select
      // error={!!checkError(name, form)}
      labelId={labelId}
      id={id}
      name={name}
      value={value}
      defaultValue={"none"}
      onChange={onChange}
      label={label}
      required={required}
      fullWidth={true}
      sx={{
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: colors.mainGreen,
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: colors.mainGreen,
        },
        margin:"0.2rem 0"
      }}
      MenuProps={{
        PaperProps: {
          sx: {
            "& .MuiMenuItem-root": {
              maxHeight: "fix-content",
            },
          },
        },
      }}
      {...rest}
      >
      <MenuItem value={"none"} disabled={true} sx={{ fontWeight: 600 }}>
        {title}
      </MenuItem>
      {getSelectOptions(optionsData)}
    </Select>
      </>
  );
};

export const MemoizedSelectDropDown = React.memo(SelectDropDown);
