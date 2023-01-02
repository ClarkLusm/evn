var chart = new Chart(document.getElementById('topchart'), {
  plugins: [ChartDataLabels],
  type: 'bar',
  data: {
    labels: ['Hải Phòng', 'Ninh Bình', 'Hồ Chí Minh', 'Đà Nẵng', 'Bình Dương', 'Nam Định', 'Thanh Hóa', 'Nha Trang', 'Hà Nội', 'Khánh Hòa',],
    datasets: [
      {
        data: [198, 132, 350, 210, 210, 73, 150, 218, 268, 62],
        backgroundColor: function (context) {
          return [350, 268].includes(context.raw) ? '#EB5757' : '#0682F4';
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
        align: 'start',
        color: '#FFFFFF',
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
          text: 'kWh'
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