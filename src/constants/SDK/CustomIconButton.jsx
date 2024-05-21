import { IconButton } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

const CustomIconButton = ({
  ariaLabel,
  handleClick,
  disabled,
  icon: IconComponent,
  className,
  style,
  sx,
  id,
  ...props
}) => {
  return (
    <IconButton
      aria-label={ariaLabel}
      onClick={handleClick}
      disabled={disabled}
      className={className}
      style={style}
      sx={sx}
      id={id}
      {...props}
    >
      {IconComponent && <IconComponent />}
    </IconButton>
  );
};

CustomIconButton.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  disabled: PropTypes.bool,
  icon: PropTypes.elementType,
  className: PropTypes.string,
  style: PropTypes.object,
  sx: PropTypes.object,
  id: PropTypes.string,
};

export const MemoizedIconButton = React.memo(CustomIconButton);
