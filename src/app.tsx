import * as React from 'react';
import AppHeader from './components/app-header';
import './styles/modules/app-main.css';
import { 
  BrowserRouter, 
  Route
} from 'react-router-dom';
import imageGalleryRoute from './routes/image-gallery';
import imageSliderRoute from './routes/image-slider';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AppHeader />

        <BrowserRouter>
          <div>
            <Route exact={true} path="/" component={imageSliderRoute} />
            <Route path="/image-gallery" component={imageGalleryRoute} />
          </div>
        </BrowserRouter>

        <footer className="app-footer">
          <div className="container">
          Built by <a href="https://thisdot.co" target="_blank">This Dot</a>.
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
