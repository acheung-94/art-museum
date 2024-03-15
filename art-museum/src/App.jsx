import harvardArt from '/src/data/harvardArt.js'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter( [
  {path: "*", element: <h2>Page Not Found</h2>}
])

function App() {
  return < RouterProvider router={router} />;
}

export default App;
