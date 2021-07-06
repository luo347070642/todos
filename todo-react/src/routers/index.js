import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { routeList } from './router_list'
export default function IndexRoute(props) {
  return (
    <Switch>
      {routeList.map((item, index) => {
        return <Route {...item} key={index} {...props} />
      })}
    </Switch>
  )
}
