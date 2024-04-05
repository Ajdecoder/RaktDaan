import React, { useState, useEffect } from 'react';
import { Card, Form } from 'react-bootstrap';
import Footer from './Footer';
import { FaArrowDown } from "react-icons/fa";

export default function Requester() {
    const names = [
        'Rohit Sharma', 'Roshan Patel', 'Divya Singh', 'Manohar Verma', 'Amitabh Kumar',
        'Deepika Kapoor', 'Kumar Yadav', 'Priya Gupta', 'Aishwarya Reddy', 'Raj Deshmukh',
        'Sushma Joshi', 'Aniket Singhania', 'Tanvi Shah', 'Vivek Kumar', 'Shreya Mehta',
        'Rajesh Jain', 'Aarti Malhotra', 'Pranav Bansal', 'Swati Chauhan', 'Aditya Sharma',
        'Ananya Bhat', 'Siddharth Rao', 'Pooja Mehra', 'Arjun Kapoor', 'Neha Sharma'
    ];

    const mobileNumbers = ["+91 5551111111", "+91 5552222222", "+91 5553333333", "+91 5554444444", "+91 5555555555",
        "+91 5556666666", "+91 5557777777", "+91 5558888888", "+91 5559999999", "+91 5551234567",
        "+91 5552345678", "+91 5553456789", "+91 5554567890", "+91 5555678901", "+91 5556789012",
        "+91 5557890123", "+91 5558901234", "+91 5559012345", "+91 5550123456", "+91 5551230123",
        "+91 5552341234", "+91 5553452345", "+91 5554563456", "+91 5555674567"
    ];

    const lastDonationDates = ['2023-04-03', '2023-05-15', '2023-07-22', '2023-09-08', '2023-10-30', '2023-12-11', '2024-01-25', '2024-03-07', '2024-04-18', '2024-06-02', '2024-07-14', '2024-08-29', '2024-10-11', '2024-11-23', '2023-01-05', '2023-02-18', '2023-04-03', '2023-05-16', '2023-07-01', '2023-08-14', '2023-09-26', '2023-11-08', '2026-01-02', '2026-02-14'];

    const datesOfBirth = ['2000-04-03', '2001-05-15', '2002-07-22', '2003-09-08', '2004-10-30', '2005-12-11', '2006-01-25', '2007-03-07', '2008-04-18', '2009-06-02', '2010-07-14', '2011-08-29', '2012-10-11', '2013-11-23', '2014-01-05', '2015-02-18', '2016-04-03', '2017-05-16', '2018-07-01', '2019-08-14', '2020-09-26', '2021-11-08', '2022-01-02', '2023-02-14'];

    const locations = ['123 Main Street, Anytown, India', '57/1, MG Road, Indore-452001, India', '12A, Park Street, Kolkata-700016, India', 'Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016, India', '1/1A, Lake View Road, Kolkata-700029, India', '15, Gandhi Nagar, Delhi-110011, India', '34/2, Jubilee Road, Mumbai-400001, India', '21, Rajpur Road, Dehradun-248001, India', '78, Nelson Mandela Road, Hyderabad-500001, India', '10, MG Road, Pune-411001, India', '23, Marine Drive, Chennai-600001, India', '8, Hauz Khas Village, New Delhi-110016, India', '221B Baker Street, Mumbai-400001, India', '5, Nehru Road, Ahmedabad-380001, India', '123, Malviya Nagar, Jaipur-302017, India', '18, MG Road, Kochi-682016, India', '32, Brigade Road, Bengaluru-560001, India', '13, Park Avenue, Lucknow-226001, India', '9, Gandhi Road, Nagpur-440001, India', '22, Tollygunge Road, Kolkata-700033, India', '44, Connaught Place, Delhi-110001, India', '17, Kasturba Gandhi Marg, Mumbai-400005, India', '5A, Marine Drive, Vishakhapatnam-530001, India', '7, Mount Road, Chennai-600002, India', '2, RK Puram, Bengaluru-560002, India'];

    const hospitals = ['All India Institute of Medical Sciences (AIIMS)', 'Apollo Hospitals', 'Fortis Healthcare', 'Max Healthcare', 'Medanta - The Medicity', 'Artemis Hospitals', 'Sir Ganga Ram Hospital', 'Indraprastha Apollo Hospitals', 'BLK Super Speciality Hospital', 'AIIMS, New Delhi', 'Christian Medical College, Vellore (CMC Vellore)', 'Narayana Health', 'Tata Memorial Hospital', 'Sri Jayadeva Institute of Cardiovascular Sciences and Research', 'Aster Medcity, Kochi', 'Manipal Hospitals', 'Lilavati Hospital and Research Centre', 'Kokilaben Dhirubhai Ambani Hospital and Medical Research Institute', 'Nanavati Super Speciality Hospital', 'Rajiv Gandhi Cancer Institute and Research Centre', 'Sri Ramachandra Medical Centre', 'Columbia Asia Referral Hospital, Bangalore', 'Sri Venkateswara Institute of Medical Sciences', 'Gujarat Cancer Research Institute', 'Sankara Nethralaya'];

    const imageUrl = [[
        "https://picsum.photos/150/200?random=0",
        "https://picsum.photos/150/200?random=1",
        "https://picsum.photos/150/200?random=2",
        "https://picsum.photos/150/200?random=3",
        "https://picsum.photos/150/200?random=4",
        "https://picsum.photos/150/200?random=5",
        "https://picsum.photos/150/200?random=6",
        "https://picsum.photos/150/200?random=7",
        "https://picsum.photos/150/200?random=8",
        "https://picsum.photos/150/200?random=9",
        "https://picsum.photos/150/200?random=10",
        "https://picsum.photos/150/200?random=11",
        "https://picsum.photos/150/200?random=12",
        "https://picsum.photos/150/200?random=13",
        "https://picsum.photos/150/200?random=14",
        "https://picsum.photos/150/200?random=15",
        "https://picsum.photos/150/200?random=16",
        "https://picsum.photos/150/200?random=17",
        "https://picsum.photos/150/200?random=18",
        "https://picsum.photos/150/200?random=19",
        "https://picsum.photos/150/200?random=20",
        "https://picsum.photos/150/200?random=21",
        "https://picsum.photos/150/200?random=22",
        "https://picsum.photos/150/200?random=23",
        "https://picsum.photos/150/200?random=24"
    ]]

    const [bloodGroupInput, setBloodGroupInput] = useState('');
    const [filteredRequesters, setFilteredRequesters] = useState([]);

    const dummyRequesters = names.map((name, index) => ({
        id: index + 1,
        name: name,
        email: generateEmail(name),
        dateOfBirth: datesOfBirth[index],
        location: `Location ${index + 1}`,
        bloodType: ['A+', 'B+', 'AB+', 'O+', 'A-', 'B-', 'AB-', 'O-'][index % 8],
        mobileNumber: mobileNumbers[index],
        lastDonationDate: lastDonationDates[index],
    }));

    useEffect(() => {
        const filtered = bloodGroupInput
            ? dummyRequesters.filter(requester => requester.bloodType === bloodGroupInput)
            : dummyRequesters;

        setFilteredRequesters(filtered);
    }, [bloodGroupInput, dummyRequesters]);



    function generateEmail(name) {
        const sanitizedName = name.toLowerCase().replace(/\s/g, '_');
        return `${sanitizedName}@gmail.com`;
    }

    function handleBloodGroupInputChange(event) {
        setBloodGroupInput(event.target.value);
    }

    return (
        <>
            <div className="container mt-5">
                <Form className="mb-3 text-center">
                    <Form.Group controlId="formBloodGroup" className="w-50 inputspan m-auto">
                        <Form.Label className=' fs-4' ><FaArrowDown />
                        </Form.Label>
                        <Form.Control
                            as="select"
                            value={bloodGroupInput}
                            onChange={handleBloodGroupInputChange}
                            className=' h-50 text-center bg-danger fs-3'
                        >
                            <option value="">Select Blood Group</option>
                            <option value="A+">A+</option>
                            <option value="B+">B+</option>
                            <option value="AB+">AB+</option>
                            <option value="O+">O+</option>
                            <option value="A-">A-</option>
                            <option value="B-">B-</option>
                            <option value="AB-">AB-</option>
                            <option value="O-">O-</option>
                        </Form.Control>
                    </Form.Group>
                </Form>


                <h1 className="text-center mb-4">List of All Requesters</h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {filteredRequesters.map((requester) => (
                        <div key={requester.id} className="col">
                            <Card className="h-100 bg-black">
                                <div className="row g-0">
                                    <div className="col-md-8">
                                        <Card.Body>
                                            <Card.Title className='text-danger text-center'>{requester.name}</Card.Title>
                                            <Card.Text className='text-white'>Email: {requester.email}</Card.Text>
                                            <Card.Text className='text-white'>Date of Birth: {requester.dateOfBirth}</Card.Text>
                                            <Card.Text className='text-white'>Location: {locations[requester.id - 1]}</Card.Text>
                                            <Card.Text className='text-white'>Blood Type: {requester.bloodType}</Card.Text>
                                            <Card.Text className='text-white'>Mobile Number: {requester.mobileNumber}</Card.Text>
                                            <Card.Text className='text-white'>Blood Received Date: {requester.lastDonationDate}</Card.Text>
                                            <Card.Text className='text-white'>Hospital Name: {hospitals[requester.id - 1]}</Card.Text>

                                        </Card.Body>
                                        <Card.Footer>
                                            <small className="text-success">ID: {requester.id}</small>
                                        </Card.Footer>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}
