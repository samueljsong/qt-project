import './ProfilePage.css';
import profilepic from '../assets/ss.jpg';
import ProfilePostComponent from '../components/ProfilePostComponent';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ProfilePage = (props) => {

    const dummy_posts = [
        {
            postID: 'id1',
            bibleVerseTitle: "Gen 1:1",
            description: "stuyff",
            likes: 5
        },
        {
            postID: 'id2',
            bibleVerseTitle: "Gen 5:1",
            description: "stuyff",
            likes: 5
        },
        {
            postID: 'id3',
            bibleVerseTitle: "Dav 23:1",
            description: "stuyff",
            likes: 5
        },
        {
            postID: 'id4',
            bibleVerseTitle: "Luk 13:13",
            description: "stuyff",
            likes: 5
        },
        {
            postID: 'id5',
            bibleVerseTitle: "Mat 11:31",
            description: "stuyff",
            likes: 5
        },
        {
            postID: 'id6',
            bibleVerseTitle: "Mat 11:31",
            description: "stuyff",
            likes: 5
        }
    ]

    const {mode, setMode} = useContext(ThemeContext);
    
    return(
        <>
            <div className="profile-general-contianer">
                <div className='profile-container'>
                    <div className='profile-info-section'>
                        <img className='profile-picture' src={profilepic} alt="" />
                        <div className='profile-text-section'>
                            <div className='profile-stats'>
                                <div className='profile-posts small-font'>
                                    <p className='purple-text'>1</p>
                                    <p>Post</p>
                                </div>
                                <div className="profile-friends small-font">
                                    <p className='purple-text'>25</p>
                                    <p>Friends</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='profile-bios-container'>
                        <div className='profile-name'>Samueljsong</div>
                        <div className='profile-bios-details small-font'>
                            <p>Shalom...</p>
                            <p>Only through Christ</p>
                        </div>
                    </div>

                    <div className='profile-edit-container'>
                        <div className={`profile-edit-button ${mode}-card`}><p className='small-font'>Edit profile</p></div>
                        <div className={`profile-friends-button ${mode}-card`}><p className='small-font'>Friends list</p></div>
                    </div>

                    <div className='about-line profile-line'></div>
                    
                    <p className='small-font profile-post-title'>Posts</p>
                    <div className='profile-posts-container'>
                        {
                            dummy_posts.map(post => {
                                return <ProfilePostComponent key={post.postID} title={post.bibleVerseTitle} theme={props.theme}/>
                            })
                        }
                    </div>
                    

                </div>
            </div>
        </>
    )
}

export default ProfilePage;