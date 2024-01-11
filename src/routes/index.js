import { createRouter } from '../core/chloeun'
import Home from './Home'
import About from './About'

export default createRouter([
  { path: '#/', component: Home },
  { path: '#/about', component: About }
])
