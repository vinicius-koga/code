//@ts-nocheck
function UserCards() {
	// dummy json
    const users = [
        { name: 'Vinicius', idade: 25 },
        { name: 'Ana', idade: 22 },
        { name: 'Larissa', idade: 15 },
    ];

    return (
        <div>

			{/* creates a card for each user */}
            {users.map((user) => (
                <div key={user.name} className="user-card">
                    <h2>{user.name}</h2>
                    <p>Idade: {user.idade}</p>
                </div>
            ))}

        </div>
    );
}

export default UserCards;