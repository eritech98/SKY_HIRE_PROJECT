import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/vid1.css';

const EmbraerPhenom300 = () => {
  const [totalCost, setTotalCost] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const hours = parseInt(event.target.hours.value, 10);
    const distance = parseInt(event.target.distance.value, 10);
    const cost = hours * 3500;
    setTotalCost(cost);
  };

  useEffect(() => {
    const ctx = document.getElementById('combinedChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Maximum Speed', 'Range', 'Fuel Capacity', 'Passenger Capacity', 'Cost per Hour'],
        datasets: [
          {
            label: 'Specifications',
            data: [521, 2010, 5798, 10, 3500],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, []);

  return (
    <div>
      <div className="embed-responsive embed-responsive-21by9">
        <iframe
          width="100%"
          height="641"
          src="https://www.youtube.com/embed/oaNsUoYxB5M"
          title="Phenom 300 : Watch a Private Jet Walk-Through with Air Charter Service"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <div className="container back" style={{ padding: '1%' }} id="specs3">
        <div className="all">
          <div className="row">
            {/* Plane Specifications */}
            <div className="col-md-6 yu">
              <div className="eq">
                <h3>Embraer Phenom 300 Specifications</h3>
                <ul>
                  <li><strong>Maximum Speed:</strong> 521 mph</li>
                  <li><strong>Range:</strong> 2,010 nautical miles</li>
                  <li><strong>Fuel Capacity:</strong> 5,798 lbs</li>
                  <li><strong>Passenger Capacity:</strong> 10</li>
                  <li><strong>Cost per Hour:</strong> $3,500</li>
                </ul>
              </div>
            </div>

            {/* Cost Calculation Form */}
            <div className="col-md-6 form-section">
              <h3>Cost Calculation</h3>
              <form id="costForm" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="hours" className="form-label">Hours</label>
                  <input type="number" className="form-control" id="hours" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="distance" className="form-label">Distance (nautical miles)</label>
                  <input type="number" className="form-control" id="distance" required />
                </div>
                <button type="submit" className="btn btn-primary">Calculate Cost</button>
              </form>
              <h3 className="mt-3">Total Cost: <span id="totalCost">${totalCost}</span></h3>
            </div>
          </div>

          {/* Combined Chart */}
          <div className="row chart-section">
            <div className="col-12">
              <canvas id="combinedChart"></canvas>
            </div>
          </div>
        </div>
      </div>

      <footer className="pt-2 my-md-3 pt-md-3">
        <div className="er">
          <div className="row">
            <div className="col-12 col-md col-sm-6">
              <a style={{ color: 'white' }} className="navbar-brand" href="../index.html"><strong style={{ fontWeight: 800, color: 'white' }}>SK</strong>hire</a>
              <small className="d-block mb-3">© 2017-2024</small>
            </div>
            <div className="col-6 col-md col-sm-12">
              <h5>Features</h5>
              <ul className="list-unstyled text-small">
                <li><a href="../index.html">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="../others/planephotos.html">Gallery</a></li>
                <li><a href="#hf"></a></li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>Resources</h5>
              <ul className="list-unstyled text-small">
                <li><a href="../others/dest.html">Destination</a></li>
                <li><a href="../index.html#hf">New Fleet</a></li>
                <li><a href="https://app.acuityscheduling.com/schedule.php?owner=33176001">Book a call</a></li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5 id="hf">About</h5>
              <p>SkyHire offers luxury private plane rentals with a focus on safety and customer satisfaction. Enjoy a seamless, comfortable journey with our modern fleet.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EmbraerPhenom300;
