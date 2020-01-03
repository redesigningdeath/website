"use strict";

const BLOB = "9JyZy9mLoRXYlRWZyJiOiQ3cvBnIsIybsxWZoJiOiUmcwJye";

function decode(blob) {
  const base64 = [...blob].reverse().join("");
  const { pre, post } = JSON.parse(atob(base64));
  return `${pre}@${post}`;
}

document.querySelector(".email").textContent = decode(BLOB);
