import { useState } from 'react';
import './PostModal.css'
import close from '../assets/nav-icons/whiteclose.svg'

const PostModal = (props) => {

    const [post, setPost] = useState('');

    const onPostChangeHandler = (e) => {
        setPost(e.target.value);
    }

    const onPostSubmitHandler = (e) => {
        e.preventDefault()

        if(post.length <= 0){
            
        }else{
            console.log(post)
            setPost('')
            props.showMobilePostHandler()
        }
    }

    return (
        <>
            <div className={props.postBackdropClass}>
            <div className={`${props.mobilePostClass} ${props.theme}-card`}>
            <div className='passage-verse post-title-section'>
                <span className='post-title'>{props.passage}</span> 
                <span onClick={props.showMobilePostHandler} className='close-button close-post'>
                    <img className='close-icon' src={close} alt="" />
                </span>
            </div>
                    <form className='post-form' action="">
                        <textarea onChange={onPostChangeHandler} value={post} 
                        className='post-text-area' cols="30" rows="10"/>
                        <button type='button' className='submit-post-button button'
                        onClick={onPostSubmitHandler}>Post</button>
                    </form>
            </div>
            </div>
            
        </>
    )
}

export default PostModal;