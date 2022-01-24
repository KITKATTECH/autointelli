import { lazy } from 'react'

const EmployeesRoutes = [
  
  {
    path: '/configuration_wizards',
    component: lazy(() => import('../../@core/components/Configuration/index'))
  }
  
]
export default EmployeesRoutes
