// Set the cost per hour for the Cameron A-400
  const costPerHour = 300; // Updated value for Cameron A-400

  // Initialize Chart
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

  // Form Submission Handler
  document.getElementById('costForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const hours = parseFloat(document.getElementById('hours').value);
    const distance = parseFloat(document.getElementById('distance').value);
    
    // Calculate cost
    const cost = costPerHour * hours + (distance * 2); // Adjust distance factor as needed
    document.getElementById('totalCost').innerText = `$${cost.toFixed(2)}`;

    // Update chart data
    updateChart(hours, cost, distance);
  });

  function updateChart(hours, cost, distance) {
    const fuelConsumption = (hours * 50) + (distance * 0.2); // Adjust fuel consumption as needed

    combinedChart.data.datasets[0].data[0] = fuelConsumption;
    combinedChart.data.datasets[1].data[1] = cost;
    combinedChart.update();
  }