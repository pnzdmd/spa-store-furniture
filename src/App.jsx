import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Items from './components/Items/Items';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
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
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
  }
  render() {
    return (
      <div className='wrapper'>
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }
  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) {
        isInArray = true;
      }
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
