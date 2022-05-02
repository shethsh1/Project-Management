
import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AppBar, Typography, Box, Container, TablePagination, TableFooter, IconButton } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StarBorderIcon from '@mui/icons-material/StarBorder';

interface projectObject {
  id: number,
  title: string,
  description: string,
  priority: 'Critical' | 'High' | 'Medium' | 'Low',
  endDate: Date,
  status: 'Not Active' | 'In Progress' | 'Completed',
  progress: number,
  favorite: boolean,

}

const rows: projectObject[] = [
  {
    id: Math.floor(Math.random() * 7000000000),
    title: "Test",
    description: "here is description",
    priority: "Low",
    endDate: new Date(),
    status: "Not Active",
    progress: 100,
    favorite: true
  },
  {
    id: Math.floor(Math.random() * 7000000000),
    title: "Test2",
    description: "here is description",
    priority: "Low",
    endDate: new Date(),
    status: "Not Active",
    progress: 100,
    favorite: true
  },
  {
    id: Math.floor(Math.random() * 7000000000),
    title: "Test3",
    description: "here is description",
    priority: "Low",
    endDate: new Date(),
    status: "Not Active",
    progress: 100,
    favorite: true
  },
  {
    id: Math.floor(Math.random() * 7000000000),
    title: "Test4",
    description: "here is description",
    priority: "Low",
    endDate: new Date(),
    status: "Not Active",
    progress: 100,
    favorite: true
  },



];

export default function Home() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  return (
    <>

      <Typography variant="h4">
        Welcome back bob!
      </Typography>

      <Typography variant="caption" sx={{ opacity: 0.7 }}>
        4 projects, 3 completed, 0 in progress, 1 not active
      </Typography>




      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="right">Priority&nbsp;</TableCell>
              <TableCell align="right">End Date&nbsp;</TableCell>
              <TableCell align="right">Status&nbsp;</TableCell>
              <TableCell align="right">Progress&nbsp;</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <TableRow  sx={{width: 'auto'}} key={row.id}>

                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="right">
                  {row.priority}
                </TableCell>
                <TableCell align="right">
                  Today
                </TableCell>

                <TableCell align="right">
                  {row.status}
                </TableCell>

                <TableCell align="right">
                  {row.progress}
                </TableCell>

                <TableCell align="right">
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                </TableCell>




              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}

          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination

                colSpan={6}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
              />
            </TableRow>


          </TableFooter>
        </Table>
      </TableContainer>

    </>
  )
}

