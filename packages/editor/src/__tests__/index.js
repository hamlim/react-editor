import React from 'react'
import { render, fireEvent, cleanup } from 'react-testing-library'
import Editor from '../index.js'

const CODE = `import React from "react";
import ReactDOM from "react-dom";
function App() {
  return (
    <h1>Hello world</h1>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));`

afterEach(cleanup)

test('it renders', () => {
  expect(() =>
    render(<Editor initialValue={CODE} highlight={code => code} />),
  ).not.toThrow()
})
