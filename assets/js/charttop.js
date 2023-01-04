var chart = new Chart(document.getElementById('topchart'), {
  plugins: [ChartDataLabels],
  type: 'bar',
  data: {
    labels: ['Hải Phòng', 'Ninh Bình', 'Hồ Chí Minh', 'Đà Nẵng', 'Bình Dương', 'Nam Định', 'Thanh Hóa', 'Nha Trang', 'Hà Nội', 'Khánh Hòa',],
    datasets: [
      {
        data: [49800, 13200, 94000, 61000, 63020, 10300, 15000, 21800, 86800, 16200],
        backgroundColor: function (context) {
          return context.raw == 94000 ? '#EB5757' : context.raw == 86800 ? '#EE7A14' : '#0682F4';
        },
        fill: false,
        barThickness: 40,
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
        align: 'start',
        color: '#FFFFFF',
      },
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
          display: true,
          text: 'kWh',
        },
        ticks: {
          callback: function (value, index, ticks) {
            return `${value / 1000}k`;
          }
        },
      }
    },
    onClick: handleClick
  },
});

function handleClick(event) {
  var points = chart.getElementsAtEventForMode(event, 'nearest', { intersect: true }, true);
  if (points.length) {
    const firstPoint = points[0];
    const label = chart.data.labels[firstPoint.index];
    if (label === 'Hà Nội') {
      window.location.href = "index-hanoi.html#detail";
    }
    else if (label === 'Hồ Chí Minh') {
      window.location.href = "index.html#detail";
    }
  }
}