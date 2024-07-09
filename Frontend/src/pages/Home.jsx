/* eslint-disable no-unused-vars */
import React from 'react';
import Department from '../Components/Department';
import Biography from '../Components/Biography';
import Hero from '../Components/Hero';
import MessageForm from '../Components/MessageForm';


const Home = () => {
  return (
    <>
    <Hero title={"Welcome to DocDirect Medical Institute | Your Trusted Healthcare Provider"} imageUrl={"./hero.png"}/>
    <Biography imageUrl={"/about.png"}/>
    <Department/>
    <MessageForm/>

    </>
  )
}

export default Home;