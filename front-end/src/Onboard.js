import React, {useState, useEffect} from 'react';

const Onboarding = ()=>{
    
    useEffect( () =>{
        const registerUser = user => {
            axios
                .post('/user', {
                    FName: user.fName,
                    LName: user.lName,
                    Email: user.email,
                    CompanyName: user.companyName,
                    role: user.role
                })
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })
        }
        registerUser()
    }, [])
}