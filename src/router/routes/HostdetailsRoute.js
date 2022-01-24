import { lazy } from 'react'

const Hostdetails = [
  {
    path: '/hostdetails',
    component: lazy(() => import('../../@core/components/host_details/index'))
  }
 
]

export default Hostdetails
