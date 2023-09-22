// Myprofile.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Myprofile from './Myprofile';

test('renders Myprofile component', () => {
  const { getByText } = render(<Myprofile />);
  const myMissionsText = getByText('My Missions');
  expect(myMissionsText).toBeInTheDocument();
});
