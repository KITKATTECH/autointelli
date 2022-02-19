import {  Grid, Settings,  Circle} from 'react-feather'

export default [
  
    
      {
    id: 'sC',
    title: 'System Config',
    icon: <Settings size={20} />,
    navLink: '/dashboard/ecommerce',
    children: [
      {
            id: 'mU',
            title: 'Manage Users',
            icon: <Circle />,
            navLink: '/employees'
         //   newTab: true
          },
          {
            id: 'meS',
            title: 'Manage Email Settings',
            icon: <Circle />,
            navLink: '/email_settings'
           // newTab: true
      }
    ]
  },    
  {
    id: "oP",
    title: "Operations",
    icon: <Grid size={20} />,
    navLink: "/operations"   
  },    
  {
    id: "ciso",
    title: "Ciso",
    icon: <Grid size={20} />,
    navLink: "/ciso"   
  }
  
]
