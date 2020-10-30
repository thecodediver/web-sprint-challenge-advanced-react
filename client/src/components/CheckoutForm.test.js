import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />)
  const header = screen.queryByText(/checkout form/i)
  expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details", async () => {
  render(<CheckoutForm />)

  const firstName = screen.getByLabelText(/first name/i)
  const lastName = screen.getByLabelText(/last name/i)
  const address = screen.getByLabelText(/address/i)
  const city = screen.getByLabelText(/city/i)
  const state = screen.getByLabelText(/state/i)
  const zip = screen.getByLabelText(/zip/i)

  fireEvent.change(firstName, { target: { value: 'James', name: 'firstName'}})
  fireEvent.change(lastName, { target: { value: 'Lundin', name: 'lastName'}})
  fireEvent.change(address, { target: { value: '194 Stoughton Street', name: 'address'}})
  fireEvent.change(city, { target: { value: 'Stoughton', name: 'city'}})
  fireEvent.change(state, { target: { value: 'Ma', name: 'state'}})
  fireEvent.change(zip, { target: { value: '02072', name: 'zip'}})

  const button = screen.getByRole('button')
  fireEvent.click(button)

  const userInfoText = await screen.getByText(/James/i)
  expect(userInfoText).toBeTruthy()
});
