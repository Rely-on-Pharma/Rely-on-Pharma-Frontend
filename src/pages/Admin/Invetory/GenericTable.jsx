// ColumnGroupingTable.js

import React, { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  CircularProgress,
} from "@mui/material";
import { MemoizedIconButton } from "@/constants/SDK/CustomIconButton";
import EditIcon from "@mui/icons-material/Edit";
import CustomProductRow from "../Listing/CustomProductRow";

export default function InventoryTable({ columns, rows, onActionClick }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [newQuantity, setNewQuantity] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleActionClick = (product) => {
    setSelectedProduct(product);
    setNewQuantity(product.quantity);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleDialogSubmit = async () => {
    if (newQuantity <= selectedProduct.quantity) {
      alert("New quantity should be greater than the current quantity");
      return;
    }

    setLoading(true);
    await onActionClick(selectedProduct.id, newQuantity);
    setLoading(false);
    setDialogOpen(false);
  };

  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      // Render custom component for "name" column
                      if (column.id === "name") {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <CustomProductRow name={row?.name} image={row?.image_url?.length>0 ? row?.image_url[0] : "https://plus.unsplash.com/premium_photo-1661769750859-64b5f1539aa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdCUyMGltYWdlfGVufDB8fDB8fHww"}/>
                          </TableCell>
                        );
                      }
                      if (column.id === "action") {
                        // Render buttons for the "action" column
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <MemoizedIconButton
                              ariaLabel={"close"}
                              icon={EditIcon}
                              onClick={() => handleActionClick(row)}
                            />
                          </TableCell>
                        );
                      } else {
                        // Render other columns normally
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      }
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Update Inventory</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="New Quantity"
            type="number"
            fullWidth
            variant="standard"
            value={newQuantity}
            onChange={(e) => setNewQuantity(Number(e.target.value))}
          />
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              boxShadow: "none",
              borderRadius: 2,
            }}
            onClick={handleDialogClose}
            disabled={loading}
          >
            Cancel
          </Button>
          <Button
            sx={{
              boxShadow: "none",
              borderRadius: 2,
            }}
            onClick={handleDialogSubmit}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : "Update"}
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}
