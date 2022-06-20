function solve(arr, criteria) {
  let resultArray = [];

  for (let ticket of arr) {
    let [destination, price, status] = ticket.split("|");

    let ticketObj = {
      destination,
      price: Number(price),
      status,
    };
    resultArray.push(ticketObj);
  }

  if (criteria == "destination") {
    resultArray.sort((a, b) => a.destination.localeCompare(b.destination));
  } else if (criteria == "price") {
    resultArray.sort((a, b) => {
      a.price - b.price;
    });
  } else {
    resultArray.sort((a, b) => a.status.localeCompare(b.status));
  }
  return resultArray;
}
solve(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
  "destination"
);
