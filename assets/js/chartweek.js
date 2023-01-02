new Chart(document.getElementById('weekchart'), {
  plugins: [ChartDataLabels],
  type: 'bar',
  data: {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
    datasets: [
      {
        data: [35, 13, 13, 33, 56, 100, 13, 13],
        backgroundColor: function (context) {
          return context.raw === 100 ? '#EB5757' : '#99C0FF';
        },
        fill: false,
        barThickness: 21,
        categorySpacing: 0.5,
      },
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
        align: 'end',
        color: function (context) {
          if (context.dataIndex == 5) {
            return '#EB5757';
          }
          return null;
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
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        }
      }
    }
  },
});