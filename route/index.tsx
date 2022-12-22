import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { routes } from './routes'

export const Routers: React.FC = () => {
  if (typeof window === 'undefined') {
    return <div>Loading</div>
  }

  return (
    <BrowserRouter window={window}>
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              {...route}
              key={route.path}
              path={`${route.path}`}
            />
          )
        })}
      </Routes>
    </BrowserRouter>
  )
}
