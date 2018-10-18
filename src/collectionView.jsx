import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


class CollectionView extends PureComponent {

  render() {

    if(this.props.children instanceof Array){

    }
    
    return (
      <div>
        欢迎使用CollectionView
      </div>
    )
  }
}

CollectionView.propTypes = {
  
}
CollectionView.defaultProps = {
  
}

export default CollectionView;
