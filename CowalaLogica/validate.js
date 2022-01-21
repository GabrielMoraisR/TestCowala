function validate(date, str) {
  const now = new Date();
  const item = new Date(date);

  item.setDate(item.getDate() + Number(str.replace(/\D/g, '')));
  
  if (item > now) {
    console.log(`${item.toDateString()} ainda não expirou!`);
  } else {
    console.log(`${item.toDateString()} já expirou!`)
  }
}

validate("2021-11-17T20:40:09.503Z", "180d");