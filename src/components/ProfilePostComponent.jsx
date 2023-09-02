import './ProfilePostComponent.css'

const ProfilePostComponent = (props) => {

    return(
        <>
            <div className='profile-post-container small-font'>
                {props.title}
            </div>
        </>
    )
}

export default ProfilePostComponent;