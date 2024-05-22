import React, { useEffect, useState } from 'react';
import { Modal, Button} from 'react-bootstrap';
import { postData } from '../Service/Services';
import { toast } from 'react-toastify';
const Passenger = () => {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    useEffect(()=>{
        debugger
        setShow(true);
    },[]);
    const[passengerObj,setpassengerObj]=useState({
        firstName :'',
        lastName:'',
        email:'',
        phone:'',
        password:''
    });
    const handleChange =(e)=>{
        debugger
        const{name,value} =e.target;
        setpassengerObj((prevState)=>({
            ...prevState,
            [name] :value
        }))
    }
    const handleAdd =()=>{
        debugger
        try {
           postData('AddUpdatePassengers',passengerObj).then(result=>{
            if(result!=undefined){
                toast.success('Passenger Added...!');
                setShow(false);
            }
           }) 
        } catch (error) {
            toast(error);
        }
    }
    return (
        <>
           
            <Modal show={show} onHide={handleClose} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  
                <div >
                
                    <div className='card-header' style={{ backgroundColor: '#1e6a99' }}>
                        
                    </div>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <label>First Name</label>
                                <input type="text" placeholder='First Name' className='form-control' name="firstName" onChange={handleChange} />
                            </div>
                            <div className='col-md-6'>
                                <label>Last Name</label>
                                <input type="text" placeholder='Last Name' className='form-control' name="lastName" onChange={handleChange} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <label>Email</label>
                                <input type="text" placeholder='Email' className='form-control' name="email" onChange={handleChange} />
                            </div>
                            <div className='col-md-6'>
                                <label>Phone</label>
                                <input type="text" placeholder='Phone' className='form-control' name="phone" onChange={handleChange} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <label>Password</label>
                                <input type="text" placeholder='Password' className='form-control' name="password" onChange={handleChange} />
                            </div>

                        </div>
                    </div>
               
                </div>  
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" size="sm" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" size="sm" onClick={handleAdd}>
                        Add 
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    );
};

export default Passenger;