import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import Button from './components/Button';
import Loader from './components/Loader';
import ImageGallery from 'components/ImageGallery';
import Modal from './components/Modal';
import imagesAPI from './services/images-api';
import { ToastContainer, toast } from 'react-toastify';
// import s from './App.module.css';

class App extends Component {
  state = {
    images: [],
    name: '',
    page: 1,
    showModal: false,
    loading: false,
    error: null,
    imageModal: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const nextName = this.state.name;
    const nextPage = this.state.page;

    if (prevState.name !== nextName || prevState.page !== nextPage) {
    this.setState({ loading: true });

    imagesAPI
    .fetchImages(nextName, nextPage)
    .then(images => {
      this.setState(prevState => ({
          images: [...prevState.images, ...images],
          loading: true,
        }));
      if (images.length === 0) {
        // this.setState({ images: [] });
        this.setState({ loading: false });
        toast.error(`No image with this ${nextName}`);
        // return;
        }
    })
    .catch(error => this.setState({ error }))
    .finally(() => this.setState({ loading: false }));
  }};

handleFormSubmit = name => {
  this.setState({ name });
};

toggleModal = () => {
  this.setState(({ showModal }) => ({
    showModal: !showModal,
  }));
};

 openModal = largeImageURL => {
  this.setState({
    imageModal: largeImageURL,
    showModal: true,
  });
 };

 loadPageMore = () => {
  this.setState(prevState => ({
  page: prevState.page + 1,
  }));
 };

render() {
  const { images, showModal, loading, imageModal } = this.state;

return (
<>
  <Searchbar onSubmit={this.handleFormSubmit}/>

  {images.length > 0 && (<ImageGallery images={images} onImageClick={this.openModal}/>)}

  {images.length >=12 && <Button onClickButton={this.loadPageMore} />}

  {loading && <Loader />}

  {showModal && (
    <Modal onClose={this.toggleModal}>
      <img className="imageLarge" src={imageModal} alt="" />
    </Modal>
  )}

  <ToastContainer autoClose={ 4000 } />
  </>
);
}
}

export default App;
