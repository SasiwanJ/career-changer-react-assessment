import { useState, useEffect } from "react"
import { Button, Form } from 'react-bootstrap'

const Admin = (props) => {
    let setEmployees = props.setEmployees
    const [users, setUsers] = useState(props.employees)

    const deleteHandler = (position) => {
        let tempUsers = [...users]
        tempUsers.splice(position, 1)
        setUsers(tempUsers)
        setEmployees(users)
    }

    const saveHandler = (event) => {
        event.preventDefault();
        let newUser = {
            'name': event.target.name.value,
            'lastname': event.target.lastname.value,
            'position': event.target.position.value
        }
        setUsers([...users, newUser])
        setEmployees([...users, newUser])
    }

    return (
        <div>
            <Form onSubmit={saveHandler}>
                <Form.Control type="text" name="name" placeholder="Name" />
                <Form.Control type="text" name="lastname" placeholder="Last Name" />
                <Form.Control type="text" name="position" placeholder="Position" />
                <Button variant="primary" type="submit">
                    Save
                </Button>
            </Form>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Position</th>
                    <th>Action</th>
                </tr>
                {
                    users.map((user, index) => <tr>
                        <td>{user.name}</td>
                        <td>{user.lastname}</td>
                        <td>{user.position}</td>
                        <td><p onClick={() => deleteHandler(index)}>Delete</p></td>
                    </tr>)
                }
            </table>
        </div>
    )
}



export default Admin