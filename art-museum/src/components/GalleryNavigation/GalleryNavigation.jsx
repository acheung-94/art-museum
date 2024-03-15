import { NavLink } from "react-router-dom";

function GalleryNavigation({ galleries }) {
    console.log(galleries);
    return (    
        <nav>
            {galleries.map(element => (
                <NavLink to={`galleries/${element.id}`} key={element.id}>{element.name}</NavLink>
            )) 
            }
  
          <h1>Galleries</h1>  

        </nav>
    )
}

export default GalleryNavigation;