import React, { Component } from 'react'

import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute = ({ component: Component, path, ...rest }) => {
  debugger

  const verifity = rest.store.verifity

  return (
    <Route
      {...rest}
      path={path}
      render={() =>
        verifity ? <Component {...rest} /> : <Redirect to="/verifity" />
      }
    />
  )
}
