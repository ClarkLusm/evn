new Chart(document.getElementById('doughnut'), {
  type: 'doughnut',
  data: {
    datasets: [{
      label: 'My First Dataset',
      data: [978],
      backgroundColor: [
        '#0682F4',
      ],
      hoverOffset: 4
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'end',
      },
    },
    borderWidth: 1,
  },
});