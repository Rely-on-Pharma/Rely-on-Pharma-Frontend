import { Alert, Snackbar } from "@mui/material";
import React, { useContext } from "react";

import AppContext from "../context/context";
const SnackBar = () => {
  const state = useContext(AppContext);

  const { hideSnackbar } = useContext(AppContext);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    hideSnackbar();
  };

  return (
    <>
      <Snackbar
        id="lead_created"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={state.snackBar.open}
        autoHideDuration={3000}
        message={state.snackBar.message}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={state.snackBar.severity}
          style={{ width: "100%" }}
        >
          {state.snackBar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export const MemoizedSnackBar = React.memo(SnackBar);
