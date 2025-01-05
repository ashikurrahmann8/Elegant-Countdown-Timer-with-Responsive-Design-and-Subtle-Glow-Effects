const endDate = new Date(document.querySelector(".countdown").dataset.date);

const countdownValueElmnt = Array.from(
  document.querySelectorAll(".countdownValue")
);

function countdown() {
  const startDate = new Date();
  const dateDiff = (endDate - startDate) / 1000;
  if (dateDiff > 0) {
    const days = Math.floor(dateDiff / 3600 / 24);
    const hours = Math.floor(dateDiff / 3600) % 24;
    const minutes = Math.floor(dateDiff / 60) % 60;
    const seconds = Math.floor(dateDiff % 60);
    countdownValueElmnt.map((item, index) => {
      switch (index) {
        case 0:
          item.textContent = days;
          break;
        case 1:
          item.textContent = hours;
          break;
        case 2:
          item.textContent = minutes;
          break;
        case 3:
          item.textContent = seconds;
          break;
      }
    });
  } else {
    clearInterval(setInterval);
  }
}
setInterval(countdown, 1000);
