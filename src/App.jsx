import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Items from './components/Items/Items';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          title: 'Стул серый',
          img: 'chair.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          category: 'chairs',
          price: '45.99',
        },
        {
          id: 2,
          title: 'Стул белый',
          img: 'chair2.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          category: 'chairs',
          price: '45.99',
        },
        {
          id: 3,
          title: 'Стол',
          img: 'table.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          category: 'chairs',
          price: '45.99',
        },
        {
          id: 4,
          title: 'Стул серый',
          img: 'chair.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          category: 'chairs',
          price: '45.99',
        },
        {
          id: 5,
          title: 'Стул белый',
          img: 'chair2.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          category: 'chairs',
          price: '45.99',
        },
        {
          id: 6,
          title: 'Стол',
          img: 'table.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          category: 'chairs',
          price: '45.99',
        },
      ],
    };
  }
  render() {
    return (
      <div className='wrapper'>
        <Header />
        <Items items={this.state.items} />
        <Footer />
      </div>
    );
  }
}

export default App;
