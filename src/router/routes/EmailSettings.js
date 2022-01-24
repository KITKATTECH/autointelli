import { lazy } from 'react'

const EmployeesRoutes = [
  
  {
    path: '/email_settings',
    component: lazy(() => import('../../@core/components/Email_settings/index'))
  }
  
]
export default EmployeesRoutes
