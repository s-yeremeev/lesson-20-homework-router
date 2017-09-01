import React from "react"
import { browserHistory } from "react-router";

export default class LoginContainer extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  clickBack() {
    browserHistory.push("/home")
  }


  render() {
    return (
      <section>
        Login Page !
        <button
          className="button is-success is-outlined is-large is-fullwidth"
          onClick={this.clickBack}
        >Home
        </button>
      </section>
    )
  }
}