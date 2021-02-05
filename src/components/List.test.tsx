import React from 'react';
import ReactDOM from 'react-dom';
import ItemList from './List';

// Test the case where the items provided is empty:
//   <ItemList items={[]} />
test('empty list', () => {
  const container = document.createElement('div');
  ReactDOM.render(<ItemList items={[]}/>, container)
  expect(container.textContent).toMatch('no items')
})

// Test the case where there are items in the list:
test('renders the items in a list', () => {
  const container = document.createElement('div')
  ReactDOM.render(<ItemList items={['apple', 'orange', 'pear']} />, container)
  expect(container.textContent).toMatch('apple')
  expect(container.textContent).toMatch('orange')
  expect(container.textContent).toMatch('pear')
})