function ProfileCard({title, handle, image, description}){

    //We can define variables to not have to write props dot over and over again
    // const title = props.title;
    // const handle = props.handle;

    //we can use destructuring to define multiple variables at the same time from the same object
    // const {title, handle} = props;

    //OR we can change the argument to be the destructured properties directly

    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={image} alt="pda logo" />
                </figure>
            </div>

            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">{title}</p>
                    <p className="subtitle is-6">{handle}</p>
                </div>
                <div className="content">
                    {description}
                </div>
            </div>

        </div>)
}

export default ProfileCard;