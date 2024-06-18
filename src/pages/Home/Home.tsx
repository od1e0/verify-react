import React from 'react';
import { FaCheckCircle, FaTimesCircle, FaUserPlus, FaGamepad } from 'react-icons/fa';
import './Home.css';
import logo from '../../images/logo.png'
import scam_projects from '../../images/HomePage/scam_project.png'
import verify_projects from '../../images/HomePage/verify_projects.png'
import verify_game from '../../images/HomePage/verify_game.png'
import invite from '../../images/HomePage/invite.png'

const HomePage: React.FC = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="header">
          <img src={logo} alt="Logo" className="logo" />
          <h3 className="description">
            TON Verify - это платформа, которая занимается защитой пользователей внутри экосистемы TON
          </h3>
        </div>
        <button className="button success">
          <img src={verify_projects} alt="verify_projects" className='icon w-37' style={{margin: '8px 18px 8px 14px'}}/>
          <span>Верифицированные<br/>проекты</span>
        </button>
        <button className="button error">
          <img src={scam_projects} alt="scam_projects" className="icon" />
          <span>Скам<br/>проекты</span>
        </button>
        <button className="button primary">
          <img src={invite} alt="invite" className='icon'/>
          <span>Пригласить<br/>друга</span>
        </button>
        <button className="button comingSoon" disabled>
          <img src={verify_game} alt="verify_game" className='icon'/>
          <span>Верифицированные<br/>игры</span>
          <span className="comingSoonText">
            <span className="comingSoonX">X</span><br/>coming<br/>soon
          </span>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
