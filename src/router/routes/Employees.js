import { lazy } from 'react'

const EmployeesRoutes = [
  
  {
    path: '/employees',
    component: lazy(() => import('../../@core/components/Employees/index'))
  }
  
]
export default EmployeesRoutes
