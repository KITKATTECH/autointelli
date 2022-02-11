import { lazy } from 'react'

const operationRoutes = [
  
  {
    path: '/operations',
    component: lazy(() => import('../../@core/components/Operations/index'))
  }
  
]
export default operationRoutes
