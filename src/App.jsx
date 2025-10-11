import MainContent from './routes/main/MainContent'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Album, { albumDataLoader } from './routes/albumComponent/Album'
import RootLayout from './routes/RootLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<MainContent/>}/>
      <Route path=':param' element={<Album/>} loader={albumDataLoader}/>
    </Route>
  )
)

const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App