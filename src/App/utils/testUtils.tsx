import { type PropsWithChildren, type ReactElement } from 'react'

import { render } from '@testing-library/react'

import Providers from '@/App/providers'

type TestSetupProps = PropsWithChildren<Record<string, unknown>>

/**
 * Wraps the component in the Providers component.
 * @param component the component that being tested.
 * @returns the component wrapped in the Providers component.
 */
export const testSetupWithProviders = (component: ReactElement) => {
  const customWrapper = ({ children }: TestSetupProps) => <Providers>{children}</Providers>
  return render(component, { wrapper: customWrapper })
}
