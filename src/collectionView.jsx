import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Draggable from "react-draggable";
// import { hasColider } from "./utils";

class CollectionView extends PureComponent {
  constructor(props) {
    super(props);

    const { children } = this.props;

    let items = React.Children.map(children, (child, index) => {
      return (
        <Draggable
          bounds="parent"
          onStart={this.onStart}
          onDrag={this.onDrag}
          onStop={this.onStop}
        >
          {React.cloneElement(child, {
            ...child.props,
            style: {
              ...child.props.style,
              flex: "0 0 auto"
            }
          })}
        </Draggable>
      );
    });

    this.state = {
      cloneNode: null,
      items: new Set(items)
    };
  }
  onStart = (e, data) => {
    // console.log("====================================");
    // console.log("onStart", e, data);
    // console.log("====================================");
    // // let collectionIndex = data.node.getAttribute("collectionindex");

    // let items = new Set([...this.state.items]);

    // items.delete(data.node);
    // // items.splice(collectionIndex, 1);
    // this.setState({
    //   items: items
    // });
  };

  onDrag = (e, data) => {};

  onStop = (e, data) => {
    // console.log("====================================");
    // console.log("onStop", e, data);
    // console.log("====================================");
  };

  render() {
    const { style } = this.props;

    return (
      <div
        ref={r => (this.container = r)}
        style={{
          ...style,
          display: "flex",
          flexDirection: "row",
          backgroundColor: "green",
          flexWrap: "wrap",
          alignContent: "flex-start"
        }}
      >
        {this.state.items}
      </div>
    );
  }
}

CollectionView.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
};
CollectionView.defaultProps = {};

export default CollectionView;
