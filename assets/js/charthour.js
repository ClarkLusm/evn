new Chart(document.getElementById('hourchart'), {
  plugins: [ChartDataLabels],
  type: 'bar',
  data: {
    labels: ['5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm'],
    datasets: [
      {
        data: [3521, 1302, 1322, 3383, 1812, 1322, 1311, 1809, 1878, 4222, 1312, 1509, 1554, 1523, 1865, 1553, 1554],
        backgroundColor: function (context) {
          return context.raw === 4222 ? '#EB5757' : '#C4E2FF';
        },
        barThickness: 26,
      },
      {
        data: [522, 323, 350, 1711, 3602, 3722, 2222, 4700, 3953, 3321, 2208, 3824, 3854, 3865, 1004, 3898, 3822],
        backgroundColor: function (context) {
          return context.raw === 4700 ? '#EB5757' : '#0682F4';
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