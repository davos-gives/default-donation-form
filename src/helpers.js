export function formatPrice(cents) {
  return (cents / 100).toLocaleString("en-CA", {
    style: "currency",
    currency: "CAD"
  });
}
