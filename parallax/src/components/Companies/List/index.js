import React, {Component} from 'react';
import '../../../styles/css/App.css';
import logo1 from './img/behance.svg'
import logo2 from './img/envato.svg'
import logo3 from './img/flickr.svg'
import logo4 from './img/backbone.svg'
import logo5 from './img/angular.svg'
import logo6 from './img/algolia.svg'
import logo7 from './img/git.svg'
import logo8 from './img/deviantart.svg'


class List extends Component {

    render() {
        return (
            <ul className="list">
                <li className="list__item">
                    <a href="" className="list__link"><img src={logo1} alt="" className="list__logo"/></a>
                </li>
                <li className="list__item">
                    <a href="" className="list__link"><img src={logo2} alt="" className="list__logo"/></a>
                </li>
                <li className="list__item">
                    <a href="" className="list__link"><img src={logo3} alt="" className="list__logo"/></a>
                </li>
                <li className="list__item">
                    <a href="" className="list__link"><img src={logo4} alt="" className="list__logo"/></a>
                </li>
                <li className="list__item">
                    <a href="" className="list__link"><img src={logo5} alt="" className="list__logo"/></a>
                </li>
                <li className="list__item">
                    <a href="" className="list__link"><img src={logo6} alt="" className="list__logo"/></a>
                </li>
                <li className="list__item">
                    <a href="" className="list__link"><img src={logo7} alt="" className="list__logo"/></a>
                </li>
                <li className="list__item">
                    <a href="" className="list__link"><img src={logo8} alt="" className="list__logo"/></a>
                </li>
            </ul>
        )
    }
}

export default List;