/*eslint-disable*/
import React, { Component } from "react"
import { Nav, NavItem, NavLink, Row, Col } from "reactstrap"


const { Provider, Consumer } = React.createContext({})


function style(bordered) {
    return bordered ? {
          borderLeft: "1px solid #ddd",
          borderRight: "1px solid #ddd",
          borderBottom: "1px solid #ddd",
          padding: "20px"
        } : { padding: "20px" }
  }

export default class Tabs extends Component {
  static defaultProps = {
    bordered: false,
    pills: false,
    tabs: false,
    onSetTab: () => {}
  };

  state = {
    tab: "",
    content: ""
  };

  static Consumer = Consumer;

  static Tab = ({ title = "", children }) => (
      
    <Consumer>
      {({ tab, setTab }) => (
        <NavItem>
          <NavLink
            style={{backgroundColor:tab === title ? "#1EADD9" : "", borderRadius:tab === title ? "50px" : "", fontSize:"12px"}}
            onClick={() => setTab({ title, children })}
            href="javascript:void(0);"
            active={tab === title}
          >
            {title}
          </NavLink>
        </NavItem>
      )}
    </Consumer>    
  );

  setTab = ({ title, children }) => {
    const { onSetTab } = this.props
    this.setState({ tab: title, content: children })
    return (
      typeof onSetTab === "function" &&
      onSetTab({ tab: title, content: children })
    )
  };

  getProps = () => {
    return {
      ...this.state,
      setTab: this.setTab
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
      this.setTab(children.props)
    } else if (length > 0) {
      this.setTab(children[0].props)
    }
  }

  
  render() {
    return (
        <Row>
          <Col md="2"></Col>
          <Col md="10">
      <Provider value={this.getProps()}>
        <Nav {...this.props}>{this.props.children}</Nav>
        <div style={style(this.props.bordered)}>{this.state.content}</div>
      </Provider>
      </Col>
      <Col md="2"></Col>
      </Row>
    )
  }
}

