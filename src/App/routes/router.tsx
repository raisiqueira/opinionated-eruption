import { createBrowserRouter } from 'react-router-dom'

import App from '@/App/routes/Main'
import Repositories from '@/App/routes/Repositories'
import { gitHubUserLoader } from '@/App/services/github'

/**
 * This is the router setup for the app.
 */
export const routerSetup = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/repositories',
    element: <Repositories />,
    loader: () => gitHubUserLoader,
  },
])
