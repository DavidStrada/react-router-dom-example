import Home from '../pages/Home'
import Archives from '../pages/Archives'
import Features from '../pages/Features'

export  const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: "/archives",
    component: Archives
  },
  {
    path: "/features",
    component: Features
  }
]
