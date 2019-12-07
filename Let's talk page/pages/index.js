import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />

      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-alpha.3/css/materialize.min.css"></link>
    </Head>

    <Nav />
    <div className='container'>
      <div className="hero center">
        <h1 className="title">Let's talk!</h1>
        <p className="description">
          To get started, edit <code>pages/index.js</code> and save to reload.
        </p>
      </div>

      
      <div className="row centered">
        <div className="col s1 red">1</div>
        <div className="col s1">2</div>
        <div className="col s1">3</div>
        <div className="col s1">4</div>
        <div className="col s1">5</div>
        <div className="col s1">6</div>
        <div className="col s1">7</div>
        <div className="col s1">8</div>
        <div className="col s1">9</div>
        <div className="col s1">10</div>
        <div className="col s1">11</div>
        <div className="col s1">12</div>
      </div>
    </div>
    <style jsx>{`
        .description {
          font-size: 50px;
        }
      `}</style>
  </div>

)

export default Home
