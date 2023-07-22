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

    const temporaryPassage = [
        'In the beginning God created the heavens and the earth.',
        'And the earth was waste and void; and darkness was upon the face of the deep: and the Spirit of God [a]moved upon the face of the waters.',
        'And God said, Let there be light: and there was light.',
        'And God saw the light, that it was good: and God divided the light from the darkness.',
        'And God called the light Day, and the darkness he called Night. And there was evening and there was morning, one day',
        'And God said, Let there be a [b]firmament in the midst of the waters, and let it divide the waters from the waters.',
        'And God made the firmament, and divided the waters which were under the firmament from the waters which were above the firmament: and it was so.',
        'In the beginning God created the heavens and the earth.',
        'And the earth was waste and void; and darkness was upon the face of the deep: and the Spirit of God [a]moved upon the face of the waters.',
        'And God said, Let there be light: and there was light.',
        'And God saw the light, that it was good: and God divided the light from the darkness.',
        'And God called the light Day, and the darkness he called Night. And there was evening and there was morning, one day',
        'And God said, Let there be a [b]firmament in the midst of the waters, and let it divide the waters from the waters.',
        'And God made the firmament, and divided the waters which were under the firmament from the waters which were above the firmament: and it was so.',
        'In the beginning God created the heavens and the earth.',
        'And the earth was waste and void; and darkness was upon the face of the deep: and the Spirit of God [a]moved upon the face of the waters.',
        'And God said, Let there be light: and there was light.',
        'And God saw the light, that it was good: and God divided the light from the darkness.',
        'And God called the light Day, and the darkness he called Night. And there was evening and there was morning, one day',
        'And God said, Let there be a [b]firmament in the midst of the waters, and let it divide the waters from the waters.',
        'And God made the firmament, and divided the waters which were under the firmament from the waters which were above the firmament: and it was so.',
        'In the beginning God created the heavens and the earth.',
        'And the earth was waste and void; and darkness was upon the face of the deep: and the Spirit of God [a]moved upon the face of the waters.',
        'And God said, Let there be light: and there was light.',
        'And God saw the light, that it was good: and God divided the light from the darkness.',
        'And God called the light Day, and the darkness he called Night. And there was evening and there was morning, one day',
        'And God said, Let there be a [b]firmament in the midst of the waters, and let it divide the waters from the waters.',
        'And God made the firmament, and divided the waters which were under the firmament from the waters which were above the firmament: and it was so.',
    ]

    return(
        <div className='landing-container'>
            <div className={`profile-section ${props.theme}-card`}>
                
            </div>
            <div className='middle-section'>
                <div className={`todays-message-container`}>
                    <p className='small-font'>Today's passage is</p>
                    <p className='bible-verse'>{props.passage}</p>
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
                            return <p className='small-font'><span className='purple'>{verse.verse}.</span> {verse.text}</p>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default LandingPage;