import './ProfilePostComponent.css'

const ProfilePostComponent = (props) => {

    return(
        <>
            <div className='profile-post-container'>
                {props.title}
            </div>
        </>
    )
}

export default ProfilePostComponent;