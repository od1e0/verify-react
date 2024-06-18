import React from 'react';
import { FaCheckCircle, FaTimesCircle, FaUserPlus, FaGamepad } from 'react-icons/fa';
import './Home.css';

const HomePage: React.FC = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="header">
          <img src="src\images\logo.png" alt="Logo" className="logo" />
          <h3 className="description">
            TON Verify - это платформа, которая занимается защитой пользователей внутри экосистемы TON
          </h3>
        </div>
        <button className="button success">
        <img src='src\images\HomePage\verify_projects.png' alt="verify_projects" className='icon'/>
          <span>Верифицированные<br/>проекты</span>
        </button>
        <button className="button error">
          <FaTimesCircle className="icon" />
          <span>Скам<br/>проекты</span>
        </button>
        <button className="button primary">
          <FaUserPlus className="icon"/>
          <span>Пригласить<br/>друга</span>
        </button>
        <button className="button comingSoon" disabled>
          <img src='src\images\HomePage\verify_game.png' alt="verify_game" className='icon'/>
          <span>Верифицированные<br/>игры</span>
          <span className="comingSoonText">
            <span className="comingSoonX">X</span> coming soon
          </span>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
