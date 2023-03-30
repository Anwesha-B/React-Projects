import ImageShow from "./ImageShow";
import './ImageList.css';

function ImageList({ images }) {
    return (
        <div className="image-list">
            {images.map(image => {
                return <ImageShow image={image} />
            })}
        </div>
    )
       
}

export default ImageList;
