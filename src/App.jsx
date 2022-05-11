import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Items from './components/Items/Items';
import Categories from './components/Categories/Categories';
import { initialCards } from './initialCards';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: initialCards,
    };

    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
  }

  // фильтрация товара
  chooseCategory(category) {
    if (category === 'all') {
      this.setState({
        currentItems: this.state.items,
      });
      return;
    }
    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }
  // удаление товара из корзины
  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }
  // добавление товара в корзину
  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) {
        isInArray = true;
      }
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }

  render() {
    const { orders, currentItems } = this.state;
    return (
      <div className='wrapper'>
        <Header orders={orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items items={currentItems} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }
}

export default App;
