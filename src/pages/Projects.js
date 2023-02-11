import React from 'react'
// import { Link } from 'react-router-dom';
import "../assets/css/project.css"
import "../assets/css/main.css"

class RentalHome extends React.Component {
  constructor() {
    super();
    this.state = {
      rentals: [{
        _id: 1,
        title: "Naruto Landing Page",
        category: "Using Javascript",
        image: "https://i.ibb.co/QcpKWYv/naruto.png",
        description: "Naruto Shippuden is one of my favourite animes. so I thought why not, AnimeNow is a hypothetical website for anime lovers.",
        demoLink: "https://amitgajare2.github.io/Naruto/",
        codeLink: "https://github.com/Amitgajare2/Naruto"
      },
      {
        _id: 2,
        title: "Html Code Editor",
        category: "Using Javascript",
        image: "https://i.ibb.co/9cqNY2G/htmled.png",
        description: "Write and run HTML, CSS and JavaScript code using our online editor. Our HTML editor updates the webview automatically in real-time as you write code.",
        demoLink: "https://freeuto.blogspot.com/",
        codeLink: "https://github.com/Amitgajare2/htmleditor"
      },
      {
        _id: 3,
        title: "Password Manager",
        category: "Using Python",
        image: "https://i.ibb.co/ZH7wGsq/pass.png",
        description: "Light weight CLI Based Password Manager To Store Your Important Password.",
        demoLink: "https://www.youtube.com/watch?v=GrRd92RnB7c",
        codeLink: "https://github.com/Amitgajare2/PasswordManager"
      }
    ]
    }
  }
  render() {
    const { rentals } = this.state;

    const newTabs=url=>{
      window.open(url);
    }

    return (
      <div className="my-project-box">
        <div className="head-box">
          <h3>My Projects</h3> 
          <div className="main-box">
            {
              rentals.map((rental) => {
                return (
                  <div className='cards'>
                    <div key={rental._id} className="col-md-3">
                      <div className="card-img">
                        <img
                          className="card-img-top"
                          src={rental.image}
                          alt={rental.title} />
                      </div>
                        <div className="card-body">
                          <h6 className="card-subtitle">
                            {rental.category}
                          </h6>
                          <h5 className="card-title">
                            {rental.title}
                          </h5>
                          <p className="card-text">
                            {rental.description}
                          </p>
                          <div className="buttom-btn">
                            {/* <Link to={{ pathname:`${rental.demoLink}`}} target="_blank">Demo</Link> */}                                             
                            <button className='btn' onClick={()=> newTabs(rental.demoLink)}>Demo</button>
                            <button className='btn' onClick={()=> newTabs(rental.codeLink)}>Code</button>
                          </div>
                        </div>
                      
                    </div>
                  </div>
                )
              })
            }

          </div>
        </div>
      </div>
    )
  }
}

export default RentalHome;