import React from 'react'
import './infoSection.css';
import image from '../../images/img-4.jpg';
import image2 from '../../images/img-5.jpg';
function InfoSection() {
    return (
        <div className="info-section">
            <div className="info-container">
                <div className="info-image">
                    <img src={image} alt='image' />
                </div>
                <div className="info-text">
                    <h1>Hello<span>There</span></h1>
                    <h2>Iam <span>Faiza Khalid</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas nec erat et lorem pulvinar interdum.
                    Donec molestie sem ut justo scelerisque mollis at ac ligula.
                    Orci varius natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus. Curabitur vestibulum leo a sagittis mollis.
                    Praesent iaculis convallis ipsum ut auctor. Maecenas ante nunc,
                    aliquet ac odio sit amet, maximus molestie turpis.
                    Nullam euismod pulvinar enim, ut suscipit tellus sodales et.
                      </p>
                </div>
            </div>
            <div className="info-container">
            <div className="info-text">
                    <h1>Hello<span>There</span></h1>
                    <h2>Iam <span>Faiza Khalid</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas nec erat et lorem pulvinar interdum.
                    Donec molestie sem ut justo scelerisque mollis at ac ligula.
                    Orci varius natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus. Curabitur vestibulum leo a sagittis mollis.
                    Praesent iaculis convallis ipsum ut auctor. Maecenas ante nunc,
                    aliquet ac odio sit amet, maximus molestie turpis.
                    Nullam euismod pulvinar enim, ut suscipit tellus sodales et.
                      </p>
                </div>
                <div className="info-image">
                    <img src={image2} alt='image' />
                </div>
               
            </div>
        </div>
    )
}

export default InfoSection;
