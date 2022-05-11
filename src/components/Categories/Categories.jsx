import React, { Component } from 'react';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: 'all',
          name: 'Всё',
        },
        {
          key: 'chairs',
          name: 'Стулья',
        },
        {
          key: 'tables',
          name: 'Столы',
        },
        {
          key: 'luminaires',
          name: 'Светильники',
        },
        {
          key: 'sofa',
          name: 'Диваны',
        },
      ],
    };
  }

  render() {
    const { chooseCategory } = this.props;
    const { categories } = this.state;
    return (
      <div className='categories'>
        {categories.map((el) => (
          <div key={el.key} onClick={() => chooseCategory(el.key)}>
            {el.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
