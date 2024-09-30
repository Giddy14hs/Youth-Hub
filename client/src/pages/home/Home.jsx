import React from 'react'
import './Home.css'
import image2 from "../../images/image2.jpg";
import image4 from "../../images/image4.jpg";
import image5 from "../../images/image5.jpg";

const Home = () => {
  return (
    <div id="media">
    <div className="navbarHeader">
      <header id="header">
        <div class="overlay">
          <div class="container">
            <div class="row text-center">
              <div class="col">
                <h1 class="display-4" className="animate-hover animate__animated animate__flipInX animate__delay-2s">Youth Hub</h1>
                <p class="text-muted" className="animate-hover animate__animated animate__bounce animate__delay-1s">Youth Hub is a company registered under companies Act in May 2016 as limited by guarantee. Its main aim is to provide young innovators with the resources and support they need to turn their ideas into impactful ventures. Whether it's finding the right mentor, securing funding, or discovering new markets, our platform is designed to empower the next generation of business leaders”</p>

              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
    <div className="Ourwork">
      <section id="work" class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <h1 className="animate-hover animate__animated animate__rotateIn animate__delay-2s">Our Work</h1>
              <p class="text-muted" className="animate-hover animate__animated animate__flip animate__delay-3s">At Youth Entrepreneurship Hub, we believe in empowering the next generation of entrepreneurs by providing them with the tools, resources, and support they need to succeed</p>
            </div>
            <div class="col-md-6 text-center mx-auto">
                <a href="#" class="video" data-image="images/image1.jpg"
              data-toggle="modal" data-target="#firstModal"><i class="fa-solid fa-play fa-3x"></i></a>
            </div>
          </div>
        </div>
      </section>
      <div id="firstModal"class="modal fade" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>Close
              </button>
              <iframe src="images/modalVideo.mp4" width="100%" height="400"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="products">
      <section id="product" class="mt-5 pb-5">
      <div className="container">
        <div className="row">
        <h1 class="choose" className="animate-hover animate__animated animate__wobble animate__delay-1s">Why Choose Us</h1>
          <div class="col-md-4 pb-5">
           <div class="card text-center pt-3">
            <div class="card-img">
            <img src={image2} class="img-fluid my-3" style={{width:"200px;", height: "150px"}}  alt=""/>
            </div>
          <div className="card-body">
            <h3 className="animate-hover animate__animated animate__bounceInLeft animate__delay-3s">Empowerment through Mentorship</h3>
            <p className="animate__animated animate__bounceInRight animate__delay-4s"> We believe that guidance from experienced professionals can unlock the full potential of young entrepreneurs. Our platform connects innovators with industry experts who provide personalized mentorship, helping them navigate challenges and make informed decisions.</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 pb-5">
        <div class="card text-center pt-3">
          <div class="card-img">
            <img src= {image4 }class="img-fluid my-3" style={{width:"200px;", height: "150px"}} alt=""/>
          </div>
          <div class="card-body">
            <h3 className="animate-hover animate__animated animate__bounceInLeft animate__delay-3s">Access to Capital and Resources</h3>
            <p className="animate__animated animate__bounceInRight animate__delay-4s">Financial support is critical for entrepreneurial success. We strive to provide young entrepreneurs access to funding opportunities through our network of investors and financial partners, ensuring they have the resources to bring their ideas to life.</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 pb-5">
        <div class="card text-center pt-3">
          <div class="card-img">
            <img src={image5} class="img-fluid my-3" style={{width:"200px;" ,height: "150px"}} alt=""/>
          </div>
          <div class="card-body">
            <h3 className="animate-hover animate__animated animate__bounceInLeft animate__delay-3s">Sustainable Growth and Innovation</h3>
            <p className="animate__animated animate__bounceInRight animate__delay-4s">Through training, networking, and resources, we encourage entrepreneurs to create solutions that not only thrive in the market but also contribute to the social and economic well-being of their communities.</p>
          </div>
         </div>
      </div>
    </div>
  </div>
</section>
</div>

<div class="container">
 <div id="carouselExampleCaptions" class="carousel slide">
<div class="carousel-indicators">
<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
</div>
<div class="carousel-inner">
<div class="carousel-item active">
  <img src={image2} class="d-block w-100" alt="..."/>
  <div class="carousel-caption d-none d-md-block">
    <h5>First slide label</h5>
    <p>Some representative placeholder content for the first slide.</p>
  </div>
</div>
<div class="carousel-item">
  <img src={image4} class="d-block w-100" alt="..."/>
  <div class="carousel-caption d-none d-md-block">
    <h5>Second slide label</h5>
    <p>Some representative placeholder content for the second slide.</p>
  </div>
</div>
<div class="carousel-item">
  <img src={image5} class="d-block w-100" alt="..."/>
  <div class="carousel-caption d-none d-md-block">
    <h5>Third slide label</h5>
    <p>Some representative placeholder content for the third slide.</p>
  </div>
</div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
<span class="carousel-control-prev-icon" aria-hidden="true"></span>
<span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="visually-hidden">Next</span>
</button>
</div>
</div>

</div>
  )
}

export default Home;