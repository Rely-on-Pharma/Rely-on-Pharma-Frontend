import { TextField, styled } from '@mui/material'
import React from 'react'
import { colors } from '../colors'

const CustomInputField = styled(TextField)(({theme})=>({
    "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
          borderColor: colors.mainGreen,
        },
      },
}))
const CustomInput = ({id, className,fullWidth=true, multiline=false , name, value,label, helpertext, onChange,type, ...rest}) => {
  return (
    <CustomInputField 
        id={id}
        className={className}
        helperText={helpertext}
        name={name}
        fullWidth={fullWidth}
        label={label}
        type={type}
        multiline={multiline}
        sx={{
            "& .Mui-error": {
              color: "red",
            },
            "& .MuiFormHelperText-root": {
              color: "red",
            },
            margin:"0.2rem 0"
          }}
        {...rest}
        onChange={(e)=> {if (onChange) {
            onChange(e);
          }}}
    >


    </CustomInputField>
  )
}

export const MemoizedInputField = React.memo(CustomInput)