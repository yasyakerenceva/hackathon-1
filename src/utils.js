export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}
export function generateRandomString() {
  const randomLength = random(10, 20);

  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < randomLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export async function getRandomSentence() {
  try {
    const res = await fetch(
      "https://randomwordgenerator.com/json/sentences.json"
    );
    return res;
  } catch (e) {
    throw e;
  }
}
