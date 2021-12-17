import React from 'react';
import {screen, render} from '@testing-library/react'
import ShoppingList from './ShoppingList'
import userEvent from '@testing-library/user-event'

beforeEach(() =>
  render(
    <React.StrictMode>
      {' '}
      <ShoppingList />
    </React.StrictMode>
  )
);

it('should render list', () => {
    screen.getByText('Item: Veggie Burgers');
});

it('should delete an item', () => {
    const veggieBurger = screen.getByText('Item: Veggie Burgers');
    const deleteButton = screen.getAllByText('Delete Item')[0];
    userEvent.click(deleteButton);
    expect(veggieBurger).not.toBeInTheDocument();
})
it('should add an item', async () => {
    const input = screen.getByPlaceholderText('Add item');
    const button = screen.getByText('Add Item');
    userEvent.type(input, 'Apples');
    userEvent.click(button);

    const newInput = await screen.findByText('Item: Apples');
    expect(newInput).toBeInTheDocument();
})