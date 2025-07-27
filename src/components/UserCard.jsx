function UserCard({ user }){
    return (
    <>
        <div className="user-card">
            <h2>User Card</h2>
            <p>Name : {user.name}</p>
            <p>Email :{user.email}</p>

        </div>
    </>
    )
}
export default UserCard;



















