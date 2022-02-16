import React from 'react';
import {render} from 'react-dom';
import InfiniteScrollComp from 'react-infinite-scroll-component';

const style = {
    height: 100,
    border: "1px solid green",
    margin: 6,
    padding: 8
  };

class InfiniteScroll extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
        items: Array.from({ length: 10 }),
        hasMore: true
        }
    }   
    
    
      fetchMoreData = () => {
        if (this.state.items.length >= 500) {
          this.setState({ hasMore: false });
          return;
        }
        // a fake async api call like which sends
        // 20 more records in .5 secs
        setTimeout(() => {
          this.setState({
            items: this.state.items.concat(Array.from({ length: 10 }))
          });
        }, 500);
      };
  render() {
    return <div className='mt-5'>
    <InfiniteScrollComp
      dataLength={this.state.items.length}
      next={this.fetchMoreData}
      hasMore={this.state.hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      {this.state.items.map((i, index) => (
        <div id={index} style={style} key={index}>
          div - #{index}
        </div>
      ))}
    </InfiniteScrollComp>
  </div>;
  }
}

export default InfiniteScroll;

