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
      <div className='hero center'>
        <h1 className='title'>Desarrolladores</h1>
        <p className='description'>
          Detras de un gran proyecto, existe un gran equipo
        </p>
      </div>
    </div>
    
    <div className='row container'>
        <div className='col s6'>
        <div className='card'>
            <div className="card-image">
                <img src='images/boy-1.png'></img>
                <span className='card-title grey-text text-darken-4'>Oscar Martinez</span>
            </div>
            <div className='card-content'>
                <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className='card-action'>
            <a href='https://gitlab.com/OscarMV'>Repositorio de git</a>
            </div>
        </div>
        </div>
        <div className='col s6'>
        <div className='card'>
            <div className="card-image">
                <img src='images/boy-2.png'></img>
                <span className='card-title grey-text text-darken-4'>Daniel Serna</span>
            </div>
            <div className='card-content'>
                <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className='card-action'>
            <a href='https://gitlab.com/OscarMV'>Repositorio de git</a>
            </div>
        </div>
        </div>
        <div className='col s6'>
        <div className='card'>
            <div className="card-image">
                <img src='images/boy-3.png'></img>
                <span className='card-title grey-text text-darken-4'>Josue Hernandez</span>
            </div>
            <div className='card-content'>
                <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className='card-action'>
            <a href='https://gitlab.com/OscarMV'>Repositorio de git</a>
            </div>
        </div>
        </div>
        <div className='col s6'>
        <div className='card'>
            <div className="card-image">
                <img src='images/boy-4.png'></img>
                <span className='card-title grey-text text-darken-4'>Arturo Jacome</span>
            </div>
            <div className='card-content'>
                <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className='card-action'>
            <a href='https://gitlab.com/OscarMV'>Repositorio de git</a>
            </div>
        </div>
        </div>
    </div>
    <div className='container'>
      <div className='hero center'>
        <h1 className='title'>Asesor</h1>
      </div>
    </div>
    <div className="row container">
        <div className='col s6 offset-s3'>
        <div className='card'>
            <div className="card-image">
                <img src='images/superheroe-12.png'></img>
                <span className='card-title grey-text text-darken-4'>Jose Rivera</span>
            </div>
            <div className='card-content'>
                <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className='card-action'>
            <a href='https://gitlab.com/OscarMV'>Repositorio de git</a>
            </div>
        </div>
        </div>
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
        .card img{
            height: 250px;
            width: auto;
            padding-top: 15px;
            margin: auto;
            margin-right: 0;
        }
        .card-title{
            font-size: 30px;
        }
      `}</style>
  </div>

)

export default Home
