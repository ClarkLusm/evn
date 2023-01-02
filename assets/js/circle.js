new Chart(document.getElementById('doughnut'), {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [978, 22],
      backgroundColor: [
        '#0682F4', '#C3D3D9',
      ],
      hoverOffset: 4
    }]
  },
  plugins: [
    {
      id: 'text',
      beforeDraw: function (chart, a, b) {
        var width = chart.width,
          height = chart.height,
          ctx = chart.ctx;

        ctx.restore();
        var fontSize = (height / 114).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "middle";
        ctx.fillStyle = '#243134';

        var text = "978 kW",
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();

        fontSize = ((height - 120) / 114).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.fillStyle = '#77888D';
        text = "107.48 h/ Hr",
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = (height + 70) / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();

        ctx.font = "16px sans-serif";
        ctx.fillStyle = '#4F4F4F';
        text = "1000 kWh",
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height - 16;
        ctx.fillText(text, textX, textY);
        ctx.save();
      }
    }
  ],
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'end',
      },
      tooltip: {
        enabled: false,
      },
      // title: {
      //   text: '1000 kWh',
      //   display: true,
      //   position: 'bottom',
      //   color: '#4F4F4F'
      // },
    },
    rotation: -158.5,
    circumference: 315,
    cutout: 100
  },
});