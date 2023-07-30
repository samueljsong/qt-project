import './LandingPage.css'
import PostCard from '../components/PostCard'
import pic1 from '../assets/asdf.jpg'
import pic2 from '../assets/dfdfd.jpg'
import pic3 from '../assets/ss.jpg'
import book from '../assets/nav-icons/whitebook.svg'
import close from '../assets/nav-icons/whiteclose.svg'
import post from '../assets/nav-icons/post-icon.svg'
import { useEffect, useState } from 'react'


import PostModal from '../components/PostModal'

const LandingPage = (props) => {
    const [mobilePassageShow, setMobilePassageShow] = useState(false);
    const [backdropClass, setBackdropClass] = useState(`backdrop`)
    const [mobilePassageClass, setMobilePassageClass] = useState(`mobile-passage-container`)

    const [mobilePostShow, setMobilePostShow] = useState(false)
    const [postBackdropClass, setPostBackdropClass] = useState('invisible');
    const [mobilePostClass, setMobilePostClass] = useState('invisible')
    

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

    const showMobilePostHandler = () => {
        setMobilePostShow(!mobilePostShow)
    }

    useEffect(() => {
        if(mobilePostShow){
            setPostBackdropClass('backdrop')
            setMobilePostClass('mobile-post-container')
        }else{
            setPostBackdropClass('invisible')
            setMobilePostClass('invisible')
        }
    }, [mobilePostShow])


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

            <div className={backdropClass} onClick={showMobilePassageHandler}></div>
                <div className={`${mobilePassageClass} ${props.theme}-card`}>
                    <p className='bible-verse passage-verse'>{props.passage} 
                    <span className='flexboxRow'>
                        <span className='close-button'>
                            <img className="close-icon" src={post} alt="" />
                        </span>
                        <span onClick={showMobilePassageHandler} className='close-button'>
                            <img className='close-icon' src={close} alt="" />
                        </span>
                    </span>
                    </p>
                    <div className='flexboxCol verses'>
                        {
                            props.passageVerse.map(verse => {
                                return <p className='small-font' key={crypto.randomUUID()}><span className='purple'>{verse.verse}.</span> {verse.text}</p>
                            })
                        }
                    </div>
                </div>
            
            
            <PostModal postBackdropClass={postBackdropClass} 
            showMobilePostHandler={showMobilePostHandler}
            mobilePostClass={mobilePostClass} theme={props.theme}
            passage={props.passage}/>


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
                        <button className='button post-button'
                        onClick={showMobilePostHandler}>Post your thoughts</button>
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