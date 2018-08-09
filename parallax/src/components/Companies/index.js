import React, {Component} from 'react';
import '../../styles/css/App.css';
import List from "./List";
import CornerBottom from "../CornerBottom";
import CornerTop from "../CornerTop";


class Companies extends Component {

    render() {
        return (
            <section className="companies">
                <CornerTop/>
                <div className="companies__container">
                    <h2 className="companies__title">COMPANIES</h2>
                    <h6 className="companies__subtitle">Lorem ipsum is simply dummy text of the printing</h6>
                    <List/>
                </div>
                <CornerBottom/>
            </section>
        )
    }
}

export default Companies;