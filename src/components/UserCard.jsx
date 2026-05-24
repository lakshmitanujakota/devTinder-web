const UserCard = ({user}) => {

    const { firstName, lastName, age, about, gender, photoURL } = user

    return (
        <div className="card w-96 bg-base-100 shadow-2xl">
            <figure  className="px-6 pt-6">
                <img
                    src={photoURL}
                    alt="User Photo" 
                    className="rounded-2xl h-72 w-full object-cover" />
            </figure>
            <div  className="card-body items-center text-center">
                <h2 className="card-title text-2xl">{firstName +" "+lastName} </h2>
                {age && gender && <p className="text-sm opacity-70">{age + " " + gender}</p>}
                <p className="mt-2 text-base-content">{about}</p>
                <div className="card-actions mt-4">
                    <button className="btn btn-primary">Interested</button>
                    <button  className="btn btn-outline btn-secondary">Ignored</button>
                </div>
            </div>
        </div>)
};

export default UserCard;