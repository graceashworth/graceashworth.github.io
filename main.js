function updateDateTime() {
  const currentDate = new Date();

  const months = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ];

  const month = months[currentDate.getMonth()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();
  let hours = currentDate.getHours();
  let ampm = 'AM';

  
  if (hours >= 12) {
    ampm = 'PM';
  }

  if (hours === 0) {
    hours = 12; 
  } else if (hours > 12) {
    hours %= 12;
  }

  const minutes = currentDate.getMinutes();
  const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
  const dateTimeString = `Hello, today is ${month} ${day}, ${year}. It is ${formattedTime}.`;

  document.getElementById("datetime").textContent = dateTimeString;
}

updateDateTime();

setInterval(updateDateTime, 1000);

  