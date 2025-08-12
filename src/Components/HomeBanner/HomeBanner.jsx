import React from 'react';
import HomeBg from '../../assets/AboutBg.jpg'
import { Link } from 'react-router-dom';
const HomeBanner = () => {
    return (
        <div>
            <div className="hero h-[700px]" style={{ backgroundImage: `url("${HomeBg}")` }}>
                <div className="hero-overlay bg-gradient-to-r from-green-950 to-transparent"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="z-10 max-w-3xl px-4 flex flex-col text-center">


                        <h1 className="text-2xl font-reem text-left">مؤسسة ألور ديشا</h1>


                        <h1
                            className="text-5xl font-bold text-orange-600"
                            style={{
                                textShadow: '10px 10px 10px black'
                            }}
                        >
                            Alor Disha Foundation
                        </h1>
                        <h1 className="text-lg text-right" style={{
                            textShadow: '10px 10px 10px black'
                        }}>" Man For Mankind "</h1>

                        <p className="mb-5 " style={{
                            textShadow: '10px 10px 10px black'
                        }}>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>


                        <div className='p-4 mt-5'>
                            <Link to={'/about'}>  <button className="btn bg-green-600 mx-4 text-black ">Learn More</button></Link>
                            <Link to={'/services'}>   <button className="btn btn-outline mx-4 text-white">Services</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;