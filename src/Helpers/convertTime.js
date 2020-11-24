const convertTime = time => {
  if (typeof time === 'string') return;

  let dateObj;
  if (time.seconds) {
    dateObj = new Date(time.seconds * 1000);
  } else {
    dateObj = time;
  }

  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();
  let hours = dateObj.getHours();
  let minutes = dateObj.getMinutes();
  let period = 'am';

  if (hours > 12) {
    hours = hours - 12;
    period = 'pm';
  }

  if (hours === 0) {
    hours = 12;
  }

  if (hours === 12) {
    period = 'pm';
  }

  switch (minutes) {
    case 0:
      minutes = '00';
      break;
    case 1:
      minutes = '01';
      break;
    case 2:
      minutes = '02';
      break;
    case 3:
      minutes = '03';
      break;
    case 4:
      minutes = '04';
      break;
    case 5:
      minutes = '05';
      break;
    case 6:
      minutes = '06';
      break;
    case 7:
      minutes = '07';
      break;
    case 8:
      minutes = '08';
      break;
    case 9:
      minutes = '09';
      break;
    default:
      break;
  }

  return `${month}/${day}/${year} ${hours}:${minutes} ${period}`;
};

export default convertTime;
