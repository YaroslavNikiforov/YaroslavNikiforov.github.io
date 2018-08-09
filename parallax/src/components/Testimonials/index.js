import React, {Component} from 'react';
import '../../styles/css/App.css';
import CornerBottom from "../CornerBottom";
import CornerTop from "../CornerTop";

class Testimonials extends Component {

    render() {
        return (
            <section className="testimonials">
                <CornerTop/>
                <div className="testimonials__container">
                    <h2 className="testimonials__title">TESTIMONIALS</h2>
                    <h6 className="testimonials__subtitle">Lorem ipsum is simply dummy text of the printing</h6>
                    <blockquote className="testimonials__quote">Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Ab consectetur consequatur laborum placeat qui sint veniam. Aliquam
                        consequatur est facilis, iusto magni nam officiis optio porro quia repellendus rerum
                        sunt ut, vel voluptates voluptatum!
                    </blockquote>
                    <cite className="testimonials__quote-author">- Shoaib Ahmet</cite>
                </div>
                <CornerBottom/>
            </section>
        )

    }
}

export default Testimonials;