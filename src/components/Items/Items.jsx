import React, { Component } from 'react';
import Item from '../Item/Item';

class Items extends Component {
  render() {
    const { items, onAdd } = this.props;
    return (
      <main>
        {items.map((el) => (
          <Item key={el.id} item={el} onAdd={onAdd} />
        ))}
      </main>
    );
  }
}

export default Items;
