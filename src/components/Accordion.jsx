import React from 'react';

class Accordion extends React.Component {
  state = { activeIndex: 0 };

  onActiveIndex = (index) => {
    this.setState({ activeIndex: index });
    console.log('Title clicked', this.state.activeIndex);
  };

  renderedItem() {
    return this.props.items.map((item, idx) => {
      return (
        <React.Fragment key={item.title}>
          <div
            className={`title ${
              idx === this.state.activeIndex ? 'active' : ''
            }`}
            onClick={() => this.onActiveIndex(idx)}
          >
            <i className='dropdown icon'></i>
            {item.title}
          </div>
          <div
            className={`content ${
              idx === this.state.activeIndex ? 'active' : ''
            }`}
          >
            <p>{item.content}</p>
          </div>
        </React.Fragment>
      );
    });
  }
  render() {
    return (
      <div className='ui styled fluid accordion'>{this.renderedItem()}</div>
    );
  }
}

export default Accordion;
