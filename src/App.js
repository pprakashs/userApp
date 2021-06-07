import { useEffect, useState } from 'react';

function App() {
	const [users, setUsers] = useState([]);
	const [button, setButton] = useState({});
	useEffect(() => {
		(async function () {
			const res = await fetch('https://jsonplaceholder.typicode.com/users');
			const users = await res.json();
			setUsers(users);
		})();
	}, []);
	const handleClick = (id) => {
		setButton((prevState) => {
			if (prevState[id]) {
				delete prevState[id];
				return {
					...prevState,
				};
			}
			return {
				...prevState,
				[id]: id,
			};
		});
	};
	return (
		<div className="App">
			{console.log(button)}
			<table className="table" width="100">
				<thead>
					<tr>
						<th>#id</th>
						<th>Name</th>
						<th>Username</th>
						<th>Email</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<tr key={user.id}>
							<th># {user.id}</th>
							<td>{user.name}</td>
							<td>{user.username}</td>
							<td>{user.email}</td>
							<td>
								<button type="button" onClick={() => handleClick(user.id)}>
									{button[user.id] ? 'Inactive' : 'Active'}
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default App;
