
const SHEET_URL = "https://script.google.com/macros/s/AKfycbzfPx44E9NBtQazfNf4PVNqwjI5YZQ7skABBNoCi44T3tstSU39sr8ND0D-y1XUX02w/exec";

async function postData(data) {
  const res = await fetch(SHEET_URL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json();
}
