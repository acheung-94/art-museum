import { Navigate, useParams } from "react-router-dom";
import ArtImageTile from "../ArtImageTile";

function findGallery(galleries, galleryId) {
    let found = galleries.find( (gallery) => (
        gallery.galleryid === JSON.parse(galleryId)
    ))
    return found
}


function GalleryView( {galleries} ) {
    let { galleryId } = useParams();
    let gallery = findGallery(galleries, galleryId);

    if (!gallery) {
        return <Navigate to='/' replace={true}> </Navigate>
    }

    // console.log(galleries,"galleries"); // gallery.objects shows the artworks

    return (
        <>
            <h1>Hello from GalleryView</h1>
            
            {gallery.objects.map((artwork)=> (
                <ArtImageTile key={artwork.id} art={artwork}></ArtImageTile>
            ))
                
            }
            
        </>
    )
}

export default GalleryView