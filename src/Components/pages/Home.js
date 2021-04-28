import React from 'react'
import Banner from '../Banner/Banner'
import BlogItem from '../Blogs/Blogs'
import CardItems from '../CardItems/CardItems'
import ContactSection from '../Contact/Contact'
import Footer from '../Footer/Footer'
import InfoSection from '../infoSection/InfoSection'
import Testimonials from '../testimonials/Testimonials'
import {CardData} from '../CardItems/CardData';
import {BlogData} from '../Blogs/BlogData';
import TestimonialData from '../testimonials/TestimonialData'


function Home() {
    return (
        <>
     <div className="home">
         <Banner/>
         <InfoSection/>
         
         <CardItems  Heading="Get Your Plan" data={CardData}/>
         <BlogItem  heading='our Blogs' data={BlogData}/>
         <Testimonials  heading="Testimonials" data={TestimonialData}/>
         <Footer/>
     </div>
        </ >
    )
}

export default Home
