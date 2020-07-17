// Convart Feet To Mile
function feetToMile(feet) {
  var mile = feet / 5280;
  return mile;
}

var mileResultIs = feetToMile(36960);
console.log(mileResultIs);

// Wood Calculator Project
function woodCalculator(chair, table, bed) {
  var chirWood = chair * 1;
  var tableWood = table * 3;
  var bedWood = bed * 5;

  var totalwood = chirWood + tableWood + bedWood;
  return totalwood;
}

var woodNeed = woodCalculator(14, 5, 12);
console.log(woodNeed);
// Brick Calculator Project
function brickCalculator() {}

// Tiny Friends Project
function tinyFriends(friends) {
  var tinyFriend = friends[0];

  for (var i = 0; i < friends.length; i++) {
    var element = friends[i];

    if (element.length < tinyFriend.length) {
      tinyFriend = element;
    }
  }
  return tinyFriend;
}

var tinyResultIs = tinyFriends(['Roni', 'Riyad', 'Rased', 'Roy', 'Rashedul', 'jonker mahbub']);
console.log(tinyResultIs);