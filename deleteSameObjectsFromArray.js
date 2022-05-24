const grouped = Object.values(arr.reduce((acc, n) => {
  (acc[n.name] = acc[n.name] || { ...n, qty: 0 }).qty++;
  return acc;
}, {}));
