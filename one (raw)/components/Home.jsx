import React from 'react'
import vg from '../assets/2.webp'
import { AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram } from 'react-icons/ai'


const Home = () => {
  return (
  <>
      <div className='home' id='home'>
        <main>
            <h1>TechyStar</h1>
            <p>Solution to all your problems</p>
        </main>
    </div>
    <div className="home2">
        <img src={vg} alt="Graphics" />
        <div className="">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt tempore maiores totam corrupti dolorum pariatur illo ducimus dolor quidem cum provident, magnam ratione.</p>
        </div>
        </div>

        <div className="home3" id='about'>
            <div>
                <h1>Who We Are ?</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, architecto non! Ducimus tempora fugit temporibus nisi impedit eos voluptatibus, voluptatem omnis cupiditate minima rerum at sunt illum? Nesciunt laudantium est, laborum vel perferendis illo corrupti iure maiores perspiciatis, quae accusantium! Architecto impedit, modi consequatur velit illum atque quam commodi ab, dolores sequi delectus alias doloremque ullam. Earum tempore commodi consequatur. Reprehenderit amet facere exercitationem sunt eligendi! Eum aperiam quos illum voluptate ex! Nobis vitae officia magnam exercitationem labore qui ipsam necessitatibus quisquam eum. Cum consequatur natus optio voluptates necessitatibus quae qui asperiores, vero quis quo maxime mollitia sit, ex aspernatur!</p>
            </div>
    </div>

            <div className="home4" id="brands">
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{animationDelay:"0.3s"}}>
                            <AiFillGoogleCircle/>
                            <p>Google</p>
                        </div>

                        <div style={{animationDelay:"0.5s"}}>
                            <AiFillAmazonCircle/>
                            <p>Amazon</p>
                        </div>

                        <div style={{animationDelay:"0.7s"}}>
                            <AiFillYoutube/>
                            <p>Youtube</p>
                        </div>

                        <div style={{animationDelay:"1s"}}>
                            <AiFillInstagram/>
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
  </>
  )
}

export default Home