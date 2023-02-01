import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import Header from '../../components/Header'
import NavSide from '../../components/NavSide'

function Home({ setTypeGetData }) {
  return (
    <>
      <Header />
      <NavSide />
      <main className="home">
        <div className="typeGetData">
          <h2>Choix</h2>
          <h2>du type de données : </h2>
          <div className="typeGetData__groupButtons">
            <button
              // className=${`btn {activeButton === "1" && 'active'}`}
              className="btn"
              onClick={() => {
                // setActiveButton(true)
                setTypeGetData(false)
                console.log('Données Mock')
              }}
            >
              MOCK
            </button>
            <button
              className="btn"
              // className={({ isActive }) => `btn ${isActive && 'active'}`}
              onClick={() => {
                setTypeGetData(true)
                console.log('Données API')
              }}
            >
              API
            </button>
          </div>
        </div>

        <div className="menu">
          <h2>Choix</h2>
          <h2>de l'utilisateur :</h2>
          <nav className="menu__navUser">
            <NavLink
              to="/user/12"
              className={({ isActive }) =>
                `menu__navUser__link ${isActive && 'active'}`
              }
            >
              KARL
            </NavLink>
            <NavLink
              to="/user/18"
              className={({ isActive }) =>
                `menu__navUser__link ${isActive && 'active'}`
              }
            >
              CECILIA
            </NavLink>
          </nav>
        </div>
      </main>
    </>
  )
}

Home.propTypes = {
  setTypeGetData: PropTypes.func,
}

export default Home
