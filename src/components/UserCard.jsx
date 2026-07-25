const UserCard = ({ user }) => {
    const { firstName, lastName, age, gender, photoURL, about } = user;
    return (
        <div className="card bg-base-100 w-76 shadow-sm">
            <figure>
                <img
                    src={photoURL}
                    alt="Profile picture" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{firstName + " " + lastName}</h2>
                <h3>{age}</h3>
                <h3>{gender}</h3>
                <p>{about}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">Ignore</button>
                    <button className="btn btn-secondary">Interested</button>
                </div>
            </div>
        </div>
    )
}

export default UserCard;