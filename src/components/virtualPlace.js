import React from 'react';
import image1 from "../assets/2-5-1024x683.png";
import image2 from "../assets/dreamstime_m_139893577.jpg";
import image3 from "../assets/dreamstime_l_179075121-1-scaled.jpg";
import image4 from "../assets/Logo-4-300x52.png";
function virtualPlace() {
    return (
        <section>
            <div className='virtual-section'>
                <div className='virtual-section-div'>
                    <p className='virtual-section-slide'>
                        Companies and entrepreneurs - Devised for creating professional business presentations - Business seminars - Companies and entrepreneurs - Devised for creating professional business presentations - Business seminars -
                        Companies and entrepreneurs - Devised for creating professional business presentations - Business seminars - Companies and entrepreneurs - Devised for creating professional business presentations - Business seminars -
                    </p>
                </div>
                <div className='virtual-boxs'>
                    <div>
                        <img src={image1} alt='wait' />
                    </div>
                    <div>
                        <img src={image1} alt='wait' />
                    </div>
                    <div>
                        <p>Connect with businesses<br />
                            through a virtual place</p>
                    </div>
                </div>
                <div className='virtual-boxs'>
                    <div>
                        <img src={image1} alt='wait' />
                    </div>
                    <div>
                        <img src={image1} alt='wait' />
                    </div>
                    <div>
                        <p>Connect with businesses<br />
                            through a virtual place</p>
                    </div>
                </div>
            </div>
            <div className='full-img'>
                <img src={image2} alt='wait' />
            </div>
            <div className='our-team'>
                <p>Join us on</p>
                <p>Buzzing Universe!</p>
            </div>
            <div className='full-img'>
                <img src={image3} alt='wait' />
            </div>
            <div className='footer-landing'>
                <img src={image4} alt='wait' />
                <p>© 2024</p>
            </div>
        </section>
    );
}

export default virtualPlace;
