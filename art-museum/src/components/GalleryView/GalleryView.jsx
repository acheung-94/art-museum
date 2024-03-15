import { useParams } from "react-router-dom";

function GalleryView( {galleries} ) {
    let { galleryId } = useParams();
    
    console.log(galleryId);
    return (
        <h1>Hello from GalleryView</h1>
    )
}

export default GalleryView