import * as React from 'react';
import ImageSlider from '../components/image-slider';

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

            <ImageSlider images={imageSources} />
        </div>
    );
}