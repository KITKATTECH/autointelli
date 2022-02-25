import { lazy } from 'react'

const EmployeesRoutes = [
  
  {
    path: '/os_dashboard',
    component: lazy(() => import('../../@core/components/os_dashoard/index'))
  }
  
]
export default EmployeesRoutes
