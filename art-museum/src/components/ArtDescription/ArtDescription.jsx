import { Link, useParams } from 'react-router-dom'

function ArtDescription ( { galleries }) {
    // {artId} = useParams()
    // {galleryId} = useParams()
    const { artId, galleryId } = useParams()
    let gallery = galleries.find( (gallery) => gallery.galleryid === JSON.parse(galleryId))
    let artwork = gallery.objects.find( (artwork) => artwork.id === JSON.parse(artId) )
    return ( 
        <>
        <Link to="../"> 👈 Back To Gallery</Link>
        <Link to={artwork.url} > {artwork.title} </Link>
        <h3>Description:</h3>
            <p>{ artwork.description ? artwork.description : `No description available`} </p>
        <h3>Credit: { artwork.creditline }</h3>
        <h3>Technique: { artwork.technique ? artwork.technique : `No information available`}</h3>
            { artwork.images.map( (image)=>{
                return <img src={image.baseimageurl} key={image.imageid} alt={artwork.title}></img>
            })}
        </>
    )
}

export default ArtDescription;