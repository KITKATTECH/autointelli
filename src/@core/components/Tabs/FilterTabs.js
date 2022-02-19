/*eslint-disable*/
import React, { Component } from "react"
import { Nav, NavItem, NavLink, Row, Col } from "reactstrap"


const { Provider, Consumer } = React.createContext({})



export default class Tabs extends Component {
  static defaultProps = {    
    pills: false,
    tabs: false    
  };

  state = {
    tab: "",
    content: ""
  };

  static Consumer = Consumer;

  static Tab = ({ title = "", children }) => (
      
    <Consumer>
      {({ tab, settab }) => (
        <NavItem>
          <NavLink
            style={{backgroundColor:tab === title ? "#1EADD9" : "", borderRadius:tab === title ? "50px" : "", fontSize:"12px"}}
            onClick={() => settab({ title, children })}
            href="javascript:void(0);"
            active={tab === title}
          >
            {title}
          </NavLink>
        </NavItem>
      )}
    </Consumer>    
  );

  settab = ({ title, children }) => {    
    const { changetab, getTab } = this.props
    this.setState({ tab: title, content: children })
    getTab(title)
    return (
      typeof changetab === "function" &&
      changetab({ tab: title, content: children })
    )
  };


  getProps = () => {
    return {
      ...this.state,
      settab: this.settab
    }
  };

  componentDidMount() {
    // set the first tab active
    const {
      children: { length },
      children
    } = this.props
    if (!children) return
    if (!length) {
      this.settab(children.props)
    } else if (length > 0) {
      this.settab(children[0].props)
    }
  }

  
  render() {
    const {colVal}=this.props
    return (
        <Row>
          <Col md={colVal === 8 ?"2":"0"}></Col>
          <Col md={colVal}>
      <Provider value={this.getProps()}>
        <Nav {...this.props}>{this.props.children}</Nav>
        <div >{this.state.content}</div>
      </Provider>
      </Col>
      <Col md={colVal === 8 ?"2":"0"}></Col>
      </Row>
    )
  }
}

