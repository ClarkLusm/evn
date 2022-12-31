const max = 1000;
new Chart(document.getElementById('barchart'), {
  plugins: [ChartDataLabels],
  type: 'bar',
  data: {
    labels: ['Unknown', 'Chillers', 'Air compr..', 'Pumps', 'Air handie..', 'Mixers'],
    datasets: [{
      axis: 'y',
      data: [333, 215, 151, 61.9, 60.8, 48.7],
      fill: false,
      backgroundColor: [
        '#0682F4',
        '#0682F4',
        '#0682F4',
        '#0682F4',
        '#0682F4',
        '#0682F4',
      ],
      barThickness: 20,
      maxBarThickness: 20,
    },
    {
      axis: 'y',
      data: [max - 333, max - 215, max - 151, max - 61.9, max - 60.8, max - 48.7],
      fill: false,
      backgroundColor: [
        '#DAEDFF',
        '#DAEDFF',
        '#DAEDFF',
        '#DAEDFF',
        '#DAEDFF',
        '#DAEDFF',
      ],
      barThickness: 20,
      maxBarThickness: 20,
    }]
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
        align: 'end',
        display: function (context) {
          return context.datasetIndex == 0;
        },
      }
    },
    indexAxis: 'y',
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false,
        stacked: true,
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
        stacked: true,
        ticks: {
          maxTicksLimit: 20,
          padding: 10,
          min: 0,
          max: 5,
          stepSize: 5,
          suggestedMin: 0.5,
          suggestedMax: 5.5,
          callback: function (label, index, labels) {
            switch (label) {
              case 0:
                return '<b>a</b>';
              case 1:
                return 'ONE';
              case 2:
                return 'TWO';
              case 3:
                return 'THREE';
              case 4:
                return 'FOUR';
              case 5:
                return 'FIVE';
            }
          }
        },

      },
    }
  },
});