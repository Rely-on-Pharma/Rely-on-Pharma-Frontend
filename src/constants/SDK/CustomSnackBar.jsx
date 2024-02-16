"use client"
import { Alert, Snackbar } from "@mui/material";
import React, { useContext } from "react";

import AppContext from "../context/context";
const SnackBar = () => {
  const state = useContext(AppContext);
 // Check if state or state.snackBar is undefined
 if (!state || !state.snackBar) {
  return null;
}
  const {snackBar, hideSnackbar} = state;
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
        open={snackBar.open}
        autoHideDuration={3000}
        message={snackBar.message}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={snackBar.severity}
          style={{ width: "100%" }}
        >
          {snackBar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export const MemoizedSnackBar = React.memo(SnackBar);
