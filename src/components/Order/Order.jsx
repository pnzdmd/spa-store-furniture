import React, { Component } from 'react';
import { FaTrash } from 'react-icons/fa';

class Order extends Component {
  render() {
    const { img, title, price, id } = this.props.item;
    return (
      <div className='item'>
        <img src={'./img/' + img} alt='' />
        <h2>{title}</h2>
        <b>{price} ₽</b>
        <FaTrash
          className='delete-icon'
          onClick={() => this.props.onDelete(id)}
        />
      </div>
    );
  }
}

export default Order;
