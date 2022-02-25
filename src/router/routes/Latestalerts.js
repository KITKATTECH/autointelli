import { lazy } from 'react'

const EmployeesRoutes = [
  
  {
    path: '/latest_alert',
    component: lazy(() => import('../../@core/components/Latest_alerts/index'))
  }
  
]
export default EmployeesRoutes
