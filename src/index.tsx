// 물리 DOM 객체 사용
// import React from 'react'
// const pPhysicalDOM = document.createElement('p')
// pPhysicalDOM.innerText = 'Hello Physical DOM World!'
// document.body.appendChild(pPhysicalDOM)

// 가상 DOM 객체 사용
import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const pVirtualDOM = React.createElement('p', null, 'Hello virtual DOM world!')

root.render(pVirtualDOM)
