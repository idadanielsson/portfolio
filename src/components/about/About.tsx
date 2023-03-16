import { useState } from "react";
import '../about/About.scss';


const About = () => {

    const show = () => {

    }

    return (
        <>
        <div className="heading">
        </div>
        <div className="content hidden__left show">
            <div className="about">
                <h4 className="about__title">About me<span id="dot">.</span></h4>
                <p className="about__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam qui natus odio ea sequi, quo eligendi quisquam aspernatur consectetur dolorem? Saepe, distinctio. Velit commodi maxime quis dicta autem explicabo quam.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi optio consectetur omnis fuga soluta inventore deleniti, nisi dolor placeat repellat possimus perferendis illo hic ex et ipsa laborum ipsam minima?
                    Lorem ipsum dolor sit, amet 
                    
                </p>
                
            </div>
            <div className="image"></div>
        </div>
        </>

    );

}

export default About;