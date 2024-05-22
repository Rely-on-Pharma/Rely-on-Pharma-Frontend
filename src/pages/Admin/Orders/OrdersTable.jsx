// ColumnGroupingTable.js

import { MemoizedIconButton } from "@/constants/SDK/CustomIconButton";
import EditIcon from "@mui/icons-material/Edit";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import React, { useContext, useState } from "react";
import CustomOrderRow from "./CustomOrderRow";
import {
  Dialog,
  DialogTitle,
  Box,
  DialogContent,
  DialogActions,
  Typography,
  styled,
} from "@mui/material";
import { MemoizedInputField } from "@/constants/SDK/customInput";
import { MemoizedButton } from "@/constants/SDK/CustomButton";
import { colors } from "@/constants/colors";
import AddressComponent from "./CustomAddress";
import AppContext from "@/constants/context/context";

const CustomOrdersTable = styled(Box)(({ theme }) => ({
  ".bold-title": {
    fontSize: "1.2rem",
    fontWeight: "600",
  },
  ".btn": {
    background: colors?.MonochromeDark,
    borderRadius: "8px",
  },
}));
export default function OrdersTable({ columns, rows }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [selectedOrder, setSelectedOrder] = useState(null); // State to track the selected order
  const [openDialog, setOpenDialog] = useState(false); // State to control dialog visibility
  const [trackId, setTrackId] = useState("");
  const {showSnackbar} = useContext(AppContext)
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // Function to handle click event on TableRow and open the dialog
  const handleClickTableRow = (order) => {
    setSelectedOrder(order);
    setOpenDialog(true);
  };

  // Function to close the dialog
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleUpdateOrder = async () => {
    if (!selectedOrder) return;

    const orderId = selectedOrder?.id;
    const url = `http://localhost:8000/orders/${parseInt(orderId)}?tracking_id=${parseInt(trackId)}`;
    const token = localStorage.getItem("token")?.slice(1, -1);
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: headers,
      });

      if (response.ok) {
       showSnackbar("success", "success")
        console.log('Order updated successfully');
       
        setOpenDialog(false);
      } else {
        showSnackbar("Failed to update order", "error")
        console.error('Failed to update order');
      }
    } catch (error) {
      showSnackbar("Error updating order:", "error")
      console.error('Error updating order:', error);
    }
  };
  return (
    <CustomOrdersTable>
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
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                      onClick={() => handleClickTableRow(row)}
                      style={{ cursor: "pointer" }}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        // Render custom component for "name" column
                        if (column.id === "products") {
                          return (
                            <TableCell key={column.id} align={column.align}>
                              <CustomOrderRow data={row?.products} />
                            </TableCell>
                          );
                        } else if (column?.id === "address") {
                          return (
                            <TableCell key={column?.id} align={column?.align}>
                              <AddressComponent address={row?.address} />
                            </TableCell>
                          );
                        } else if (column.id === "action") {
                          // Render buttons for the "action" column
                          return (
                            <TableCell key={column.id} align={column.align}>
                              <MemoizedIconButton
                                ariaLabel={"close"}
                                icon={EditIcon}
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
      </Paper>

      {/* Dialog to display order details */}
      <Dialog
        PaperProps={{
          sx: { borderRadius: "0.5em", margin: "16px", padding: "0.4rem" },
        }}
        open={openDialog}
        onClose={handleCloseDialog}
      >
        {selectedOrder && (
          <>
            <DialogTitle style={{ fontWeight: "600" }}>
              Order - {selectedOrder?.orderId}
            </DialogTitle>
            <DialogContent>
              <Typography>
                Tracking ID :-
                {selectedOrder?.tracking_id && selectedOrder?.tracking_id}
              </Typography>
              <MemoizedInputField
                type={"text"}
                label={"Tracking Id"}
                placeholder="Enter Tracking Id"
                style={{ margin: "1rem 0" }}
                value={trackId}
                onChange={(e) => setTrackId(e?.target.value)}
              />

              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "2rem",
                }}
                sx={{ flexDirection: { xs: "column", md: "row" } }}
              >
                <Box>
                  <Typography className="bold-title">
                    Product Details
                  </Typography>
                  <Typography>
                    Quantity {selectedOrder?.products?.length}
                  </Typography>
                  <CustomOrderRow data={selectedOrder?.products} />
                </Box>
                <Box>
                  <Typography className="bold-title">
                    Delivery Address
                  </Typography>
                 <AddressComponent address={selectedOrder?.address}/>
                </Box>
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: "1rem 0",
                }}
              >
                <Typography className="bold-title">
                  Amount :- Rs.{selectedOrder?.final_amount}/-
                </Typography>
                <MemoizedButton
                  style={{
                    background: colors?.MonochromeDark,
                    borderRadius: "8px",
                  }}
                  className={"btn"}
                  content={"update order"}
                  handleClick={handleUpdateOrder}
                />
              </Box>
            </DialogContent>
          </>
        )}
      </Dialog>
    </CustomOrdersTable>
  );
}
