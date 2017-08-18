import * as React from 'react';
import '../styles/components/image-gallery.css';

export interface ImageGalleryProps {
    images: string[];
}

export default function(props: ImageGalleryProps) {
    let { images } = props;
    return (
        <div className="image-gallery">
            <ul className="row">
                {images.map((image) => (
                    <li key={image} className="col-md-3">
                        <img src={image} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
