import React from 'react'
import './Home.css'
import img from './Img/loto.png'
import frame from './Img/frame_chart.svg'
import setting from './Img/settings.svg'
import info from './Img/info.svg'
import user from './Img/user.svg'
// ----------------
import dash from './Img/pie_chart_outline.svg'
import admin from './Img/admin_panel_settings.svg'
import staff from './Img/people.svg'
import agent from './Img/support_agent.svg'
import balance from './Img/monetization_on.svg'
import games from './Img/sports_esports.svg'
import lottery from './Img/insights.svg'
import bet from './Img/multiline_chart.svg'
import bet_win from './Img/category.svg'
import winning from './Img/aspect_ratio.svg'
import manual from './Img/attendance.svg'
import rule from './Img/rule.svg'
import reports from './Img/file_copy.svg'
import state from './Img/apartment.svg'
import t from './Img/t.png'
import bg from './Img/bg.svg'
import hum_menu from './Img/three.svg'
// ----------------

const Home = ({ username, setLoginUser }) => {
function showSideNav(){
  document.querySelector(".side_nav").classList.toggle("active")
}
  return (
    <>
                <section className="navbar">
                <nav>
                    <div className="left">
                        <div className="menu">
                            <img src={hum_menu} alt="" onClick={showSideNav}/>
                        </div>
                        <div className="logo">
                            <img src={img} alt="" />
                            <span>FANTASY LOTO</span>
                        </div>
                        <div className="search">
                            <input type="search" placeholder='Search User...' />
                        </div>
                    </div>
                    <div className="right">
                        <div className="right_links">
                            <div className="setting">
                                <img src={setting} alt="" />
                            </div>
                            <div className="info">
                                <img src={info} alt="" />
                            </div>
                            <div className="user">
                                <img src={user} alt="" />
                                <span>{username}</span>
                            </div>
                        </div>
                    </div>
                </nav>
            </section>
      <div className="side_nav">
        <ul>
          <li><img src={dash} alt="" /><a href="">Dashboard</a></li>
          <li><img src={admin} alt="" /><a href="">Admins</a></li>
          <li><img src={staff} alt="" /><a href="">Staff</a></li>
          <li><img src={agent} alt="" /><a href="">Agent</a></li>
          <li><img src={balance} alt="" /><a href="">Balance</a></li>
          <li><img src={games} alt="" /><a href="">Games</a></li>
          <li><img src={lottery} alt="" /><a href="">Lottery Limit</a></li>
          <li><img src={bet} alt="" /><a href="">Bet Number Limit</a></li>
          <li><img src={bet_win} alt="" /><a href="">Bet type & Win ratio</a></li>
          <li className='cut_text'><img src={winning} alt="" /><a href="">Winning ratio</a></li>
          <li><img src={manual} alt="" /><a href="">Manual win results</a></li>
          <li><img src={rule} alt="" /><a href="">Rules</a></li>
          <li><img src={reports} alt="" /><a href="">Reports</a></li>
          <li><img src={state} alt="" /><a href="">State/ City</a></li>
          <li onClick={() => setLoginUser({})} className='logOut'><ion-icon name="log-out-outline"></ion-icon><a href="" >Log Out</a></li>
          <li><img src={t} alt="" />QualyTrust IT Servces, India</li>
        </ul>
      </div>
    </>
  )
}

export default Home