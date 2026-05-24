const UserCard = ({user}) => {

    const { firstName, lastName, age, About, gender, PhotoURL } = user

    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={PhotoURL}
                    alt="User Photo" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{firstName +" "+lastName} </h2>
                {age && gender && <p>{age + " " + gender}</p>}
                <p>{About}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">Interested</button>
                    <button className="btn btn-secondary">Ignored</button>
                </div>
            </div>
        </div>)
};

export default UserCard;