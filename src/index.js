import React from 'react'
import { render } from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import './index.scss'
import rootReducer from './reducers'
import { createStore } from "redux";
import { Provider } from 'react-redux'
import Router from './components/Router/Router'
import * as serviceWorker from './serviceWorker';

const store = createStore( rootReducer )

// window.onresize = () => window.location.reload()

// required 'resize' fix for mobile browsers
// let resizeTimer

// window.addEventListener( 'resize', function(e) {
//   clearTimeout(resizeTimer)
//   resizeTimer = setTimeout(function() {
//     window.location.reload()
//   }, 250)
// })

function DisplayLinks() {
  function redirect( page ){
    switch( page ) {
      case "experimental-3d" :
        window.location.assign('/contract-react-developer/resume')
        break
      case "basic-page" :
        window.location.assign('/contract-react-developer/resume/basic')
        break
      case "landing-page" :
        window.location.assign('/')
        break
      default:
        break
    }
  }
  // don't show on landing page
  if( window.location.pathname !== ('/' || '/contract-react-developer') ) {
    return (
      <div id="app-routes">
        <div className="app-route experimental-3d" onClick={ () => redirect('experimental-3d') }>Experiemental 3D</div>
        <div className="app-route basic-page" onClick={ () => redirect('basic-page') }>Basic Page</div>
        <div className="app-route landing-page" onClick={ () => redirect('landing-page') }>Landing Page</div>
      </div>
    )
  }

  return null
}

render(
  <Provider store={store}>
    <DisplayLinks />
    <Router />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister();
