import React from 'react';

class Team extends React.Component{

    render() {
        return (
            <div style={{display:"block"}}>
            <div className="person">
            <div className="person-badge">
                <img className="normal" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIVyOPW2ik36WY6rM53YRGbOK21q1YaUAQ9Q&usqp=CAU"/>
                <img className="peculiar" src="https://avatars.githubusercontent.com/u/65829383?v=4"/>
            </div>
            <h3>Devon Davis</h3>
            <strong>Loving React</strong>
            <i className="fa fa-github fa-lg"/>
            <div>
               ...
            </div>
            </div>


            <div className="person">
            <div className="person-badge">
                <img className="normal" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMjx0LqJMFd7JVxQWunQ3akZmWy1Kxsa0BDQ&usqp=CAU"/>
                <img className="peculiar" src="https://avatars.githubusercontent.com/u/42652617?v=4"/>
            </div>
            <h3>Darlene Graterol</h3>
            <strong>Learning is my hobbie</strong>
            <div>
               Software Developer professional with emphasis on Front-End work in JavaScript (ES6), Angular, ReactJS + Redux and React Native frameworks. Experienced in Node.js, Ruby, MySQL, Rails, DigitalOcean and Amazon Web Services.
            </div>
            </div>


            <div className="person">
            <div className="person-badge">
                <img className="normal" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIVyOPW2ik36WY6rM53YRGbOK21q1YaUAQ9Q&usqp=CAU"/>
                <img className="peculiar" src="https://avatars.githubusercontent.com/u/67982945?v=4"/>
            </div>
            <h3>Cliff Brown</h3>
            <strong>Best Voice in the business</strong>
            <div>
              Active duty military member with over 20 years of experience. Specialize in Behavioral Malware Analysis, Software Development, Penetration Testing, Cyber Operation Analysis, Intrusion Detection/Network Analysis, System Accreditation, and Information Assurance.
 
            </div>
            </div>

            <div className="person">
            <div className="person-badge">
                <img className="normal" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIVyOPW2ik36WY6rM53YRGbOK21q1YaUAQ9Q&usqp=CAU"/>
                <img className="peculiar" src="https://avatars.githubusercontent.com/u/1709049?v=4"/>
            </div>
            <h3>Michael Matera</h3>
            <strong>I came, I saw, I programmed</strong>
            <div>
              Programming is my passion and I've taught classes in Python (CIS-15), C++ (CS-11M) and BASH (CIS-98). Information Security is more important than ever with a booming job market.
            </div>
            </div>
            <style jsx>{
                `.person {
                    width: 600px;
                    padding: 70px 0 0 230px;
                    min-height: 200px;
                    margin: auto;
                    position: relative;
                }
                .person-badge {
                    width: 200px;
                    height: 280px;
                    border-radius: 0 0 100px 100px;
                    overflow: hidden;
                    transform: rotate(0deg); /* To force its own layer */
                    position: absolute;
                    top: 0;
                    left: 0;
                }
                .person-badge:before,
                .person-badge:after{
                    content: "";
                    position: absolute;
                    bottom: 0;
                    border-radius: 50%;
                    z-index:-1;
                    width: 200px;
                    height: 200px;
                    background: #DDD;
                    background: linear-gradient(to bottom, #EEE 0%,#CCC 100%);
                    transition:500ms;
                }
                .person-badge:after {
                    background: linear-gradient(to top, #F88 0%,#EEE 100%);
                    opacity: 0;
                }
                .person:nth-child(2) .person-badge:after {
                    background: linear-gradient(to top, #5AB 0%,#EEE 100%);  
                }
                .person:nth-child(3) .person-badge:after {
                    background: linear-gradient(to top, #FC0 0%,#EEE 100%);
                }
                .person-badge:hover:after {
                    opacity: 1;
                }
                
                .person-badge img {
                    width: 200px;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    transition: 500ms;
                }
                .person-badge img.peculiar {
                    opacity: 0;
                    transform: translateY(80px)
                }
                
                .person-badge:hover img.normal {opacity: 0;transform: translateY(80px)}
                .person-badge:hover img.peculiar {opacity: 1;transform: translateY(0)}
                
                .person h3 {
                    margin: 0;
                    font-weight: 200;
                    font-size: 28px;
                }
                
                strong {color: #888;margin:-5px 0 5px 0;display:block;font-size:.8em;}`}</style>
         </div>
        )
    }
}
export default Team