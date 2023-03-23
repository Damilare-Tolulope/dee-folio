import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { authProtectedRoutes } from './index';
// import { AuthLayout, DashboardLayout, Layout } from 'layouts/Layouts';
// import PageNotFound from 'pages/404'
// import Auth from 'utils/Auth';
import { Path } from 'constants/path';
import Layout from 'layouts/Layout';
import Home from 'pages/Home'

type TRoutes = {
  path: string;
  component: React.FC;
  title?: string
};

const RouteComponent = () => {

  return (
    <Routes>
       {authProtectedRoutes.map((route: TRoutes) => {
        const { path, component: Component, title } = route;

        return (
          <Route
            key={path}
            path={path}
            element={
                <Layout title={title}>
                  <Component />
                </Layout> 
            }
          />
        );
      })}

      {/*{publicRoutes.map((route: TRoutes) => {
        const { path, component: Component } = route;

        return (
          <Route
            key={path}
            path={path}
            element={
              <Layout>
                <Component />
              </Layout>
            }
          />
        );
      })}

      {authRoutes.map((route: TRoutes) => {
        const { path, component: Component } = route;

        return (
          <>
              <Route
                key={path}
                path={path}
                element={
                  (Auth.isAuthenticated() && status === 'completed') ?
                  <Navigate to={Path.Dashboard} />
                  : 
                  <AuthLayout>
                    <Component />
                  </AuthLayout>
                }
              />
          </>
        );
      })}
      <Route path="*" element={<PageNotFound />} /> */}
    </Routes>
  );
};

export default RouteComponent;
