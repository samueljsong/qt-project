import './About.css';
import github from '../assets/plug-icons/github.png';
import codepen from '../assets/plug-icons/codepen.png';
import linkedin from '../assets/plug-icons/linkedin.png';
import insta from '../assets/plug-icons/instagram.png';
import frog from '../assets/frog.jpg';

const About = () => {

    return (
        <>
            <div className="about-parent-container">
                <div className="about-container">
                    <div className='about-top-section'>
                        <h1 className='about-title'>ABOUT</h1>
                        <span className='about-line'></span>
                    </div>
                    <div className='about-details'>
                        <p className='about-details-1'>
                            Quti is a minimalistic web application that aims to assist Christians 
                            in studying and reflecting the bible's passage.
                        </p>
                        <p className='about-details-2'>
                            Everyday, a new passage will be generated. 
                        </p>
                        <p className='about-details-3'>
                            Take your time in reading and 
                            reflecting upon it, and post what you learned and felt.
                            [You can post <b>ONCE</b> a day]</p>
                        <p className='about-details-4'>
                            Your post can only be seen by people who are registered as your friend!
                        </p>

                    </div>
                </div>


                <div className='about-container2'>
                    <div className='about-top-section2'>
                        <span className='about-line'></span>
                        <h1 className='about-dev-title'>Samuel</h1>
                    </div>

                    <div className='about-dev-details'>
                        <p className="about-dev-details1">
                            Hi, my name is Samuel Song and I enjoy creating things that live on the internet.
                        </p>
                        <div className="img-box">
                            <span className='purple-box'></span>
                            <img className='about-image' src={frog} alt="" />
                        </div>

                        <div className='plugs'>
                            <span className='about-line'></span>
                            <div className='plugs-icon-container'>
                                <a href=""><img class='plug-icon' src={github} alt="" /></a>
                                <a href=""><img class='plug-icon' src={codepen} alt="" /></a>
                                <a href=""><img class='plug-icon' src={linkedin} alt="" /></a>
                                <a href=""><img class='plug-icon' src={insta} alt="" /></a>
                            </div>
                            <span className='about-line'></span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About;