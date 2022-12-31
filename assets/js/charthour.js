new Chart(document.getElementById('hourchart'), {
    plugins: [ChartDataLabels],
    type: 'bar',
    data: {
      labels: ['5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm'],
      datasets: [
        {
          data: [35, 13, 13, 33, 18, 13, 13, 18, 18, 52, 13, 15, 15, 15, 18, 15, 15],
          backgroundColor: function (context) {
            return context.raw === 100 ? '#EB5757' : '#C4E2FF';
          },
          fill: false,
          barThickness: 21,
          categorySpacing: 0.5,
        },
        {
          data: [52, 32, 35, 37, 60, 37, 22, 57, 9, 33, 22, 38, 38, 38, 100, 38, 38],
          backgroundColor: function (context) {
            return context.raw === 100 ? '#EB5757' : '#0682F4';
          },
          barThickness: 21,
          fill: false,
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        },
        datalabels: {
          anchor: 'end',
          align: 'start',
          color: function (context) {
            return context.datasetIndex === 0 ? '#0682F4' : '#FFFFFF';
          }
        }
      },
      scales: {
        x: {
          border: {
            display: false
          },
          grid: {
            display: false,
          },
        },
        y: {
          border: {
            display: false
          },
          title: {
            text: 'kW'
          },
        }
      }
    },
  });