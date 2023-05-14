import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { testSetupWithProviders } from '@/App/utils/testUtils'

import { App } from '.'

describe('App', () => {
  test('should return the correct text', () => {
    testSetupWithProviders(<App />)

    expect(screen.getByText('Vite + React/TS = EruptionJS')).toBeInTheDocument()
  })

  test('should return 1 when the user click one time at button', () => {
    testSetupWithProviders(<App />)

    const buttonElement = screen.getAllByRole('button')[0]
    expect(screen.queryByText('count is 0')).toBeInTheDocument()

    userEvent.click(buttonElement)

    waitFor(() => expect(screen.queryByText('count is 1')).toBeInTheDocument())
  })
})
