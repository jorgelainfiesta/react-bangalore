import * as React from 'react';
import ImageGallery from '../components/image-gallery';

const imageSources: string[] = [
    '/images/capitan.png',
    '/images/cazador.png',
    '/images/mujer-loro.png',
    '/images/mujer-pequena.png'
];

export default function() {
    return (
        <div className="container">
            <h2>Image Slider</h2>

            <ImageGallery images={imageSources} />
        </div>
    );
}