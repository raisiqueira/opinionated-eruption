import { QueryClientProvider } from '@tanstack/react-query'
import { MantineProvider } from '@mantine/core'
import { PropsWithChildren } from 'react'
import { queryClient } from '@/App/utils/queryUtils'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

type ProviderProps = PropsWithChildren<{}>

export default function Providers({ children }: ProviderProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </MantineProvider>
  )
}
