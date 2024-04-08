import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import { colors } from "@/constants/colors";

const CustomDropdown = styled("div")(({ theme, backgroundColor }) => ({
  //border: `1px solid ${theme.palette.divider}`,
  //borderRadius: theme.shape.borderRadius,
  backgroundColor: backgroundColor,
  margin: theme.spacing(1),
  overflow: "hidden",
}));

const DropdownSection = ({
  heading,
  children,
  custPadding,
  childPadding,
  childMargin,
  backgroundColor,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CustomDropdown backgroundColor={backgroundColor}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent={"space-between"}
        padding={custPadding}
        mb={1}
      >
        <Typography
          fontSize={{ xs: "4vw", sm: "4vw", md: "2vw", lg: "2vw" }}
          color={colors?.primaryDark}
        >
          {heading}
        </Typography>
        <IconButton
          edge="end"
          aria-label="toggle dropdown"
          onClick={() => setIsOpen(!isOpen)}
        >
          <ExpandMoreIcon />
        </IconButton>
      </Box>
      <Divider variant="middle" sx={{ borderColor: "grey.700" }}></Divider>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <Box marginX={childMargin} mt={1} paddingY={childPadding}>
          {children}
        </Box>
      </Collapse>
    </CustomDropdown>
  );
};

export default DropdownSection;
