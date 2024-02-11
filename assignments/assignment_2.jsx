const scoreDolphins = 96+108+89/3;
const scoreKoalas = 88+91+110/3;

if(scoreDolphins>scoreKoalas&&scoreDolphins>=100){
  console.log("Dolphins win the trophy")
}
else if(scoreKoalas>scoreDolphins&&scoreKoalas>=100){
  console.log("Koalas win the trophy")
}else if (scoreKoalas==scoreDolphins&&scoreDolphins>=100&&scoreKoalas>=100){
  console.log("  Both win the trophy")
}else{
  console.log("No ont wins the trophy 🥲")
}