import React, { Component } from 'react';

class Item extends Component {
  render() {
    const { img, title, desc, price } = this.props.item;
    const { onAdd, item } = this.props;

    return (
      <div className='item'>
        <img src={'./img/' + img} alt='' />
        <h2>{title}</h2>
        <p>{desc}</p>
        <b>{price} ₽</b>
        <div className='add-to-cart' onClick={() => onAdd(item)}>
          +
        </div>
      </div>
    );
  }
}

export default Item;
