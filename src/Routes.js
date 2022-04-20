/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Routes as ReactRoutes, Route, Navigate } from 'react-router-dom';
import { getUserDetails } from 'store/actions/userActions';
import viewsRoutes from 'views/routes';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';
const Routes = () => {
  const dispatch = useDispatch();
  // const userDetails = useSelector((state) => state.userDetails);
  // const { loading, authenticated } = userDetails;

  // useEffect(() => {
  //   if (!authenticated) dispatch(getUserDetails());
  // }, []);

  return (
    <ReactRoutes>
      {viewsRoutes.map((item, i) => (
        <Route key={i} path={item.path} element={item.renderer()} />
      ))}

      <Route path="*" element={<Navigate replace to="/not-found" />} />
    </ReactRoutes>
  );
};

export default Routes;
