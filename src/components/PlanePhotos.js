import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import '../styles/bootstrap-4.0.0-dist/css/bootstrap-grid.min.css';
import '../styles/bootstrap-4.0.0-dist/css/bootstrap.min.css';
import '../styles/photos.css';
import loadScript from '../utils/loadScript';

// Import images
import th from '../assets/gallery/th.jpg';
import OIP from '../assets/gallery/OIP.jpeg';
import img from '../assets/gallery/img.webp';
import bom from '../assets/gallery/bom.jpg';
import p from '../assets/gallery/p.jpeg';
import sk1 from '../assets/gallery/sk1.jpg';
import rb from '../assets/gallery/rb.jpg';
import ca from '../assets/gallery/ca.jpg';
import ab from '../assets/gallery/ab.jpg';

const PlanePhotos = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const loadDependencies = async () => {
      try {
        await loadScript('https://code.jquery.com/jquery-3.2.1.slim.min.js');
        await loadScript('https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js');
        await loadScript('https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js');
        console.log('Scripts loaded successfully');

        // Initialize carousel after scripts are loaded
        $(carouselRef.current).carousel();
      } catch (error) {
        console.error('Error loading scripts', error);
      }
    };

    loadDependencies();
  }, []);

  const handlePrev = () => {
    $(carouselRef.current).carousel('prev');
  };

  const handleNext = () => {
    $(carouselRef.current).carousel('next');
  };

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
              <circle cx="12" cy="13" r="4"></circle>
            </svg>
            <strong className="heavy">Gallery</strong>
          </Link>
          <Link to="/" style={{ color: 'white' }} className="navbar-brand ml-auto d-flex">
            <strong style={{ fontWeight: 800, color: 'white' }}>SK</strong>hire
          </Link>
        </nav>
      </header>

      <main role="main">
        <section className="jumbotron text-center ti-g">
          <div className="hello">
            <div id="carouselExampleControls" className="carousel slide container" data-ride="carousel" ref={carouselRef}>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="container yt">
                    <h1 className="jumbotron-heading">Discover Our Gallery</h1>
                    <p className="lead yt">Explore the essence of SkyHire with a curated selection that embodies the adventure and tranquility of a sunset hot air balloon journey. Each piece invites you to experience the breathtaking beauty, wonder, journeys</p>
                    <p>
                      <a href="https://app.acuityscheduling.com/schedule.php?owner=33176001" className="btn btn-primary my-2 pl">Book a call</a>
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container yt">
                    <h1 className="jumbotron-heading">Safari Destinations</h1>
                    <p className="lead yt">Discover destinations that embody the spirit of SkyHire. Each location offers a unique blend of adventure and business, inviting you to experience stunning views and unparalleled journeys from our planes</p>
                    <p>
                      <Link to="/dest" className="btn btn-primary my-2 pl">Destinations</Link>
                    </p>
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev" onClick={handlePrev}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next" onClick={handleNext}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </section>

        <div className="album py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                  <img className="card-img-top" alt="Thumbnail [100%x225]" src={th} style={{ height: 'auto', width: '100%', display: 'block' }} />
                  <div className="card-body">
                    <p className="card-text">The Cessna Citation X offers unmatched speed and luxury, reaching Mach 0.935. Ideal for business or leisure, it provides a spacious cabin with advanced amenities, ensuring a swift and comfortable journey</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <Link to="/videos/cessna-citation-x" className="pk">View</Link>
                      </div>
                      <Link to="/videos/cessna-citation-x#specs1"><small className="text-muted"><i className="fa-sharp fa-solid fa-angles-right"></i></small></Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                  <img className="card-img-top" src={OIP} alt="Thumbnail [100%x225]" style={{ display: 'block' }} />
                  <div className="card-body">
                    <p className="card-text">The Gulfstream G650 epitomizes luxury and performance with its long-range capability and spacious cabin. Ideal for international travel, it ensures comfort and sophistication, providing an exceptional experience on every flight</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <Link to="/videos/gulfstream-g650" className="pk">View</Link>
                      </div>
                      <Link to="/videos/gulfstream-g650#specs2"><small className="text-muted"><i className="fa-sharp fa-solid fa-angles-right"></i></small></Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                  <img className="card-img-top" src={img} alt="Thumbnail [100%x225]" style={{ display: 'block' }} />
                  <div className="card-body">
                    <p className="card-text">The Embraer Phenom 300 is a high-performance light jet that combines luxury with efficiency. Ideal for short trips, it offers a comfortable cabin and advanced features, ensuring a relaxing and enjoyable flight experience.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <Link to="/videos/embraer-phenom-300" className="pk">View</Link>
                      </div>
                      <Link to="/videos/embraer-phenom-300#specs3"><small className="text-muted"><i className="fa-sharp fa-solid fa-angles-right"></i></small></Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                  <img className="card-img-top" src={bom} alt="Thumbnail [100%x225]" style={{ display: 'block' }} />
                  <div className="card-body">
                    <p className="card-text">The Bombardier Challenger 650 is built for long-haul flights, featuring a spacious cabin and advanced technology. It ensures a smooth, comfortable journey with luxurious amenities for an exceptional flying experience.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <Link to="/videos/bombardier-challenger-650" className="pk">View</Link>
                      </div>
                      <Link to="/videos/bombardier-challenger-650#specs4"><small className="text-muted"><i className="fa-sharp fa-solid fa-angles-right"></i></small></Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                  <img className="card-img-top" src={p} alt="Thumbnail [100%x225]" style={{ display: 'block' }} />
                  <div className="card-body">
                    <p className="card-text">The Piper M600 is a high-performance turboprop, ideal for regional travel. It combines speed, efficiency, and comfort, making it a practical choice for shorter flights without compromising on luxury and style.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <Link to="/videos/piper-m600" className="pk">View</Link>
                      </div>
                      <Link to="/videos/piper-m600#specs5"><small className="text-muted"><i className="fa-sharp fa-solid fa-angles-right"></i></small></Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                  <img className="card-img-top" src={sk1} alt="Thumbnail [100%x225]" style={{ display: 'block' }} />
                  <div className="card-body">
                    <p className="card-text">The Sikorsky S-76 is a versatile, luxurious helicopter for business and personal travel. Its spacious cabin and smooth ride make it an excellent choice for short-distance flights, combining comfort with functionality.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <Link to="/videos/sikorsky-s76" className="pk">View</Link>
                      </div>
                      <Link to="/videos/sikorsky-s76#specs6"><small className="text-muted"><i className="fa-sharp fa-solid fa-angles-right"></i></small></Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                  <img className="card-img-top" src={rb} alt="Thumbnail [100%x225]" style={{ display: 'block' }} />
                  <div className="card-body">
                    <p className="card-text">The Robinson R44 is a versatile light helicopter, perfect for quick, local trips. Its compact size and panoramic windows provide an ideal setting for scenic flights, offering both comfort and breathtaking views</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <Link to="/videos/robinson-r44-specifications" className="pk">View</Link>
                      </div>
                      <Link to="/videos/robinson-r44-specifications#specs7"><small className="text-muted"><i className="fa-sharp fa-solid fa-angles-right"></i></small></Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                  <img className="card-img-top" src={ca} alt="Thumbnail [100%x225]" style={{ display: 'block' }} />
                  <div className="card-body">
                    <p className="card-text">Enjoy a peaceful, picturesque hot air balloon ride with stunning views from above. Ideal for a serene adventure, it offers a unique, unforgettable experience in the skies, creating memories that last a lifetime</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <Link to="/videos/cameron-a400-specifications" className="pk">View</Link>
                      </div>
                      <Link to="/videos/cameron-a400-specifications#specs8"><small className="text-muted"><i className="fa-sharp fa-solid fa-angles-right"></i></small></Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                  <img className="card-img-top" src={ab} alt="Thumbnail [100%x225]" style={{ display: 'block' }} />
                  <div className="card-body">
                    <p className="card-text">The Airbus H160 is a state-of-the-art helicopter, designed for luxury and efficiency. It features advanced technology, a comfortable cabin, and a smooth ride, making it perfect for both business and leisure travel.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <Link to="/videos/airbus-h160-specifications" className="pk">View</Link>
                      </div>
                      <Link to="/videos/airbus-h160-specifications#specs9"><small className="text-muted"><i className="fa-sharp fa-solid fa-angles-right"></i></small></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <hr />
      <footer className="text-muted">
        <div className="container uo">
          <p className="float-right">
            <a href="#">Back to top</a>
          </p>
          <p></p>
          <p> <Link to="/">Visit the homepage</Link> or read our <Link to="/dest">getting started guide</Link>.</p>
        </div>
      </footer>
    </div>
  );
};

export default PlanePhotos;
