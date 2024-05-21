import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import React, { useState } from "react";
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
import { MemoizedIconButton } from "@/constants/SDK/CustomIconButton";
import EditIcon from "@mui/icons-material/Edit";
import CustomFeedbackRow from "./FeedBackRow";

const CustomFeedbackTable = styled(Box)(({ theme }) => ({
  ".bold-title": {
    fontSize: "1.2rem",
    fontWeight: "600",
  },
  ".btn": {
    background: colors?.MonochromeDark,
    borderRadius: "8px",
  },
}));

export default function FeedbackTable({ columns, rows }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [selectedOrder, setSelectedOrder] = useState(null); // State to track the selected order
  const [openDialog, setOpenDialog] = useState(false); // State to control dialog visibility
  const [trackId, setTrackId] = useState("");

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

  if (!Array.isArray(rows)) {
    console.error("Rows is not an array:", rows);
    return null;
  }

  return (
    <CustomFeedbackTable>
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
                      //role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                      //onClick={() => handleClickTableRow(row)}
                      style={{ cursor: "pointer" }}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        // Render custom component for "name" column
                        // Render other columns normally
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
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
    </CustomFeedbackTable>
  );
}
