import React, {Component, Fragment} from 'react';
import './styles/css/App.css';
import Home from "./components/Home/index";
import What from "./components/What/index";
import Companies from "./components/Companies";
import Meet from "./components/Meet";
import Testimonials from "./components/Testimonials";
import Why from "./components/Why";

class App extends Component {
    render() {
        return (
            <Fragment>
                <div className='parallax-wrapper'>
                    <Home/>
                    <What/>
                </div>
                <div className='parallax-wrapper'>
                    <Companies/>
                    <Meet/>
                </div>
                <div className='parallax-wrapper'>
                    <Testimonials/>
                    <Why/>
                </div>
            </Fragment>
        );
    }
}

export default App;
