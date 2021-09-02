import SignUpPage from './SignUpPage.svelte'
import { render, screen } from '@testing-library/svelte'

it("has Sign Up header", () => {
  render(SignUpPage)
  const header = screen.getByRole("heading", { name: "Sign Up" })
  expect(header).toBeTruthy()
});
