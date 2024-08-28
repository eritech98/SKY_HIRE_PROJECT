import React from 'react';
import Chart from 'chart.js/auto';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/bootstrap-4.0.0-dist/css/bootstrap-grid.min.css';
import '../styles/bootstrap-4.0.0-dist/css/bootstrap.min.css';
import '../styles/dest.css';

// Import images
import napaImage from '../assets/napa.jpg';
import cappadociaImage from '../assets/69109-1.webp';
import serengetiImage from '../assets/89.jpg';
import swissAlpsImage from '../assets/groups-4a-1536x768.jpg';

const Dest = () => {
  return (
    <div className="container marketing">
      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">
            <span className="">Napa Valley</span> Balloon Adventures
          </h2>
          <p className="lead">
            Experience Napa Valley’s charm with SkyHire’s hot air balloon flights. Drift over lush
            vineyards, estates, and rivers as the sun rises, enjoying serene views from the sky. Celebrate
            or simply savor Napa’s beauty with our expert pilots and luxurious balloons. Capture
            unforgettable moments or enjoy local wine as you float.
          </p>
        </div>
        <div className="col-md-5">
          <img src={napaImage} alt="Napa Valley" />
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-5 order-md-1">
          <img src={cappadociaImage} alt="Cappadocia" />
        </div>
        <div className="col-md-7">
          <h2 className="featurette-heading">
            <span className="">Cappadocia</span> Balloon Experience.
          </h2>
          <p className="lead">
            Discover Cappadocia's magic with SkyHire’s hot air balloon flights. Soar over unique rock
            formations, fairy chimneys, and valleys bathed in sunrise glow. Our expert pilots and luxurious
            balloons ensure a serene, unforgettable adventure over this UNESCO World Heritage site.rience
            that will stay with you forever.
          </p>
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">
            Explore the <span className="">Serengeti from Above</span>
          </h2>
          <p className="lead">
            The Serengeti is a vast region in Tanzania, East Africa, renowned for its stunning landscapes
            and incredible wildlife, including the famous annual migration of over a million wildebeest and
            hundreds of thousands of zebras. It's one of the most iconic safari destinations in the world,
            offering unparalleled opportunities to witness wildlife in its natural habitat.
          </p>
        </div>
        <div className="col-md-5">
          <img src={serengetiImage} alt="Serengeti" />
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">
            Drift Over the Spectacular <span className="">Swiss Alps</span>
          </h2>
          <p className="lead">
            Experience the majestic Swiss Alps with SkyHire’s hot air balloon flights. Soar above
            snow-capped peaks, lush valleys, and picturesque villages. Enjoy panoramic views of the stunning
            alpine scenery, bathed in the morning light, for an unforgettable adventure in one of the
            world’s most beautiful regions.
          </p>
        </div>
        <div className="col-md-5">
          <img src={swissAlpsImage} alt="Swiss Alps" />
        </div>
      </div>

      <hr className="featurette-divider" />
    </div>
  );
};

export default Dest;
