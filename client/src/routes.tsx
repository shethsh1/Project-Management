import React, { useState, useEffect } from 'react'
import { Routes as DomRoutes } from "react-router-dom";
import { Route } from 'react-router'
import Dashboard from './pages/dashboard/Dashboard'
import Project from './pages/project/Project'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import { tokenLogin } from './redux/slices/authSlice'
import type { error, user } from './redux/slices/authSlice'
import SnackBarError from './components/login/SnackBarError'



export default function Routes() {

    const { user, isFetching } = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()

    const [errorMessage, setErrorMessage] = useState("")
    const [snackBarOpen, setSnackBarOpen] = useState(false)

    useEffect(() => {

        const token = async () => {
            await dispatch(tokenLogin("a")).unwrap()
        }
        token()

    }, [dispatch])
    
    useEffect(() => {
        if ((user as error)?.error) {
            setErrorMessage((user as error).error);
            setSnackBarOpen(true);
        }
      }, [(user as error)?.error]);



    if(isFetching) {
        return <div>Loading...</div>
    }





    return (
        <>
      {snackBarOpen && (
        <SnackBarError
          setSnackBarOpen={setSnackBarOpen}
          errorMessage={errorMessage}
          snackBarOpen={snackBarOpen}
        />
      )}
      <DomRoutes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/project/:id" element={<Project />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
          
      </DomRoutes>



        </>
    )
}
