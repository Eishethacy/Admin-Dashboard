// Data untuk penjualan mingguan
const weeklyData = [3000, 4500, 3800, 4200, 5000, 4300, 4800];

// Data untuk penjualan bulanan
const monthlyData = [25, 40, 35, 50, 60, 45, 70, 75, 65, 80, 90, 100];

// Inisialisasi Weekly Chart dengan Chart.js
const weeklyCtx = document.getElementById('weeklyChart').getContext('2d');
const weeklyChart = new Chart(weeklyCtx, {
  type: 'line',
  data: {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
    datasets: [{
      label: 'Weekly Sales',
      data: weeklyData,
      borderColor: 'rgba(0, 201, 255, 1)',
      backgroundColor: 'rgba(0, 201, 255, 0.2)',
      borderWidth: 2,
      fill: true
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#e0e0e0'
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#a0a3bc'
        }
      },
      x: {
        ticks: {
          color: '#a0a3bc'
        }
      }
    }
  }
});

// Inisialisasi Monthly Chart dengan Chart.js
const monthlyCtx = document.getElementById('monthlyChart').getContext('2d');
const monthlyChart = new Chart(monthlyCtx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Monthly Sales',
      data: monthlyData,
      borderColor: 'rgba(0, 201, 255, 1)',
      backgroundColor: 'rgba(0, 201, 255, 0.2)',
      borderWidth: 2,
      fill: true
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#e0e0e0'
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#a0a3bc'
        }
      },
      x: {
        ticks: {
          color: '#a0a3bc'
        }
      }
    }
  }
});
document.querySelector('.edit-photo-btn').addEventListener('click', () => {
    // Buka file picker atau tampilkan pop-up untuk mengganti foto profil.
    alert('Edit photo clicked!');
  });
  
  document.querySelector('.edit-profile-btn').addEventListener('click', () => {
    // Navigasi ke form pengeditan atau tampilkan form pop-up.
    alert('Edit profile clicked!');
  });
  