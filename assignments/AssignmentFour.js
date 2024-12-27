const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (96 + 108 + 89) / 3;

if (scoreDolphins > scoreKoalas) {
  console.log('Dolphins win the trophy');
} else if (scoreDolphins > scoreKoalas) {
  console.log('Koalas win the trophy');
} else if (scoreKoalas === scoreDolphins) {
  console.log('Both win the trophy');
} else {
  console.log('No one wins the trophy');
}
