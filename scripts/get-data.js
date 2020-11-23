/**
 * No params
 */

import getRandomNumber from "./get-random-number";

async function getData() {
  const RANDOM_NUMBER = getRandomNumber(10000);
  const res = await fetch(
    `https://opendata.rdw.nl/resource/m9d7-ebf2.json?$offset=${RANDOM_NUMBER}&$limit=10`
  );
  const data = await res.json();

  if (res.ok) {
    return {
      randomNumber: RANDOM_NUMBER,
      vehicles: data,
    };
  } else {
    throw new Error(data);
  }
}

export default getData;
