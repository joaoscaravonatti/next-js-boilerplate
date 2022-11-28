import { render, screen } from '@testing-library/react'

import Example from 'components/Example'

describe('<Example />', () => {
  it('should render the message', () => {
    render(<Example message="test" />)

    expect(screen.getByRole('heading')).toHaveTextContent('test')
  })
})
