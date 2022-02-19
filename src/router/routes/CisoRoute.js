import { lazy } from 'react'

const cisoRoute = [
  
  {
    path: '/ciso',
    component: lazy(() => import('../../@core/components/Ciso/index'))
  }
  
]
export default cisoRoute
