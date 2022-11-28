import React from 'react'
import './Home.css';
import {BsArrowRight} from 'react-icons/bs';

function Home() {
    let day = new Date().getDate();
    let month = new Date().getMonth();
    let year = new Date().getFullYear();

    const handleClick = () =>{
        alert('clicked');
    }
  return (
     <div className="navbar__photo">
        <img className="background__pic" src={"https://www.nakagawashokai.co.jp/images/top/mv.jpg"} alt="backgound" />
        <div className="text__desc">
            <p className='text'>ENRICH PEOPLE </p> 
            <p className='text'>  AND SOCIETY. </p>
            <p className='text'> lorem ipsum</p>
        </div>
        <div className="pic__control">
          <div className="pic__action">
            <div className="pic__row">
              <div className="pic__col">{year +'.' + month + '.' + day}</div>
              <div className="pic__col">Lorem ipsum dolor.</div>
            </div>
            <div className="action__button">
              <button className='btn btn__prev' onClick={handleClick}> {'<'} </button>
              <button className='btn btn__all' onClick={handleClick}> |  {' '}  ALL   {' '} | </button>
              <button className='btn btn__next' onClick={handleClick}> {'>'} </button>
            </div>
          </div>

          {/* <p style={{color: 'blue'}}>Hello world</p> */}
        </div>
        <div className="services">
            <div className="image__div">
                <img src='https://www.nakagawashokai.co.jp/images/top/img-01.jpg'  alt='meeting '/>
            </div>
            <div className="text__div">
                <div className="mini__image">
                    <img src='https://www.nakagawashokai.co.jp/images/top/bgimage0.png' alt='small'/>
                </div>
                <div className="desc__text">
                    <h1 className='title'> OUR SERVICES</h1>
                    <p className='des'>Lorem ipsum dolor sit amet </p>
                    <p className='des'>Lorem ipsum dolor sit amet </p>
                    <div className="second__info">
                    <p className='des'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores excepturi quod ullam rem doloribus praesentium blanditiis sed et maxime magni debitis exercitationem, vel autem, fugit vitae illum tenetur dicta laboriosam.</p>
                    <p className='des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolorum qui, doloribus sint hic animi quia libero labore iste, magnam vel atque suscipit quo eius modi, recusandae rem beatae? Non. </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="images">
          <div className="row__images">
            <div className="wrap">
              <div className="col col__car">
              </div>
              <div className="texts text__front">
                  <span>demo title</span>
                  <h1>INGRIDIENTS</h1>
                  <p>Lorem ipsum dolor, sit amet <br/>
                   consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="wrap">
            <div className="col col__cookies">
            </div>
            <div className="texts text__end">
                  <span>demo title</span>
                  <h1>INGRIDIENTS</h1>
                  <p>Lorem ipsum dolor, sit amet <br/>
                   consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="wrap">
            <div className="col col__cartoon">
            </div>
            <div className="texts text__front">
              <span>demo title</span>
              <h1>INGRIDIENTS</h1>
              <p>Lorem ipsum dolor, sit amet <br/>
               consectetur adipisicing elit.</p>
            </div>
            </div>
          </div>
        </div>

        <div className="company">
          <div className="company__title">
            <h1 className='comp__title'>COMPANY</h1>
            <p> this is a demo. </p>
            <p>View More</p>
          </div>
          <div className="company__desc">

            <div className="wrap">
              <div className="philo">
                <h1 className='heading'>Philo</h1>
                <p> Demo</p>
              </div>
            </div>

            <div className="wrap">
              <div className="msg">
                <h1 className='heading'>Message</h1>
                <p> Demo</p>
              </div>
            </div>

          <div className="wrap">
            <div className="history">
              <h1 className='heading'>History</h1>
                <p> Demo</p>
            </div>
          </div>

          <div className="wrap">
            <div className="about">
              <h1 className='heading'>About</h1>
                <p> Demo</p>
            </div>
            </div>
          </div>

        </div>

        <div className="flow">
          <div className="row">
            <div className="col col__image">
              <img src='https://www.nakagawashokai.co.jp/images/top/img_06_sp.jpg' alt="meetings flow" />
             </div>
            <div className="col col__desc">
              <h1>Flow</h1>
              <p> this is demo </p>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis . </p>
              <button> View More <span> <BsArrowRight /> </span> </button>
            </div>
          </div>
        </div>

        <div className="recruit">
          <div className="recruit__div">
            <div className="col__recruit">
              <h1> RECRUIT </h1>
              <span> demo </span>
              
            </div>
            <div className="col2__recruit">
              <div className="wrap">
              <div className="philo">
                <h1 className='heading'>Philo</h1>
              </div>
            </div>

            <div className="wrap">
              <div className="msg">
                <h1 className='heading'>Message</h1>
               
              </div>
            </div>

          <div className="wrap">
            <div className="history">
              <h1 className='heading'>History</h1>
              
            </div>
          </div>
            </div>
          </div>
        </div>

        <div className="contact">
          <div className="row__contact">
            <div className="col__contact">
              <h1>Contact <span>thisisdemo</span> </h1> 
              <p> just a rondom text just a random text just a random text just a random text just a random text just a random text.
                </p>
              <div className="contact__medium">
                <div className="phone">
                  <span>icon 0487655</span> 
                </div>
                <div className="mail">
                  <span>Mail</span>MAIL FROM
                </div>
              </div>
            </div>
            <div className="col2__contact">
              <div className="wrapper">
              <div className="line1">
                <ul className='list'>
                  <li className='links'>HOME</li>
                  <li className='links'>ABOUT</li>
                  <li className='links'>AUTOMOBILE</li>
                  <li className='links'>INGREDIENTS</li>
                  <li className='links'>CARTBOARD</li>
                </ul>
              </div>
              <div className="line2">
                <ul className='list'>
                  <li className='links'>HOME</li>
                  <li className='links'>ABOUT</li>
                  <li className='links'>AUTOMOBILE</li>
                  <li className='links'>INGREDIENTS</li>
                  <li className='links'>CARTBOARD</li>
                </ul>
              </div>
              </div>
              <div className="image"></div>
            </div>
          </div>
          <div className="paragraph">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis quidem rerum eveniet ab in dicta porro est deleniti enim! Magni culpa esse suscipit pariatur, ratione est quas sequi quo officia.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, sapiente eos? Architecto odio, eaque tenetur accusamus similique dolores aspernatur nemo alias officiis, tempore cumque corporis explicabo amet iure dolorem quas.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vel consectetur aliquid maiores, assumenda laboriosam tempore suscipit rem quaerat harum, accusantium repellendus repudiandae! Alias esse temporibus itaque modi dignissimos minus?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis magnam id iusto eius earum eum, sapiente exercitationem illum. Aliquid quaerat id quia nam nobis praesentium, ipsa consectetur ad cum facilis?
            </p>
          </div>

          <div className="footer__end">
            <div className="logo">
              <p>logo</p>
            </div>
            <div className="mid">
              <p>demodemo</p>
              <p>this is demo this is demo</p>
            </div>
            <div className="copyright">
              <p>@ALL RIGHT RESERVED. demodemodemo</p>
            </div>
          </div>

        </div>

      </div>
  )
}

export default Home
