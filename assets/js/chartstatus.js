new Chart(document.getElementById('statuschart'), {
  type: 'pie',
  data: {
    labels: ['Hoạt động', 'Gián đoạn'],
    datasets: [
      {
        data: [25, 75],
        backgroundColor: ['#0078E7', '#FF8080'],
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: false,
      }
    }
  },
})