export function formatPrice(cents) {
  return (cents / 100).toLocaleString("en-CA", {
    style: "currency",
    currency: "CAD"
  });
}

export function shortenCreditCard(cc) {
  let shortenedCc = cc.toString().slice(-4);
  return shortenedCc;
}
