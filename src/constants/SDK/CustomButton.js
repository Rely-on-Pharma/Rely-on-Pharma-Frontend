
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

const CustomButton = ({
  type,
  content,
  style,
  handleClick,
  disabled,
  loading,
  className,
  sx,
  id,
  animated,
  ...props
}) => {
  return (
    <Button
      id={id}
      type={type}
      loading={loading}
      variant={"outlined"}
      // eslint-disable-next-line
      children={content}
      sx={sx}
      style={style}
      onClick={handleClick}
      className={className}
      disabled={disabled}
      {...props}
    >
      <div id={id} className={animated && "animate-charcter"}>
        {content}
      </div>
    </Button>
  );
};

CustomButton.propTypes = {
  animated: PropTypes.bool,
};

export const MemoizedButton = React.memo(CustomButton);
