import React, { useEffect, useState } from 'react'
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
  Button,
  Menu,
  MenuItem
} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import type { user } from '../../redux/slices/authSlice'
import CreateModalForm from './CreateModalForm'
import type { projectObj } from '../../redux/slices/projectSlice'
import moment from 'moment';
import PriorityCell from './PriorityCell'
import StatusCell from './StatusCell'
import ProgressCell from './ProgressCell'
import DateCell from './DateCell'
import UpdateFavorites from './UpdateFavorites'
import TableMenu from './TableMenu'


type props = {
  projects: projectObj[]
}

export default function ProjectTable({ projects }: props) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - projects.length) : 0;

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 8));
    setPage(0);
  };



  return (
    <>



    <TableContainer component={Paper} sx={{ flex: 1 }}>
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
            ? projects.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : projects
          ).map((row) => (
            <TableRow key={row.id}>

              <TableCell component="th" scope="row">
                <UpdateFavorites favorite={row.favorite} id={row.id as number}/>
              </TableCell>

              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="center">

                <PriorityCell  priority={row.priority} id={row.id as number}/>


              </TableCell>
              <TableCell align="center">
                <DateCell endDate={row.endDate} id={row.id as number} />
              </TableCell>

              <TableCell align="center">
                <StatusCell status={row.status} id={row.id as number} />
              </TableCell>

              <TableCell align="center">
                <ProgressCell progress={row.progress} id={row.id as number} />
              </TableCell>

              <TableCell align="center">
                <TableMenu id={row.id as number} />

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
              count={projects.length}
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
