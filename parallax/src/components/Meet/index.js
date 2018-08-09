import React, {Component} from 'react';
import '../../styles/css/App.css';
import Team from "./Team";

class Meet extends Component {

    render() {
        return (
            <section className='meet'>
                <div className="meet__container">
                    <h2 className="meet__title">MEET US</h2>
                    <h6 className="meet__subtitle">Lorem ipsum is simply dummy text of the printing</h6>
                    <Team/>
                </div>
            </section>
        )
    }
}

export default Meet;