import React, {Component} from 'react';
import '../../styles/css/App.css';

class Why extends Component {

    render() {
        return (
            <section className='why'>
                <div className="why__container">
                    <h2 className="why__title">WHY?</h2>
                    <h6 className="why__subtitle">Lorem ipsum is simply dummy text of the printing</h6>
                    <h4 className="why__equation">INNOVATION + PASSION + EXPERIENCE + INNOVATION
                        + PASSION + EXPERIENCE = </h4>
                </div>
                <footer className="why__footer">
                    <p className="why__copyright">Copyright © 2018 Company Name. All rights reserved.</p>
                    <p className="why__copyright">Designed by <span>Iconic Graphics.</span></p>
                </footer>
            </section>
        )
    }
}

export default Why;