import React from 'react';
import Head from 'next/head';
import Nav from '../components/nav';
import Footer from '../components/footer';

const Home = () => (
    <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />

      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'></link>

      <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-alpha.3/css/materialize.min.css'></link>
    </Head>

    <Nav />
    <div className='container'>
      <div className="hero center">
        <h1 className='title'>Let's talk! Bussines</h1>
        <p className='description'>
          Aprender idiomas puede ser remunerable
        </p>
      </div>
    </div>
    <div className='row'>
      <div className='col s6 light-blue lighten-4'>Problematica
        <p>Este es mi texto</p>
      
      </div>
      <div className='col s6'>Introducir la imagen aqui</div>
      <div className='col s6'>Introducior imagen aqui</div>
      <div className='col s6 light-blue lighten-4'>Solucion</div>
      <div className='col s6 light-blue lighten-4'>Como</div>
      <div className='col s6'>Introducir la imagen aqui</div>
      <div className='col s6'>Introducir imagen aqui</div>
      <div className='col s6 light-blue lighten-4'>Caracteristicas</div>
      
    </div>
    <Footer />
    <style jsx>{`
        .description {
          font-size: 30px;
          font-style: italic;
          font-weight: 300;
        }
        body {
          display: flex;
          min-height: 100vh;
          flex-direction: column;
        }

        main {
          flex: 1 0 auto;
        }
      `}</style>
  </div>

)

export default Home