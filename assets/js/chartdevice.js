new Chart(document.getElementById('devicechart'), {
  plugins: [ChartDataLabels],
  type: 'bar',
  data: {
    labels: ['Máy hút mùi', 'Máy rửa bát', 'Máy sưởi', 'Nóng lạnh', 'Máy giặt', 'Tủ lạnh', 'Ti vi', 'Điều hòa'],
    datasets: [{
      axis: 'y',
      data: [2990, 8000, 4000, 6000, 6000, 4000, 5000, 2000],
      fill: false,
      backgroundColor: '#DAEDFF',
      barThickness: 20,
      maxBarThickness: 20,
    }
    ]
  },
  options: {
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false,
      },
      datalabels: {
        anchor: 'end',
        align: 'start',
        color: '#0682F4'
      }
    },
    indexAxis: 'y',
    maintainAspectRatio: false,
    scales: {
      x: {
        border: {
          display: false
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
          color: 'black',
        }
      },
    }
  },
});