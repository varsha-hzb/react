import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { element } from 'prop-types'

function MyApp() {
    return(
        <div>
            <h1>Lorem ipsum dolor sit amet.</h1>
        </div>
    )
}

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank'},
    'click me to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App />
  
)
