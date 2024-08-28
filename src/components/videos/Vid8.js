import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/vid1.css';

const CameronA400Specifications = () => {
  const [totalCost, setTotalCost] = useState(0);
  const [combinedChart, setCombinedChart] = useState(null);
  const costPerHour = 300;

  const handleSubmit = (event) => {
    event.preventDefault();
    const hours = parseFloat(event.target.hours.value);
    const distance = parseFloat(event.target.distance.value);

    // Calculate cost
    const cost = costPerHour * hours + (distance * 2); // Adjust distance factor as needed
    setTotalCost(cost.toFixed(2));

    // Update chart data
    updateChart(hours, cost, distance);
  };

  const createChart = () => {
    const ctx = document.getElementById('combinedChart').getContext('2d');
    const combinedChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Fuel Consumption', 'Cost'],
        datasets: [
          {
            label: 'Fuel Consumption (lbs)',
            data: [0, 0], // Placeholder data
            type: 'line',
            borderColor: 'blue',
            backgroundColor: 'transparent',
            borderWidth: 2,
            yAxisID: 'fuelYAxis'
          },
          {
            label: 'Cost (USD)',
            data: [0, 0], // Placeholder data
            type: 'bar',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            yAxisID: 'costYAxis'
          }
        ]
      },
      options: {
        scales: {
          fuelYAxis: {
            type: 'linear',
            position: 'left',
            ticks: {
              beginAtZero: true,
              callback: function(value) { return value + ' lbs'; }
            },
            title: {
              display: true,
              text: 'Fuel Consumption (lbs)'
            }
          },
          costYAxis: {
            type: 'linear',
            position: 'right',
            ticks: {
              beginAtZero: true,
              callback: function(value) { return '$' + value; }
            },
            title: {
              display: true,
              text: 'Cost (USD)'
            }
          }
        }
      }
    });

    return combinedChart;
  };

  const updateChart = (hours, cost, distance) => {
    const fuelConsumption = (hours * 50) + (distance * 0.2); // Adjust fuel consumption as needed

    combinedChart.data.datasets[0].data[0] = fuelConsumption;
    combinedChart.data.datasets[1].data[1] = cost;
    combinedChart.update();
  };

  useEffect(() => {
    const combinedChart = createChart();
    window.combinedChart = combinedChart; // Make the chart accessible globally for updates
  }, []);

  return (
    <div>
      <div className="embed-responsive embed-responsive-21by9">
        <iframe
          width="100%"
          height="641"
          src="https://www.youtube.com/embed/QGAMTlI6XxY"
          title="Colorful Time-Lapse of Hot Air Balloons in New Mexico | Short Film Showcase"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <div className="container back" style={{ padding: '1%' }} id="specs8">
        <div className="all">
          <div className="row">
            {/* Balloon Specifications */}
            <div className="col-md-6 yu">
              <div className="eq">
                <ul>
                  <li><h3>Cameron A-400 Specifications</h3></li>
                  <li><strong>Maximum Speed:</strong> 15 mph</li>
                  <li><strong>Range:</strong> 50 nautical miles</li>
                  <li><strong>Fuel Capacity:</strong> 200 lbs (propane)</li>
                  <li><strong>Passenger Capacity:</strong> 4</li>
                  <li><strong>Cost per Hour:</strong> $300</li>
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
              <a style={{ color: 'white' }} className="navbar-brand" href="../index.html"><bold style={{ fontWeight: 800, color: 'white' }}>SK</bold>hire</a>
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
              <p>
                SkyHire offers luxury private plane rentals with a focus on safety and customer
                satisfaction. Enjoy a seamless, comfortable journey with our modern fleet.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CameronA400Specifications;
