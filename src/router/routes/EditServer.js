import { lazy } from 'react'

const EmployeesRoutes = [
  
  {
    path: '/edit_server',
    component: lazy(() => import('../../@core/components/Edit_monitor/index'))
  }
  
]
export default EmployeesRoutes
