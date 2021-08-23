export const setDate = () => {
  var fecha = new Date(Date.now()),
    month = "" + (fecha.getMonth() + 1),
    day = "" + fecha.getDate(),
    year = "" + fecha.getFullYear();

  if (month.length < 2) {
    month = "0" + month;
  }

  if (day.length < 2) {
    day = "0" + day;
  }

  return [year, month, day].join("-");
};

export const setHour = () => {
  var fecha = new Date(Date.now()),
    hour = "" + fecha.getHours(),
    minutes = "" + fecha.getMinutes();

  if (hour.length < 2) {
    hour = "0" + hour;
  }

  if (minutes.length < 2) {
    minutes = "0" + minutes;
  }

  return [hour, minutes].join(":");
};
