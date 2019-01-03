import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('shows comment box', () => {
  const div = document.createElement('div');

  ReactDOM.render(<App />, div);

  // Checks for CommentBox
  expect(div.innerHTML).toContain('Comment Box');

  ReactDOM.unmountComponentAtNode(div);
});
