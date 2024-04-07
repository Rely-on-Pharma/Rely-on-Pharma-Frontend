import { MenuItem } from "@mui/material";

export const getSelectOptions = (option) => {
  return option?.map((item) => (
    <MenuItem
      key={item.label}
      value={item.value}
      disabled={item.value === "none"}
    //   style={{
    //     fontWeight: item.value === "none" ? 900 : "",
    //     color: item.value === "none" ? "black" : "",
    //     opacity: item.value === "none" ? "unset" : "1",
    //   }}
    >
      {item.label}
    </MenuItem>
  ));
};
