import { fireEvent, render, screen } from '@testing-library/react'

import App from './App'

describe('<App />', () => {
  it('should render the App', () => {
    const app = render(<App />)

    fireEvent.click(screen.getByRole('button'));

    expect(screen.getByText('Coucou')).toBeTruthy();

  })
})
