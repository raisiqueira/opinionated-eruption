import { createBrowserRouter } from 'react-router-dom'

import App from '@/App/routes/Main'

/**
 * This is the router setup for the app.
 */
export const routerSetup = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
])
