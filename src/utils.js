const MAX_LENGTH = 10;
function generateRandomNumber() {
  let res = '';
  const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let i = 0; i < MAX_LENGTH; i++) {
    res += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return res;
}