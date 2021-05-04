import React from 'react'
import './Home.css'
import Product from './Product/Product'

function Home() {
    return (
        <div className="home">
            <img 
            className="home__image"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/ACQ/Gateway/HolidayNonPromo/DV5/US-EN_100120_HOLNonPromo_ACQ_GW_Hero_D_3000x1200_CV4_2._CB415751492_.jpg)" 
            alt="Banner"/>
            <div className="home__row">
                <Product
                    id="1"
                    title="The Lean Startup : How Constant Innovation Radically Successful Businesses Paperback"
                    price={401.96}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,202_.jpg"
                />
                 <Product
                    id="2"
                    title="Proscenic M7 Pro Robot Vacuum Cleaner, Laser Navigation, 2700Pa Powerful Suction, APP & Alexa Control,"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51ylu9NNZFL._AC_SL1000_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="3"
                    title="Apple AirPods Pro"
                    price={262}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71zny7BTRlL._AC_SL1500_.jpg"
                />
                 <Product
                    id="4"
                    title="Nikon COOLPIX B500 Digital Camera (Black)"
                    price={339.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/91QzPp5Ag5L._AC_SL1500_.jpg"
                />
                <Product
                    id="5"
                    title="SanDisk Ultra 128GB microSDXC UHS-I card with Adapter (SDSQUAR-128G-GN6MA)"
                    price={23.99}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/617NtexaW2L._AC_SL1500_.jpg"
                />
            </div>
            <div className="home__row">
            <Product
                    id="6"
                    title="Acer SB220Q bi 21.5  IPS Ultra-Thin Zero Frame Monitor"
                    price={129.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81QpkIctqPL._AC_SL1500_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
