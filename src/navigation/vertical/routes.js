import { User, Grid, Settings, BarChart2, Box, FileText, Mail, FileMinus, Sliders, Circle, Menu, Tool} from 'react-feather'

export default [
 
  {
    id: 'oC',
    title: 'Operation Center',
    icon: <Grid size={20} />,
    navLink: '/executive_summary',
    children: [
      {
            id: 'eS',
            title: 'Executive Summary',
            icon: <Circle />,
           navLink: '/executive_summary'
         //   newTab: true
          }
          // {
          //   id: 'oV',
          //   title: 'Operations view',
          //   icon: <Circle />
          //  // navLink: '/pages/login-v2',
          //  // newTab: true
          // }
    ]
  },

  // {
  //   id: 'iM',
  //   title: 'Incident Management',
  //   icon: <BarChart2 size={20} />,
  //   navLink: '/dashboard/ecommerce',
  //   children: [
  //     {
  //           id: 'lA',
  //           title: 'Latest Alerts',
  //           icon: <Circle />
  //        //   navLink: '/pages/login-v1',
  //        //   newTab: true
  //         },
  //         {
  //           id: 'sD',
  //           title: 'Schedule Downtime',
  //           icon: <Circle />
  //          // navLink: '/pages/login-v2',
  //          // newTab: true
  //         }
  //   ]
  // },

    {
    id: 'De',
    title: 'Details',
    icon: <Menu size={20} />,
    navLink: '/dashboard/ecommerce',
    children: [
      {
            id: 'hD',
            title: 'Host Detail',
            icon: <Circle />,
            navLink: '/hostdetails'
         //   newTab: true
          },
          {
            id: 'hD',
            title: 'OS Dashboard',
            icon: <Circle />,
            navLink: '/os_dashboard'
         //   newTab: true
          }
      //     {
      //       id: 'sD2',
      //       title: 'Service Detail',
      //       icon: <Circle />
      //      // navLink: '/pages/login-v2',
      //      // newTab: true
      // },
      //      {
      //       id: 'aD',
      //       title: 'Application Detail',
      //       icon: <Circle />
      //      // navLink: '/pages/login-v2',
      //      // newTab: true
      //     }
    ]
  },
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
      },
           {
            id: 'app',
            title: 'Application Management',
            icon: <Circle />,
            navLink: '/app_management'
           // newTab: true
      }
    ]
  },
       {
    id: 'c',
    title: 'Configuration Wizards',
    icon: <Tool size={20} />,
    navLink: '/dashboard/ecommerce',
    children: [
      {
            id: 'cW',
            title: 'Configuration Wizards',
            icon: <Circle />,
            navLink: '/configuration_wizards'
         //   newTab: true
          },
          {
            id: 'Ms',
            title: 'Server Monitor',
            icon: <Circle />,
            navLink: '/server_monitor'
           // newTab: true
      }
    ]
  },
  {
    id: 'c',
    title: 'Incident Management',
    icon: <Tool size={20} />,
    navLink: '/dashboard/ecommerce',
    children: [
      {
            id: 'cW',
            title: 'Latest Alerts',
            icon: <Circle />,
            navLink: '/latest_alert'
         //   newTab: true
          }
    ]
  }
  // {
  //   id: 'policies',
  //   title: 'Policies',
  //   icon: <FileText size={20} />,
  //   navLink: '/policies'
  // },
  // {
  //   id: 'endrosement',
  //   title: 'Endrosement',
  //   icon: <Mail size={20} />
  // },
  // {
  //   id: 'employees',
  //   title: 'Employees',
  //   icon: <User size={20} />,
  //   navLink: '/employees'
  // },
  // {
  //   id: 'claims',
  //   title: 'claims',
  //   icon: <FileMinus size={20} />
  // },
  // {
  //   id: 'providers',
  //   title: 'Providers',
  //   icon: <Sliders size={20} />
    
  // },
  // {
  //   id: 'gameZone',
  //   title: 'Game Zone',
  //   icon: <Box size={20} />
    
  // },
  // {
  //   id: 'ecommerce',
  //   title: 'ecommerce',
  //   icon: <BarChart2 size={20} />
    
  // },
  // {
  //   id: 'setting',
  //   title: 'Settings',
  //   icon: <Settings size={20} />
    
  // }
]
