import './ProfilePostComponent.css'

const ProfilePostComponent = (props) => {

    return(
        <>
            <div className={`profile-post-container small-font ${props.theme}-card`}>
                {props.title}
            </div>
        </>
    )
}

export default ProfilePostComponent;