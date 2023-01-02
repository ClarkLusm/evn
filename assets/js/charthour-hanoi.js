new Chart(document.getElementById('hourchart'), {
  plugins: [ChartDataLabels],
  type: 'bar',
  data: {
    labels: ['5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm'],
    datasets: [
      {
        data: [523, 726, 877, 1221, 1812, 2009, 2300, 2422, 1878, 3090, 2112, 2336, 3554, 3523, 3865, 3553, 3554],
        backgroundColor: function (context) {
          return context.raw === 3865 ? '#EB5757' : '#C4E2FF';
        },
        barThickness: 26,
      },
      {
        data: [522, 1323, 1350, 711, 2602, 2722, 3002, 3700, 3553, 3321, 2208, 3224, 3154, 3365, 3004, 3898, 3022],
        backgroundColor: function (context) {
          return context.raw === 3898 ? '#EB5757' : '#0682F4';
        },
        barThickness: 26,
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