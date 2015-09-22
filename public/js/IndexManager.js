class ElIndex {
	constructor(elIndex) {
		if (!elIndex) {
			this.set(0);
		} else {
			this.set(elIndex);
		}
	}
	set(elIndex) {
		this.elIndex = elIndex;
	}
	get() {
		return this.elIndex;
	}
	increment() {
		this.elIndex++;
	}
}
var index = new ElIndex();
module.exports = index;