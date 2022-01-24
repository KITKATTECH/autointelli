import { lazy } from 'react'

const AppmanagementRoutes = [
  
  {
    path: '/app_management',
    component: lazy(() => import('../../@core/components/App_management/index'))
  }
  
]
export default AppmanagementRoutes
