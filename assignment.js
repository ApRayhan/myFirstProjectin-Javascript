// Convart Feet To Mile Start
function feetToMile(feet) {
	var mile = feet / 5280;
	return mile;
}

var mileResultIs = feetToMile(36960);
console.log(mileResultIs);
// Convart Feet To Mile End

// Wood Calculator Project Start
function woodCalculator(chair, table, bed) {
	var chirWood = chair * 1;
	var tableWood = table * 3;
	var bedWood = bed * 5;

	var totalwood = chirWood + tableWood + bedWood;
	return totalwood;
}

var woodNeed = woodCalculator(14, 5, 12);
console.log(woodNeed);
// Wood Calculator Project End

// Brick Calculator Project Start
function brickCalculator(floor) {
	var feet = 0;

	for (var i = 1; i <= floor; i++) {
		var floorNumber = i;

		if (floorNumber <= 10) {
			feet = feet + 15;
		}
		if (floorNumber > 10 && floorNumber <= 20) {
			feet = feet + 12;
		}
		if (floorNumber > 20) {
			feet = feet + 10;
		}
	}
	return feet;
}

var totalBuildingFeet = brickCalculator(35);
var totalBrickNeed = totalBuildingFeet * 1000;
console.log(totalBrickNeed);
// Brick Calculator Project End

// Tiny Friends Project Start
function tinyFriends(friends) {
	var tinyFriend = friends[0];

	for (var i = 0; i < friends.length; i++) {
		var element = friends[i];

		if (element.length < tinyFriend.length) {
			if (element.length == 0) {
				tinyFriend = 'Warning: You Can Not put an Empty Value';
			} else {
				tinyFriend = element;
			}
		}
	}
	return tinyFriend;
}

var tinyFriendIs = tinyFriends([ 'Roni', 'Riyad', 'Rased', 'Roy', 'Rashedul', 'jonker mahbub' ]);
console.log(tinyFriendIs);
// Tiny Friends Project End
