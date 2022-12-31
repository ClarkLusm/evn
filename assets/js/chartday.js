new Chart(document.getElementById('daychart'), {
    plugins: [ChartDataLabels],
    type: 'bar',
    data: {
      labels: ['Tuần 1', 'Tuần 2', 'Tuần 3', 'Tuần 4', 'Tuần 5', 'Tuần 6', 'Tuần 7', 'Tuần 8', 'Tuần 9', 'Tuần 10', 'Tuần 11', 'Tuần 12'],
      datasets: [
        {
          data: [35, 13, 13, 33, 18, 13, 13, 18, 18, 52, 13, 43],
          backgroundColor: function (context) {
            return context.raw === 100 ? '#EB5757' : '#C4E2FF';
          },
          fill: false,
          barThickness: 21,
          categorySpacing: 0.5,
        },
        {
          data: [52, 32, 35, 37, 60, 37, 22, 57, 9, 33, 22, 38],
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