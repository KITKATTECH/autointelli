// ** Routes Imports
import AppRoutes from './Apps'
import FormRoutes from './Forms'
import PagesRoutes from './Pages'
import TablesRoutes from './Tables'
import ChartMapsRoutes from './ChartsMaps'
import DashboardRoutes from './Dashboards'
import UiElementRoutes from './UiElements'
import ExtensionsRoutes from './Extensions'
import PageLayoutsRoutes from './PageLayouts'
import HostdetailsRoutes from './HostdetailsRoute'
import Users from './Employees'
import Admin from './Admin_es'
import EmailSettings from './EmailSettings'
import Configwizard from './Config_wizard'
import AppManagement from './App_management'
import OperationsRoute from './operationsRoute'
import CisoRoute from './CisoRoute'

// ** Document title
const TemplateTitle = '%s - AutoIntelli'

// ** Default Route
const DefaultRoute = '/executive_summary'

// ** Merge Routes
const Routes = [
  ...DashboardRoutes,
  ...AppRoutes,
  ...PagesRoutes,
  ...UiElementRoutes,
  ...ExtensionsRoutes,
  ...PageLayoutsRoutes,
  ...FormRoutes,
  ...TablesRoutes,
  ...ChartMapsRoutes,
  ...HostdetailsRoutes,
  ...Users,
  ...Admin,
  ...EmailSettings,
  ...Configwizard,
  ...AppManagement,
  ...OperationsRoute,
  ...CisoRoute
]

export { DefaultRoute, TemplateTitle, Routes }
