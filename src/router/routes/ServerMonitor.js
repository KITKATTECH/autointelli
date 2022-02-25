import { lazy } from 'react'

const EmployeesRoutes = [
  
  {
    path: '/server_monitor',
    component: lazy(() => import('../../@core/components/Server_Monitor/index'))
  }
  
]
export default EmployeesRoutes
