// src/Contact.js
import React from 'react';
import './contact.css';  
const Contact = () => {
  const contacts = [
    {
      office: '1234 Example St, Suite 100',
      city: 'Example City, EX 12345',
      name: 'John Doe',
      role: 'Office Manager',
      email: 'john.doe@example.com',
      phone: '(123) 456-7890',
    },
    {
      office: '5678 Another St, Suite 200',
      city: 'Another City, EX 67890',
      name: 'Jane Smith',
      role: 'Assistant Manager',
      email: 'jane.smith@example.com',
      phone: '(987) 654-3210',
    },
    {
      office: '9101 Sample Ave, Suite 300',
      city: 'Sample City, EX 91011',
      name: 'Alice Johnson',
      role: 'HR Manager',
      email: 'alice.johnson@example.com',
      phone: '(345) 678-1234',
    },
    {
      office: '1121 Trial Rd, Suite 400',
      city: 'Trial City, EX 12131',
      name: 'Bob Brown',
      role: 'Finance Manager',
      email: 'bob.brown@example.com',
      phone: '(456) 789-2345',
    },
    {
      office: '1324 Demo Blvd, Suite 500',
      city: 'Demo City, EX 13245',
      name: 'Carol White',
      role: 'Marketing Manager',
      email: 'carol.white@example.com',
      phone: '(567) 890-3456',
    },
    {
      office: '1425 Sample St, Suite 600',
      city: 'Sampleton, EX 14256',
      name: 'Dave Green',
      role: 'IT Manager',
      email: 'dave.green@example.com',
      phone: '(678) 901-4567',
    },
    {
      office: '1526 Example Ave, Suite 700',
      city: 'Exampleton, EX 15267',
      name: 'Eve Black',
      role: 'Sales Manager',
      email: 'eve.black@example.com',
      phone: '(789) 012-5678',
    },
    {
      office: '1627 Demo Rd, Suite 800',
      city: 'Demoville, EX 16278',
      name: 'Frank Blue',
      role: 'Operations Manager',
      email: 'frank.blue@example.com',
      phone: '(890) 123-6789',
    },
    {
      office: '1728 Trial St, Suite 900',
      city: 'Trialville, EX 17289',
      name: 'Grace Red',
      role: 'Project Manager',
      email: 'grace.red@example.com',
      phone: '(901) 234-7890',
    },
    {
      office: '1829 Sample Ave, Suite 1000',
      city: 'Sampleton, EX 18290',
      name: 'Hank Yellow',
      role: 'Logistics Manager',
      email: 'hank.yellow@example.com',
      phone: '(012) 345-8901',
    },
  ];  

  return (
    
    <div className="contact-container">
      <br>
      </br>
      <br></br>
      <br></br>
      <br></br>

      <h1>Contact Us</h1>
      <div className="contact-grid">
        {contacts.map((contact, index) => (
          <div className="contact-details" key={index}>
            <h2>Our Office</h2>
            <p>{contact.office}</p>
            <p>{contact.city}</p>
            <h2>Contact Person</h2>
            <p>Name: {contact.name}</p>
            <p>Role: {contact.role}</p>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
