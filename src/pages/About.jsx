import './About.css'

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
                            reflecting upon it, and post what you learned and felt.</p>
                        <p className='about-details-4'>
                            Your post can only be seen by people who are registered as your friend!
                        </p>

                    </div>
                </div>


                <div className='about-dev-container'>
                    <div className="about-dev-top-section">
                        <span className='about-line'></span>
                        <h1 className='about-dev-title'>Samuel</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;