import { screen } from '@testing-library/react'

import Repositories from '@/App/routes/Repositories'
import { testSetupWithProviders } from '@/App/utils/testUtils'

describe('Repositories.tsx', () => {
  it('renders the Repositories page', async () => {
    testSetupWithProviders(<Repositories />)
    expect(await screen.findByText('Loading...')).toBeInTheDocument()
    expect(await screen.findByText('Repositories')).toBeInTheDocument()
    expect(await screen.findByText(/create-eruption/i)).toBeInTheDocument()
  })
})
