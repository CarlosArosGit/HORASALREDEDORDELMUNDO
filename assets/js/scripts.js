const horaNow = (offset) => {
  let hoy = new Date();
  let utc = hoy.getTime() + (hoy.getTimezoneOffset() * 60000);
  let nd = new Date(utc + (3600000*offset));
  let h = (nd.getHours()<10?'0':'') + nd.getHours();
  let m = (nd.getMinutes()<10?'0':'') + nd.getMinutes();
  let hora = `${h}:${m}:${nd.getSeconds()}`;
  return hora;
}
const horaChile = () => {
  let offset = -4;
  let hora = horaNow(offset);
  document.getElementById('chile').innerText = hora;
  setInterval(horaChile, 1000);
}

const horaParis = () => {
  let offset = +2;
  let hora = horaNow(offset);
  document.getElementById('paris').innerText = hora;
  setInterval(horaParis, 1000);
}
const horaLondres = () => {
  let offset = +1;
  let hora = horaNow(offset);
  document.getElementById('londres').innerText = hora;
  setInterval(horaLondres, 1000);
}
const horaNY = () => {
  let offset = -4;
  let hora = horaNow(offset);
  document.getElementById('ny').innerText = hora;
  setInterval(horaNY, 1000);
}

const horaSp = () => {
  let offset = +3;
  let hora = horaNow(offset);
  document.getElementById('sanP').innerText = hora;
  setInterval(horaSp, 1000);
}

const horaBeijing = () => {
  let offset = +8;
  let hora = horaNow(offset);
  document.getElementById('beijing').innerText = hora;
  setInterval(horaBeijing, 1000);
}

const horaSeul = () => {
  let offset = +9;
  let hora = horaNow(offset);
  document.getElementById('seul').innerText = hora;
  setInterval(horaSeul, 1000);
}

setTimeout(horaChile, 0);
setTimeout(horaParis, 4000);
setTimeout(horaLondres, 8000);
setTimeout(horaNY, 12000);
setTimeout(horaSp, 16000);
setTimeout(horaBeijing, 20000);
setTimeout(horaSeul, 24000);
