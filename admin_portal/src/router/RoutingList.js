import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import ShowCustomers from '../pages/ShowCustomers';
import ShowProducts from '../pages/ShowProducts';

const routes = [
  {
    path: '/',
    component: Dashboard,
    key: '/',
  },
  {
    path: '/customers',
    component: ShowCustomers,
    key: '/customers',
  },
  {
    path: '/products',
    component: ShowProducts,
    key: '/products',
  },
];

function RoutingList() {
  return routes.map(item => {
    if (item.path.split('/').length === 2) {
      return (
        <Route
          exact
          path={item.path}
          component={item.component}
          key={item.key}
        />
      );
    }
    return <Route path={item.path} component={item.component} key={item.key} />;
  });
}

export default RoutingList;