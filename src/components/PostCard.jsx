import './PostCard.css'

const PostCard = (props) => {

    return(
        <div className={`${props.theme}-card postcard-container`}>
            <div className='postcard-user-section'>
                <div className='postcard-user-profile-left'>
                    <img className='user-profile' src={`${props.pic}`} alt="" />
                    <p className='small-font'>{props.user}</p>
                </div>
                <p className='right small-font'>{props.timePosted}</p>
            </div>
            <div className='post-details'>
                <p className='spacing small-font'>{props.message}:</p>
                <p className='spacing small-font'>{props.post}</p>
            </div>
        </div>
    )
}

export default PostCard;