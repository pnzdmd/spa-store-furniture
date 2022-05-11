import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Order from '../Order/Order';

const showOrders = (props) => {
  const { orders, onDelete } = props;
  let summa = 0;
  orders.forEach((el) => (summa += Number.parseFloat(el.price)));
  return (
    <>
      {orders.map((el) => (
        <Order key={el.id} item={el} onDelete={onDelete} />
      ))}
      <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}₽</p>
    </>
  );
};

function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <span className='logo'>House Staff</span>
        <ul className='nav'>
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaShoppingCart
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`shop-cart-button ${cartOpen && 'active'}`}
        />
        {cartOpen && (
          <div className='shop-cart'>
            {props.orders.length > 0 ? (
              showOrders(props)
            ) : (
              <div className='empty'>
                <h2>Корзина пустая</h2>
              </div>
            )}
          </div>
        )}
      </div>
      <div className='presentation'></div>
    </header>
  );
}

export default Header;
