import React, { createContext, useState } from 'react';
const MyContext = createContext();

const MyContextProvider = ({children}) => {
    const [travelDetails, setTravelDetails] = useState({
        fromStation: '',
        toStation: '',
        travelDate: '',
    });
    const [loggedUserData, setLoggedUser] = useState({});
    const updateLoggedUserData = (user) => {
        setLoggedUser(user);
    }
    const updateTravelDetails = (details) => {
        setTravelDetails((prevDetails) => ({
            ...prevDetails,
            ...details,
        }));
       

       
    };

    return (
        <div>
           <MyContext.Provider  value={{ travelDetails, updateTravelDetails,loggedUserData, updateLoggedUserData }}>
            {children}
            </MyContext.Provider> 
        </div>
    );
};

export {MyContext,MyContextProvider}