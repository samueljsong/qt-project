import { useState } from 'react';
import './PostModal.css'

const PostModal = (props) => {

    const [post, setPost] = useState('');

    const onPostChangeHandler = (e) => {
        setPost(e.target.value);
    }

    const onPostSubmitHandler = (e) => {
        e.preventDefault();
        console.log(post)
        setPost('')
    }

    return (
        <>
            <div className={props.postBackdropClass} onClick={props.showMobilePostHandler}></div>
            <div className={`${props.mobilePostClass} ${props.theme}-card`}>
                    <form className='post-form' action="">
                        <span className='passage-verse post-title'>{props.passage}</span>
                        <textarea onChange={onPostChangeHandler} value={post} 
                        className='post-text-area' cols="30" rows="10"/>
                        <button type='button' className='submit-post-button button'
                        onClick={onPostSubmitHandler}>Post</button>
                    </form>
            </div>
        </>
    )
}

export default PostModal;