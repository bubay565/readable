export function getDate(timestamp){
  let dayy = new Date(timestamp);
  return dayy.toLocaleDateString();
}

export function getTime(timestamp){
  let dayy = new Date(timestamp);
  return dayy.toLocaleTimeString();
}
