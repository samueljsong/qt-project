import './LandingPage.css'
import PostCard from '../components/PostCard'
import pic1 from '../assets/asdf.jpg'
import pic2 from '../assets/dfdfd.jpg'
import pic3 from '../assets/ss.jpg'

const LandingPage = (props) => {

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
        <div className='landing-container'>
            <div className={`profile-section ${props.theme}-card`}>

            </div>
            <div className='middle-section'>
                <div className='todays-message-container'>
                    <p>Today's message is</p>
                    <p className='bible-verse'>Matthew 1:1-24</p>
                    <button className='button post-button'>Post your thoughts</button>
                </div>
                <div className='post-container'>
                    {
                        temporaryData.map(post => {
                            return <PostCard theme={props.theme} user={post.user} 
                                    timePosted={post.timePosted} message={post.message}
                                    post={post.post} pic={post.pic}/>
                        })
                    }
                </div>
            </div>
            <div className={`friends-section ${props.theme}-card`}>

            </div>
        </div>
    )
}

export default LandingPage;