 // Set the cost per hour for the Piper M600
  const costPerHour = 1200; // Updated value for Piper M600

  // Initialize Chart
  const ctx = document.getElementById('combinedChart').getContext('2d');
  const combinedChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Power Consumption', 'Cost'],
      datasets: [
        {
          label: 'Power Consumption (kW)',
          data: [0, 0], // Placeholder data
          type: 'line',
          borderColor: 'blue',
          backgroundColor: 'transparent',
          borderWidth: 2,
          yAxisID: 'powerYAxis'
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
        powerYAxis: {
          type: 'linear',
          position: 'left',
          ticks: {
            beginAtZero: true,
            callback: function(value) { return value + ' kW'; }
          },
          title: {
            display: true,
            text: 'Power Consumption (kW)'
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
    const powerConsumption = (hours * 10) + (distance * 0.5);

    combinedChart.data.datasets[0].data[0] = powerConsumption;
    combinedChart.data.datasets[1].data[1] = cost;
    combinedChart.update();
  }