
import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { 
  Typography, 
  TablePagination, 
  TableFooter, 
  IconButton, 
  Box, 
  Button 
} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useAppSelector } from '../../redux/hooks'
import type { user } from '../../redux/slices/authSlice'
import CreateModalForm from '../../components/project/CreateModalForm'

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
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const user = useAppSelector(state => state.auth.user) as user

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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>

      <CreateModalForm open={open} handleClose={handleClose}/>

      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Typography variant="h4">
          Welcome back {user.username}
        </Typography>

        <Button onClick={handleClickOpen}>Create new project</Button>
        



      </Box>



      <Typography variant="caption" sx={{ opacity: 0.7}}>
        4 projects, 3 completed, 0 in progress, 1 not active
      </Typography>




      <TableContainer component={Paper} sx={{mt: 5}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox"></TableCell>
              <TableCell>Title</TableCell>
              <TableCell align="center">Priority&nbsp;</TableCell>
              <TableCell align="center">End Date&nbsp;</TableCell>
              <TableCell align="center">Status&nbsp;</TableCell>
              <TableCell align="center" >Progress&nbsp;</TableCell>
              <TableCell padding="checkbox" ></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <TableRow key={row.id}>

                <TableCell component="th" scope="row">
                  <IconButton>
                    <StarBorderIcon />
                  </IconButton>
                </TableCell>

                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="center">
                  {row.priority}
                </TableCell>
                <TableCell align="center">
                  Today
                </TableCell>

                <TableCell align="center">
                  {row.status}
                </TableCell>

                <TableCell align="center">
                  {row.progress}
                </TableCell>

                <TableCell align="center">
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

