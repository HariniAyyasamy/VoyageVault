import React, { useEffect } from "react";
import './main.css';
import './main.scss';
import images from '../../images/place1.jpeg';
import image from '../../images/images.jpeg';
import place1 from '../../images/place3.jpeg';
import place2 from '../../images/place4.jpeg';
import place3 from '../../images/place5.jpeg';
import place4 from '../../images/syd.jpeg';
import place5 from '../../images/newyork.jpeg';
import place6 from '../../images/bor.jpeg';
import place7 from '../../images/cape.jpeg';
import place8 from '../../images/kyoto.jpeg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { HiOutlineClipboardCheck } from 'react-icons/hi';

const Data = [
  {
    id: 1,
    imgSrc: images,
    desTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is best place as a travel destination in the world.'
  },
  {
    id: 2,
    imgSrc: image,
    desTitle: 'Paris',
    location: 'France',
    grade: 'HISTORIC CHARM',
    fees: '$800',
    description: 'Known as the city of love, Paris offers an unforgettable experience with its iconic landmarks and rich history.'
  },
  {
    id: 3,
    imgSrc: place1,
    desTitle: 'Tokyo',
    location: 'Japan',
    grade: 'MODERN THRILL',
    fees: '$900',
    description: 'A bustling metropolis, Tokyo blends modern skyscrapers with traditional temples, offering a unique cultural experience.'
  },
  {
    id: 4,
    imgSrc: place2,
    desTitle: 'Maldives',
    location: 'Indian Ocean',
    grade: 'LUXURY ESCAPE',
    fees: '$1500',
    description: 'The Maldives is a tropical paradise with pristine beaches and crystal-clear waters, perfect for a luxurious getaway.'
  },
  {
    id: 5,
    imgSrc: place3,
    desTitle: 'Rome',
    location: 'Italy',
    grade: 'HISTORIC WONDERS',
    fees: '$600',
    description: 'Rome, the eternal city, is home to ancient ruins, stunning architecture, and a rich cultural heritage.'
  },
  {
    id: 6,
    imgSrc: place4,
    desTitle: 'Sydney',
    location: 'Australia',
    grade: 'URBAN ADVENTURE',
    fees: '$750',
    description: 'Sydney boasts stunning harbor views, iconic landmarks like the Opera House, and a vibrant urban culture.'
  },
  {
    id: 7,
    imgSrc: place5,
    desTitle: 'New York City',
    location: 'USA',
    grade: 'CITY VIBES',
    fees: '$1000',
    description: 'New York City is a bustling metropolis with endless attractions, from Broadway shows to world-class museums.'
  },
  {
    id: 8,
    imgSrc: place6,
    desTitle: 'Barcelona',
    location: 'Spain',
    grade: 'ARTISTIC BEAUTY',
    fees: '$700',
    description: 'Barcelona is a vibrant city known for its unique architecture, beautiful beaches, and rich cultural scene.'
  },
  {
    id: 9,
    imgSrc: place7,
    desTitle: 'Cape Town',
    location: 'South Africa',
    grade: 'SCENIC VIEWS',
    fees: '$650',
    description: 'Cape Town offers breathtaking landscapes, from Table Mountain to stunning coastlines, making it a must-visit destination.'
  },
  {
    id: 10,
    imgSrc: place8,
    desTitle: 'Kyoto',
    location: 'Japan',
    grade: 'CULTURAL HERITAGE',
    fees: '$850',
    description: 'Kyoto is a city steeped in history, known for its beautiful temples, traditional tea houses, and serene gardens.'
  }
];

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 className="title">
          Most visited Destinations
        </h3>
      </div>

      <div className="secContent grid">
        {Data.map(({ id, imgSrc, desTitle, location, grade, fees, description }) => {
          return (
            <div key={id} data-aos="fade-up" className="singleDestination">
              <div className="imageDiv">
                <img src={imgSrc} alt={desTitle} />
              </div>
              <div className="cardInfo">
                <h4 className="desTitle">
                  {desTitle}
                </h4>
                <span className="continent flex">
                  <HiOutlineLocationMarker className='icon' />
                  <span className="name">{location}</span>
                </span>
                <div className='fees flex'>
                  <span>{grade} <small> +1</small></span>
                </div>
                <div className="price">
                  <h5>{fees}</h5>
                </div>
              </div>
              <div className="desc">
                <p>{description}</p>
              </div>
              <button className='btn flex'> DETAILS <HiOutlineClipboardCheck className="icon" /></button>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Main;
