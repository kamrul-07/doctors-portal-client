import React, {useState} from 'react';
import { Button, TextField, Alert } from '@mui/material';
import useAuth  from '../../../../hooks/useAuth'

const MakeAdmin = () => {
    const [email,setemail]=useState("")
    const [success,setSuccess] = useState (false)
    const {token} =useAuth()
    const handleOnBlur = e => {
        setemail(e.target.value);
     }

     const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                "authorization":`Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
                
            })

        e.preventDefault()
    }

 
    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success"> Created successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;