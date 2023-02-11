import React from 'react'
import "../assets/css/blog.css"

class RentalHome extends React.Component {
  constructor() {
    super();
    this.state = {
      rentals: [
        {
          _id: 1,
          title: "Create A Password Manager Using Python And SQLite Database",
          image: "https://amitgajare.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1674466725991%2Fac514515-f56a-46da-9111-5d87fb8ceab9.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75",
          codeLink: "https://amitgajare.hashnode.dev/create-a-password-manager-using-python-and-sqlite-database"
        },
      {
        _id: 2,
        title: "5 Best Python difficult Pattern Programs",
        image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1669960521615/r-Dq59jzc.jpg",
        codeLink: "https://amitgajare.hashnode.dev/5-best-python-difficult-pattern-programs"
      },
      {
        _id: 3,
        title: "How To Create Django Blog Step By Step Tutorial",
        image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1667043957626/ySZermjN2.jpg",
        codeLink: "https://amitgajare.hashnode.dev/how-to-create-django-blog-step-by-step-tutorial"
      },

     {
        _id: 4,
        title: "How to write your code fast for YouTube shorts, Instagram reels and Tiktok",
        image: "https://amitgajare.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1666096695478%2FC5gJaH87C.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=3840&q=75",
        codeLink: "https://amitgajare.hashnode.dev/how-to-write-your-code-fast-for-youtube-shorts-instagram-reels-and-tiktok"
      },

     {
        _id: 5,
        title: "How to install VS Code in an Android Phone and use any Device?",
        image: "https://amitgajare.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1660120494721%2Fkh01YZO3t.jpg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=3840&q=75",
        codeLink: "https://amitgajare.hashnode.dev/how-to-install-vs-code-in-an-android-phone-and-use-any-device"
      },

     {
        _id: 6,
        title: "How to Created a Python Meme Bot for share memes on Instagram",
        image: "https://amitgajare.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1660649936811%2FQww3pW8Pc.webp%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=3840&q=75",
        codeLink: "https://amitgajare.hashnode.dev/how-to-created-a-python-meme-bot-for-share-memes-on-instagram"
      },

    {
        _id: 7,
        title: "How to submit HTML Form to Whats App using JavaScript",
        image: "https://amitgajare.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1662030107348%2FCTvZyzBgw.jpg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=3840&q=75",
        codeLink: "https://amitgajare.hashnode.dev/how-to-submit-html-form-to-whats-app-using-javascript"
      },
      
      ]
    }
  }
  render() {
    const { rentals } = this.state;

    const newTabs = url => {
      window.open(url);
    }

    return (
      <div className="blog-container">
        <div className="blog-card">
          {
            rentals.map((rental) => {
              return (
                <div className="blog-post">
                  <div className="blog-img">
                    <img src={rental.image} alt="cover" />
                  </div>
                  <div className="blog-title">
                    <h2>{rental.title}</h2>
                  </div>
                  <div className="blog-link">
                    <button className='btn' onClick={()=> newTabs(rental.codeLink)}>Read</button>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>
    )
  }
}

export default RentalHome;
