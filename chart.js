/* Case study charts. Each block only runs on the page that has its canvas. */
const sand = "#C8A97E";
const ink = "#1A1714";

if (document.getElementById("cudaChannelChart")) {
  Chart.defaults.font.family = "'DM Sans', system-ui, sans-serif";
  Chart.defaults.color = "#7A6E68";
  const sandFade = "rgba(200,169,126,0.25)";

  new Chart(document.getElementById("cudaChannelChart"), {
    type: "doughnut",
    data: {
      labels: [
        "Organic Search",
        "Direct",
        "Referral",
        "Organic Social",
        "Other",
      ],
      datasets: [
        {
          data: [61.57, 33.55, 3.73, 1.03, 0.26],
          backgroundColor: [
            "#C8A97E",
            "#3D3530",
            "#7A6E68",
            "#E8DDD4",
            "#F5EDE0",
          ],
          borderWidth: 0,
          hoverOffset: 6,
        },
      ],
    },
    options: {
      responsive: true,
      cutout: "65%",
      plugins: {
        legend: {
          position: "right",
          labels: {
            padding: 20,
            usePointStyle: true,
            pointStyleWidth: 10,
            font: { size: 13 },
          },
        },
        tooltip: {
          backgroundColor: ink,
          titleColor: "#fff",
          bodyColor: "rgba(255,255,255,0.7)",
          padding: 12,
          cornerRadius: 6,
          callbacks: {
            label: (ctx) =>
              " " + ctx.label + ": " + ctx.parsed + "% of sessions",
          },
        },
      },
    },
  });
}

if (document.getElementById("clicksChart")) {
  Chart.defaults.font.family = "'DM Sans', system-ui, sans-serif";
  Chart.defaults.color = "#7A6E68";
  const sandFade = "rgba(200,169,126,0.25)";

  new Chart(document.getElementById("clicksChart"), {
    type: "bar",
    data: {
      labels: ["Clicks", "Impressions (÷10 for scale)"],
      datasets: [
        {
          label: "Aug to Oct 2025 (baseline)",
          data: [1062, 2132],
          backgroundColor: "rgba(200,169,126,0.25)",
          borderColor: "rgba(200,169,126,0.6)",
          borderWidth: 1.5,
          borderRadius: 4,
        },
        {
          label: "Aug to Oct 2026",
          data: [1312, 2861],
          backgroundColor: sand,
          borderColor: sand,
          borderWidth: 0,
          borderRadius: 4,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: ink,
          titleColor: "#fff",
          bodyColor: "rgba(255,255,255,0.7)",
          padding: 12,
          cornerRadius: 6,
          callbacks: {
            label: (ctx) => {
              if (ctx.dataIndex === 1) {
                const real = ctx.datasetIndex === 0 ? "21,319" : "28,608";
                return ` ${ctx.dataset.label}: ${real} impressions`;
              }
              return ` ${ctx.dataset.label}: ${ctx.parsed.y} clicks`;
            },
          },
        },
      },
      scales: {
        x: { grid: { display: false }, border: { display: false } },
        y: {
          grid: { color: "rgba(0,0,0,0.04)" },
          border: { display: false },
        },
      },
    },
  });

  new Chart(document.getElementById("channelChart"), {
    type: "doughnut",
    data: {
      labels: [
        "Organic Search",
        "Direct",
        "Organic Social",
        "Referral",
        "Other",
      ],
      datasets: [
        {
          data: [51.37, 35.21, 11.43, 1.14, 0.85],
          backgroundColor: [
            "#C8A97E",
            "#3D3530",
            "#7A6E68",
            "#E8DDD4",
            "#F5EDE0",
          ],
          borderWidth: 0,
          hoverOffset: 6,
        },
      ],
    },
    options: {
      responsive: true,
      cutout: "65%",
      plugins: {
        legend: {
          position: "right",
          labels: {
            padding: 20,
            usePointStyle: true,
            pointStyleWidth: 10,
            font: { size: 13 },
          },
        },
        tooltip: {
          backgroundColor: ink,
          titleColor: "#fff",
          bodyColor: "rgba(255,255,255,0.7)",
          padding: 12,
          cornerRadius: 6,
          callbacks: {
            label: (ctx) => ` ${ctx.label}: ${ctx.parsed}% of sessions`,
          },
        },
      },
    },
  });
}
