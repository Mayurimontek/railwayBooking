import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getData } from '../Service/Services';
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import { MyContext } from '../MyContextProvider';
import { Modal, Button } from 'react-bootstrap';

const Login = () => {
    const { updateLoggedUserData } = useContext(MyContext);
    const navigate =useNavigate();
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const [phone, setPhone] = useState();
    const [password, setPassword] = useState('');
    const validate = () => {
        if (!phone || !password) {
            toast.error('Please enter both Phone and Password');
            return false;
        }
        return true;
    };
    const handleLogin =()=>{
        if (validate()) {
            try {
                debugger
                getData('GetAllPassengers').then(result => {
                    const users = result;
                    const allUsers = users.flat();
                    let isUserPresent = allUsers.find(user => user.phone === phone && user.password === password);
                    if (isUserPresent) {
                        updateLoggedUserData(isUserPresent);
                        toast.success('Login Successfull...!');
                        localStorage.setItem('loginDetails', JSON.stringify(isUserPresent));
                        navigate("/search");
                    } else {
                        toast.error('Login failed...!');
                    }
                })
            } catch (error) {
                console.error('Error:', error);
            }
        }
    }
   
    return (
        <div>
            
            <Modal show={show} onHide={handleClose} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  
               
                
                   
                    <div >
                    <div className='container'>
                   
                    <div >
                        <div className='row mt-3'>
                            <div className='col-3 d-flex align-items-center justify-content-end'>
                                <label className='mb-0'>Phone :</label>
                            </div>
                            <div className='col-9'>
                                <input type="text" className='form-control' value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <div className='col-3 d-flex align-items-center justify-content-end'>
                                <label className='mb-0'>Password :</label>
                            </div>
                            <div className='col-9'>
                                <input type="password" className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>
                    </div>
                   
            </div>
               
                </div>  
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" size="sm" onClick={handleLogin}>
                        Login
                    </Button>
                    <Button variant="success" size="sm" >
                        Add 
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Login;