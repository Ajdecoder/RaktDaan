import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getDatabase, ref, push } from 'firebase/database';
import Footer from './Footer';
import fireDb from './backend/Firebase';

export default function Donor() {
    const db = getDatabase();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [location, setLocation] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            name,
            email,
            dateOfBirth,
            location,
            bloodGroup,
            mobileNumber,
        };

        try {
            // Get a reference to the Firebase Realtime Database using fireDb
            const dbRef = ref(fireDb, 'donors');

            // Push the form data to the 'donors' node in the database
            const newDonorRef = push(dbRef, formData);
            console.log('Donor added with key:', newDonorRef.key);
            console.log('The data is:', formData);

            // Handle the response from the database as needed

            // Redirect or perform additional actions if necessary
            navigate('/'); // Adjust the route accordingly

        } catch (error) {
            console.error('Error submitting donor information:', error);
            // Handle the error appropriately (e.g., show an error message to the user)
        }
    };



    return (
        <>
            <Form
                className='bg-dark w-50 align-center d-flex flex-column justify-align-content-center align-item-center m-auto rounded-5 mt-5'
                onSubmit={handleSubmit}
            >
                <Form.Group className="mb-3 w-50 mx-auto" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3 w-50 mx-auto" controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 w-50 mx-auto" controlId="formDateOfBirth">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control
                        type="date"
                        value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3 w-50 mx-auto" controlId="formLocation">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBloodGroup">
                    <Form.Label>Blood Group</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your blood group"
                        value={bloodGroup}
                        onChange={(e) => setBloodGroup(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-4 w-50 mx-auto" controlId="formMobileNumber">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control
                        type="tel"
                        placeholder="Enter your mobile number"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className=' w-50 mx-auto mb-5'>
                    Submit
                </Button>
            </Form>

            <Footer />
        </>
    );
}
