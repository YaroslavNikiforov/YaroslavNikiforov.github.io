import React, {Component} from 'react';
import '../../../styles/css/App.css';
import photo1 from './img/photo-1.jpg'
import photo2 from './img/photo-2.jpg'
import photo3 from './img/photo-3.jpg'

class Team extends Component {

    render() {
        return (
            <div className="team">
                <div className="team__member">
                    <img src={photo1} alt="" className="team__photo"/>
                    <p className="team__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur eum
                        id temporibus! Earum eligendi excepturi explicabo fuga labore molestiae nobis porro quo
                        similique.</p>
                </div>
                <div className="team__member">
                    <img src={photo2} alt="" className="team__photo"/>
                    <p className="team__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eaque
                        eligendi expedita explicabo hic, laudantium magni mollitia quam quas quod repellendus rerum,
                        vel!</p>
                </div>
                <div className="team__member">
                    <img src={photo3} alt="" className="team__photo"/>
                    <p className="team__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cum,
                        eveniet excepturi fugiat minus nobis nulla numquam omnis quam quas quidem tempora unde.</p>
                </div>
            </div>
        )
    }
}

export default Team;