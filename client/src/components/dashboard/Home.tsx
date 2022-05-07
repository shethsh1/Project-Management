
import React, { useEffect, useState } from 'react'
import {
  Typography,
  Box,
  Button
} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import type { user } from '../../redux/slices/authSlice'
import CreateModalForm from '../../components/project/CreateModalForm'
import type { projectObj } from '../../redux/slices/projectSlice'
import { getProjects } from '../../redux/slices/projectSlice'
import CircularProgress from '@mui/material/CircularProgress';
import ProjectTable from '../project/ProjectTable'

export default function Home() {
  const [open, setOpen] = useState(false);
  const user = useAppSelector(state => state.auth.user) as user
  const { projects, projectFetching } = useAppSelector(state => state.project)
  const dispatch = useAppDispatch()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchAll = async () => {
      await dispatch(getProjects())
    }
    fetchAll()
  }, [])

  return (
    <>

      <CreateModalForm open={open} handleClose={handleClose} />

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


      {projectFetching ?

        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          width: '100%'
        }}>
            <CircularProgress  />

        </Box>
        :




        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 5
        }}>



          <Typography variant="caption" sx={{ opacity: 0.7 }}>
            {projects.length} projects, 3 completed, 0 in progress, 1 not active
          </Typography>

          <ProjectTable projects={projects} />


        </Box>
      }

    </>
  )
}

