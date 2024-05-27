import React from 'react';
import './about.css';

const AboutUsPage = () => {
    return (
        <div className="about-us-page">
            <br></br>
            <section className="about-organization">
                <h2>Our Organization</h2>
                <p>
                    Welcome to VoyageVault, your trusted partner in discovering the world! We are a team of passionate travel enthusiasts dedicated to creating unforgettable travel experiences. Established in 2010, VoyageVault has grown into a leading travel agency known for its personalized service and diverse range of travel packages.
                </p>
            </section>
            
            <section className="facilities">
                <h2>Facilities We Offer</h2>
                <ul>
                    <li>Customized Travel Packages</li>
                    <li>24/7 Customer Support</li>
                    <li>Expert Travel Advice</li>
                    <li>Luxury Accommodations</li>
                    <li>Adventure Tours</li>
                    <li>Group Travel Discounts</li>
                    <li>Travel Insurance</li>
                    <li>Visa Assistance</li>
                </ul>
            </section>
            
            <section className="contact-details">
                <h2>Contact Us</h2>
                <p>If you have any questions or need assistance, please feel free to reach out to us:</p>
                <p><strong>Phone:</strong> +1 234 567 890</p>
                <p><strong>Email:</strong> contact@voyagevault.com</p>
                <p><strong>Address:</strong> 123 Travel Road, Adventure City, Country</p>
                <p>
                    You can also follow us on social media for the latest updates and travel inspiration:
                </p>
                <ul className="social-media">
                    <li><a href="https://www.facebook.com/voyagevault" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li><a href="https://www.twitter.com/voyagevault" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    <li><a href="https://www.instagram.com/voyagevault" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                </ul>
            </section>
        </div>
    );
};

export default AboutUsPage;
