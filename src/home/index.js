import React from "react";
import { Link } from "react-router";

export default class PageContainer extends React.PureComponent {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <nav className="nav has-shadow" id="top">
                    <div className="container">
                        <div className="nav-left">
                            <a className="nav-item" href="../index.html">
                                <img src="../images/bulma.png" alt="Description" />
                            </a>
                        </div>
                        <span className="nav-toggle">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                        <div className="nav-right nav-menu">
                            <Link to="/home" className="nav-item is-tab is-active">
                                Home
                          </Link>
                            <Link to="/features" className="nav-item is-tab">
                                Features
                          </Link>
                            <Link to="/team" className="nav-item is-tab">
                                Team
                          </Link>
                            <Link to="/help" className="nav-item is-tab">
                                Help
                          </Link>
                            <span className="nav-item">
                                <Link to="/login" className="button">
                                    Log in
                          </Link>
                                <Link to="/signup" className="button is-info">
                                    Sign up
                        </Link>
                            </span>
                        </div>
                    </div>
                </nav>
                <section className="section">
                    <div className="container content">
                        <p className="has-text-centered">Skeleton template for a basic layout.</p>
                    </div>
                </section>
            </div>
        )
    }
}