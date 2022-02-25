import { lazy } from 'react'

const AdminRoutes = [
  
  {
    path: '/setup_Agent',
    component: lazy(() => import('../../@core/components/setup_agent/index'))
  }
  
]
export default AdminRoutes
