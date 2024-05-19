// ColumnGroupingTable.js

import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { MemoizedIconButton } from "@/constants/SDK/CustomIconButton";
import Link from "next/link"
import CustomProductROw from "./CustomProductROw";
import { Visibility } from "@mui/icons-material";
export default function ListingTable({ columns, rows }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
          <TableRow>
              <TableCell align="center" colSpan={5}>
                Country
              </TableCell>
             
            </TableRow>
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
              .map((row, ind) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={ind}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      // Render custom component for "name" column
                      if (column.id === "name") {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <CustomProductROw name={row?.name} image={"https://loremflickr.com/640/480?lock=6586178289532928"}/>
                          </TableCell>
                        );
                      } if (column.id === "action") {
                        // Render buttons for the "action" column
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <Link href={`/admin/product/${row?.id}`}>

                            <MemoizedIconButton ariaLabel={"close"} icon={Visibility}/>                            
                            </Link>
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
  );
}
