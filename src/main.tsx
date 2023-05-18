import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { disableReactDevTools } from '@fvilers/disable-react-devtools'

import { routerSetup } from '@/App/routes/setup'

import Providers from './App/providers'
import './index.css'

if (import.meta.env.MODE === 'production') {
  disableReactDevTools()
}

const AppWithProviders = () => {
  return (
    <Providers>
      <RouterProvider router={routerSetup} />
    </Providers>
  )
}

const root = createRoot(document.getElementById('root') as HTMLElement)

if (import.meta.env.MODE === 'development') {
  import('@/__mocks__/browser')
    .then(({ worker }) => {
      worker.start()
    })
    .then(() => {
      root.render(
        <StrictMode>
          <AppWithProviders />
        </StrictMode>,
      )
    })
} else {
  root.render(
    <StrictMode>
      <AppWithProviders />
    </StrictMode>,
  )
}

// Uncomment if you want to see the Lighthouse report in the console
// import reportWebVitals from './reportWebVitals'
// reportWebVitals(console.log)
