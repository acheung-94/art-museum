import { NavLink } from "react-router-dom";
import './GalleryNavigation.css'
function GalleryNavigation({ galleries }) {
    console.log(galleries);
    return (    
        <nav>
            <NavLink to='/' > <h1>Galleries Home</h1></NavLink>
            
            {galleries.map(element => (
                <NavLink to={`galleries/${element.id}`} key={element.id}>{element.name}</NavLink>
            )) 
            }

        </nav>
    )
}

export default GalleryNavigation;
