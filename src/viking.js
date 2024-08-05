// Soldier
class Soldier {
	constructor(health, strength) {
		this.health = health;
		this.strength = strength;

	}
	attack() {
		return this.strength;
	}
	receiveDamage(damage) {
		this.health -= damage;
	};
}

// Viking
class Viking extends Soldier {
	constructor(name, health, strength) {
		super(health, strength);
		this.name = name;

	}

	receiveDamage(damage) {
		this.health -= damage;
		if (this.health > 0) {
			console.log(`${this.name} has received ${damage} points of damage`);

			return `${this.name} has received ${damage} points of damage`;
		} else {
			console.log(`${this.name} has died in act of combat`);

			return `${this.name} has died in act of combat`;
		}

	}

	battleCry() {

		console.log("Odin Owns You All!");
		return "Odin Owns You All!";

	}
}

// Saxon
class Saxon extends Soldier {
	receiveDamage(damage) {
		this.health -= damage;

		if (this.health > 0) {
			console.log(`A Saxon has received ${damage} points of damage`);

			return `A Saxon has received ${damage}  points of damage`;
		} else {
			console.log(`A Saxon has died in combat`);

			return `A Saxon has died in combat`;
		}
	}

}

// War
class War {
	constructor() {
		this.vikingArmy = [];
		this.saxonArmy = [];
	}

	addViking(viking) {
		this.vikingArmy.push(viking);
	}

	addSaxon(saxon) {
		this.saxonArmy.push(saxon);
	}

	vikingAttack() {

		const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
		const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];


		const result = randomSaxon.receiveDamage(randomViking.attack());


		this.saxonArmy = this.saxonArmy.filter(saxon => saxon.health > 0);

		return result;
	}

	saxonAttack() {

		const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
		const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];


		const result = randomViking.receiveDamage(randomSaxon.attack());


		this.vikingArmy = this.vikingArmy.filter(viking => viking.health > 0);

		return result;
	}
	showStatus() {
		if (this.saxonArmy.length === 0) {
			console.log("Vikings have won the war of the century!");

			return "Vikings have won the war of the century!";
		} else if (this.vikingArmy.length === 0) {
			console.log("Saxons have fought for their lives and survived another day...");

			return "Saxons have fought for their lives and survived another day...";
		} else {
			console.log("Vikings and Saxons are still in the thick of battle.");

			return "Vikings and Saxons are still in the thick of battle.";
		}
	}


}



