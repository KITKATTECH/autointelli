import { lazy } from 'react'

const AdminRoutes = [
  
  {
    path: '/changepassword',
    component: lazy(() => import('../../@core/components/change_password/index'))
  }
  
]
export default AdminRoutes
