import { PropsWithChildren, useState } from 'react'

import { ColorSchemeProvider, MantineProvider } from '@mantine/core'
import { type ColorScheme } from '@mantine/core'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { defaultTheme } from '@/App/styles/theme'
import { queryClient } from '@/App/utils/queryUtils'

type ProviderProps = PropsWithChildren<Record<string, unknown>>

export default function Providers({ children }: ProviderProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light')
  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === 'light' ? 'dark' : 'light'))
  }
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        theme={{ ...defaultTheme, colorScheme: colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <QueryClientProvider client={queryClient}>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
