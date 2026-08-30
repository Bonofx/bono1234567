export function uid(prefix = ''){
  return prefix + Math.random().toString(36).slice(2,9);
}

export function todayISO(){
  return new Date().toISOString().slice(0,10);
}

export function formatMonthYear(date: Date){
  return date.toLocaleString(undefined, { month: 'long', year: 'numeric' });
}
