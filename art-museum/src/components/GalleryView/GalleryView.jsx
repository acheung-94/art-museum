import { Navigate, useParams } from "react-router-dom";

function findGallery(galleries, galleryId) {
    let found = galleries.find( (gallery) => (
        gallery.galleryid === JSON.parse(galleryId)
    ))
    return found
}


function GalleryView( {galleries} ) {
    let { galleryId } = useParams();
    return (
        <>
            <h1>Hello from GalleryView</h1>
            
            { findGallery(galleries, galleryId) ?
                <h2>{ findGallery(galleries, galleryId).name }</h2> :
                <Navigate to='/' replace={true}> </Navigate>
            }
            
        </>
    )
}

export default GalleryView