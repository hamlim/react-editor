import React from 'react'
import logo from './logo.svg'
import './App.css'

import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'

import SimpleEditor from '@matthamlin/react-code-editor'

import {
  Provider,
  Editor,
  Preview,
  useEditor,
  usePreview,
} from '@matthamlin/react-preview-editor'

const CODE = `
function Test() {
  return 'test';
}
render(React.createElement(Test));
`

function App() {
  return (
    <div className="App">
      {/* <section>
          <h3>
            <code>@matthamlin/react-code-editor</code>
          </h3>
          <div>
            <SimpleEditor
              initialValue={CODE}
              highlight={code => highlight(code, languages.javascript)}
            />
          </div>
        </section> */}
      <section>
        <h3>
          <code>@matthamlin/react-preview-editor</code>
        </h3>
        <div>
          <Provider code={CODE}>
            <Preview />
            <Editor
              getHighlighterProps={props => ({
                ...props,
                theme: undefined,
              })}
            />
          </Provider>
        </div>
      </section>
    </div>
  )
}

export default App
