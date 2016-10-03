import React from 'react'

export default function accordion(Component) {
  return class WrapperComponent extends React.Component {

    state = {
      openItemId: null
    }
    
    toggle = (id) => {
     return () => {
        this.setState({
          openItemId : (this.state.openItemId===id) ? null : id
        })
      }
    }

    render() {
      return <Component {...this.props} {...this.state} toggle = {this.toggle}/>
    }
  }
}