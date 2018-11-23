import React from 'react';
import Modal from 'react-modal';


export default class ModalView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false, transform: 'scale(1.0)'
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#000000';
    this.subtitle.style.textAlign = "center";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {

    const modalBoxStyle = {
      content: {
        width: '60%',
        marginLeft: 'auto',
        marginRight: 'auto',
        top: '2%',
        left: '15%',
        right: '15%',
        bottom: '9%',
        padding: '1rem'
      }
    }

    const modalButtonStyle = {
      padding: ['0.7rem', '1.8rem'],
      backgroundColor: '#000000',
      border: 0,
      borderRadius: '0.8rem',
      fontSize: '2rem',
      color: '#fff',
      cursor: 'pointer',
      marginBottom: '0.8rem',
    };

    var imageStyle = {
      width: '1000px',
      marginLeft: 'auto',
      marginRight: 'auto',
      transform: this.state.transform
    };


    let src = "https://www.pizzabysam.com/sites/default/files/imagecache/menu_zoom/SamsMenu_nocoupons-1.jpg";

    return (
      <div>
        <button onClick={this.openModal} style={modalButtonStyle}>See Menu</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={modalBoxStyle}
          contentLabel="Menu Modal"
        >
          <h2 ref={subtitle => this.subtitle = subtitle}>{this.props.name} - Menu</h2>
          <div>
            <img src={src} alt="Menu Missing" style={imageStyle} />
          </div>
          {/* <button onClick={this.closeModal}>close</button> */}
        </Modal>
      </div >
    );
  }
}