import './LandingPage.css'
import PostCard from '../components/PostCard'
import pic1 from '../assets/asdf.jpg'
import pic2 from '../assets/dfdfd.jpg'
import pic3 from '../assets/ss.jpg'
import book from '../assets/nav-icons/whitebook.svg'
import close from '../assets/nav-icons/whiteclose.svg'
import { useEffect, useState } from 'react'

const LandingPage = (props) => {
    const [mobilePassageShow, setMobilePassageShow] = useState(false);
    const [backdropClass, setBackdropClass] = useState(`backdrop`)
    const [mobilePassageClass, setMobilePassageClass] = useState(`mobile-passage-container`)

    const showMobilePassageHandler = () => {
        setMobilePassageShow(!mobilePassageShow)
    }
    
    useEffect(() => {
        if(mobilePassageShow){
            setBackdropClass('backdrop')
            setMobilePassageClass('mobile-passage-container')
        }else{
            setBackdropClass('invisible')
            setMobilePassageClass('invisible')
        }
    },[mobilePassageShow])


    const temporaryData = [
        {
            user: "Samuel",
            timePosted: "07-20-2023",
            message: "Matthew 1:1-24",
            post: `This is a test data so i can see how the card looks when I create a card out of data that is going to be registered in the future.`,
            pic: pic1
        },
        {
            user: "Emily",
            timePosted: "07-20-2023",
            message: "Matthew 1:1-24",
            post: `This is a test data so i can see how the card looks when I create a card out of data that is going to be registered in the future.`,
            pic: pic2
        },
        {
            user: "David",
            timePosted: "07-20-2023",
            message: "Matthew 1:1-24",
            post: `This is a test data so i can see how the card looks when I create a card out of data that is going to be registered in the future.`,
            pic: pic3
        },
        {
            user: "Daniel",
            timePosted: "07-20-2023",
            message: "Matthew 1:1-24",
            post: `This is a test data so i can see how the card looks when I create a card out of data that is going to be registered in the future.`,
            pic: pic1
        }
    ]

    return(
        <>
            <div className={backdropClass} onClick={showMobilePassageHandler}>
                <div className={`${mobilePassageClass} ${props.theme}-card`}>
                    <p className='bible-verse'>{props.passage} 
                        <span onClick={showMobilePassageHandler} className='close-button'><img className='close-icon' src={close} alt="" /></span>
                    </p>
                    <div className='flexboxCol verses'>
                        {
                            props.passageVerse.map(verse => {
                                return <p className='small-font' key={crypto.randomUUID()}><span className='purple'>{verse.verse}.</span> {verse.text}</p>
                            })
                        }
                    </div>
                </div>
            </div>

            <div className='landing-container'>

                <div className={`profile-section ${props.theme}-card`}>
                    
                </div>
                
                <div className='middle-section'>
                    <div className={`todays-message-container`}>
                        <p className='small-font'>Today's passage is</p>
                        <div className='title-section'>
                            <p className='bible-verse'>{props.passage}</p>
                            <div className='mobile-passage-button' onClick={showMobilePassageHandler}>
                                <img className='book-icon' src={book} alt="" />
                            </div>
                        </div>
                        <button className='button post-button'>Post your thoughts</button>
                    </div>
                    <div className='post-container'>
                        {
                            temporaryData.map(post => {
                                return <PostCard theme={props.theme} user={post.user} 
                                        timePosted={post.timePosted} message={post.message}
                                        post={post.post} pic={post.pic} key={crypto.randomUUID()}/>
                            })
                        }
                    </div>
                </div>

                <div className={`passage-section ${props.theme}-card`}>
                    <p className='bible-verse'>{props.passage}</p>
                    <div className='flexboxCol verses'>
                        {
                            props.passageVerse.map(verse => {
                                return <p className='small-font' key={crypto.randomUUID()}><span className='purple'>{verse.verse}.</span> {verse.text}</p>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage;