const duploTower = [
  { color: "blue", size: 4 },
  { color: "red", size: 4 },
  { color: "blue", size: 8 },
  { color: "yellow", size: 4 },
  { color: "green", size: 4 }
];

const whiteListeBlueAndRed = ["blue", "red"];

whitelistDuploTower(duploTower);

function includeWhitelist(duplo) {
  return whiteListeBlueAndRed.includes(duplo.color);
}

function whitelistDuploTower(duploTower) {
  return duploTower.filter(includeWhitelist);
}
console.log("whitelistDuploTower()");
