import { useState, useEffect } from "react"

const User = (props) => {
    let setEmployees = props.setEmployees
    const [users, setUsers] = useState(props.employees)

    return (
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Position</th>
                </tr>
                {
                    users.map((user, index) => <tr>
                        <td>{user.name}</td>
                        <td>{user.lastname}</td>
                        <td>{user.position}</td>
                    </tr>)
                }
            </table>
        </div>
    )
}



export default User