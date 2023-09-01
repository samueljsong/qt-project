import './ProfilePage.css';
import profilepic from '../assets/ss.jpg';

const ProfilePage = () => {
    
    return(
        <>
            <div className="profile-general-contianer">
                <div className='profile-container'>
                    <div className='profile-info-section'>
                        <img className='profile-picture' src={profilepic} alt="" />
                        <div className='profile-text-section'>
                            <div className='profile-stats'>
                                <div className='profile-posts'>
                                    <p>1</p>
                                    <p>Post</p>
                                </div>
                                <div className="profile-friends">
                                    <p>25</p>
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
                        <div className='profile-edit-button'><p className='small-font'>Edit profile</p></div>
                        <div className='profile-friends-button'><p className='small-font'>Friends list</p></div>
                    </div>

                    <div className='profile-posts-container'>
                        <h4>Posts</h4>
                        <div className='profile-posts'>
                            
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ProfilePage;