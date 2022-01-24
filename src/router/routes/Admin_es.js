import { lazy } from 'react'

const AdminRoutes = [
  
  {
    path: '/executive_summary',
    component: lazy(() => import('../../@core/components/Admin_ES/index'))
  }
  
]
export default AdminRoutes
