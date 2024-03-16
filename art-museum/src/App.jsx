import harvardArt from '/src/data/harvardArt.js';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import {Outlet, useRouteError} from 'react-router-dom';
import GalleryNavigation from './components/GalleryNavigation';
import GalleryView from './components/GalleryView';
import ArtDescription from './components/ArtDescription';


const router = createBrowserRouter( [
  { element: <Layout />,
    errorElement: <PageMissing />,
    children: [
      {
        path: "/", 
        element: 
          <>
            <h2>Harvard Art Museum</h2>
            <p>
              Look, but Don&apos;t Touch. Please select a Gallery in the
              navigation bar.
            </p>
          </>
      },
      // {path: "*", element: <h2> Page Not Found </h2>},
      {path: "/galleries/:galleryId", errorElement: <PageMissing />, children: [
        {index: true, element: <GalleryView galleries={ harvardArt.records } /> },
        {path: "art/:artId", element: <ArtDescription galleries={ harvardArt.records } /> },
        {path: "*", element: <PageMissing />}
      ]}
      
    ]}
])

function Layout() {
  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

function PageMissing(){
  const error = useRouteError();
  if (isRouteErrorResponse(error))
    console.log(`${error.status} ${error.statusText} ${error.data}`);
  return <h2> Page not founddddd 🎅</h2>
}


function App() {
  return < RouterProvider router={router} />;
}

export default App;
