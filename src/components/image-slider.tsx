import * as React from 'react';
import '../styles/components/image-slider.css';

interface ImageGalleryProps {
    images: string[];
    startingImage?: number;
}

interface ImageGalleryState {
    currentImage: number;
}

class ImageSlider extends React.Component<ImageGalleryProps, ImageGalleryState> {
    state = {
        currentImage: 0
    };

    render() {
        let { images } = this.props;
        let { currentImage } = this.state;
        return (
            <div className="image-slider">
                <nav>
                    <button className="button" onClick={this.goBack} disabled={currentImage === 0}>
                        Prev
                    </button>
                    <button className="button" onClick={this.goNext} disabled={currentImage === images.length - 1}>
                        Next
                    </button>
                </nav>
                <div className="row">
                    <div className="selected-image col-md-5">
                        <img src={images[currentImage]} />
                    </div>
                </div>
            </div>
        );
    }

    goNext = () => {
        this.setState({
            currentImage: this.state.currentImage + 1
        });
    }

    goBack = () => {
        this.setState({
            currentImage: this.state.currentImage - 1
        });
    }
}

export default ImageSlider;