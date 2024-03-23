import { colors } from "@/constants/colors";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  Divider,
  Drawer,
  FormControlLabel,
  FormGroup,
  IconButton,
  Radio,
  RadioGroup,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MemoizedButton } from "@/constants/SDK/CustomButton";
const CustomFilterDrawer = styled(Box)(({theme})=>({
  ".filterBtn":{
    display: "block", width: "100%", borderRadius: "4px", padding: "8px", boxShadow: "none"
  }
}))
const drawerWidth = 300;
const filterOptions = [
  {
    name: "category",
    label: "Category",
    type: "radio",
    choices: ["Adult", "Child", "All"],
    default: "All",
  },
  {
    name: "company",
    label: "Company",
    type: "checkbox",
    choices: ["Company A", "Company B", "Company C"],
    default: [],
  },
  {
    name: "price",
    label: "Sort by Price",
    type: "radio",
    choices: ["Low to High", "High to Low", "None"],
    default: "None",
  },
];

const FilterDrawer = (props) => {
  const { window, mobileOpen, drawerClose,  onApplyFilters, onResetFilters } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const initialFilters = {};
  filterOptions.forEach((option) => {
    initialFilters[option.name] = option.default;
  });

  const [filters, setFilters] = useState(initialFilters);

  const handleFilterChange = (event, option) => {
    const value = event.target.value;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [option.name]: value,
    }));
  };

  const handleCheckboxChange = (event, option) => {
    const value = event.target.name;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [option.name]: prevFilters[option.name].includes(value)
        ? prevFilters[option.name].filter((item) => item !== value)
        : [...prevFilters[option.name], value],
    }));
  };

  const handleApplyFilters = () => {
    console.log("yash", filters)
    // onApplyFilters(filters);
    drawerClose();
  };

  const handleReset = () => {
    setFilters(initialFilters);
    console.log("yash", filters)
    // onResetFilters();
  };

  return (
    <CustomFilterDrawer>
    <Drawer
      container={container}
      variant="persistent"
      open={mobileOpen}
      anchor="right"
      onClose={drawerClose}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: "block" },
        p: 4,
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
        },
        background: colors?.background,
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Box style={{ display: "flex", alignItems: "center", padding:"4px" }}>
          <Typography style={{fontWeight:"600", letterSpacing:"1px", fontSize:"16px"}} sx={{ flexGrow: "1" }}>Filter By</Typography>
          <IconButton onClick={drawerClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <Box>
          {filterOptions.map((option) => (
            <Accordion key={option.name} defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel-${option.name}-content`}
                id={`panel-${option.name}-header`}
              >
                <Typography style={{fontWeight:"600", letterSpacing:"1px", fontSize:"16px"}}>{option.label}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {option.type === "radio" ? (
                  <RadioGroup
                    aria-labelledby={`radio-group-${option.name}`}
                    name={`radio-group-${option.name}`}
                    value={filters[option.name]}
                    onChange={(event) => handleFilterChange(event, option)}
                  >
                    {option.choices.map((choice) => (
                      <FormControlLabel
                        key={choice}
                        value={choice}
                        control={<Radio />}
                        label={choice}
                      />
                    ))}
                  </RadioGroup>
                ) : option.type === "checkbox" ? (
                  <FormGroup>
                    {option.choices.map((choice) => (
                      <FormControlLabel
                        key={choice}
                        control={
                          <Checkbox
                            checked={filters[option.name].includes(choice)}
                            onChange={(event) => handleCheckboxChange(event, option)}
                            name={choice}
                          />
                        }
                        label={choice}
                      />
                    ))}
                  </FormGroup>
                ) : null}
              </AccordionDetails>
            </Accordion>
          ))}
          <MemoizedButton
            onClick={handleApplyFilters} 
            className={"filterBtn"}
            content={"Apply Filters"}
          />
          <MemoizedButton
            onClick={handleReset}
            className={"filterBtn"}
            content={"Reset"}
          />
        </Box>
      </Box>
    </Drawer>
    </CustomFilterDrawer>
  );
};

export default FilterDrawer;
