import "./UserCard.css";
function UserCard({ user }) {
    return (
        <>
            <div className="user-card">
                <img src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=800&q=80" alt="User Photo" />
                    <div className="user-details">
                        <h4>Name : {user.name}</h4>
                        <h5>Email :{user.email}</h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis quas assumenda autem numquam ipsum exercitationem voluptatum cum dolorum iure. Tenetur autem perspiciatis at placeat laborum libero magnam labore est quia?</p>
                    </div>
            </div>
        </>
    )
}
export default UserCard;



















