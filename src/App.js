
import React, { Component } from 'react';
import { render } from 'react-dom';
import { CSSTransitionGroup } from 'react-transition-group';

class AnimatedShoppingList extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      items: [
        { id: 1, name: 'Milk' },
        { id: 2, name: 'Yogurt' },
        { id: 3, name: 'Orange Juice' },
      ],
    };
  }

  handleChange(evt) {
    if (evt.key === 'Enter') {

      let newItem = { id: Date.now(), name: evt.target.value };

      let newItems = this.state.items.concat(newItem);

      evt.target.value = '';

      this.setState({ items: newItems });
    }
  }

  handleRemove(i) {

    var newItems = this.state.items;
    newItems.splice(i, 1);

    this.setState({ items: newItems });
  }

  render() {
    let shoppingItems = this.state.items.map((item, i) => (
          <div  key={item.id}
                className="item"
                onClick={this.handleRemove.bind(this, i)}>
                {item.name}
          </div>
        ));

    return (
      <div>
        <CSSTransitionGroup transitionName='example'
                            transitionEnterTimeout={300}
                            transtionTimeLeaveTimeout={300}
                            transitionAppear={true}
                            transitionAppearTimeout={300} >
        {shoppingItems}
      </CSSTransitionGroup>
        < input type="text" value={this.state.newItem} onKeyDown={this.handleChange.bind(this)}/>
      </div>
    );
  }
}


render(<AnimatedShoppingList />, document.getElementById('root'));
