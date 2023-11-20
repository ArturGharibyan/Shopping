import React from 'react';
import { useTypedSelector } from '../../ReduxTypeScript/hooks/useTypedSelector';
import { useParams } from 'react-router-dom';
import { Stack } from 'react-bootstrap';

const Profile = () => {

const {user}=useTypedSelector(state=>state.user)
const {userid} = useParams()
const person =user.find((item:any)=>item.id==userid)


    return (
        <div className="offcanvas offcanvas-end" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">Profile</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
            <Stack direction="horizontal" gap={5} className=' d-flex  align-items-center'>
                
                <div className='me-auto w-100'>
                    <h6 className='text-muted' style={{ fontSize: "20px" }}>Name: {person.name}</h6>
                    <hr/>
                    <h6 className='text-muted' style={{ fontSize: "20px" }}>Surname: {person.surname}</h6>
                    <hr/>
                    <h6 className='text-muted' style={{ fontSize: "20px" }}>Email: {person.email}</h6>
                    <hr/>
                </div>
            </Stack>
            </div>
        </div>
    );
};

export default Profile;