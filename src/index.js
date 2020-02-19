module.exports = function reverse (n) {
  	let str = "";
	let a = String(n);
	for (let i = 0; i < a.length; i++) {
		if ((a[0] !== "0") && !isNaN(a[i])) {
			let num = Math.abs(Number(a[i]));
			str += String(num);
		}
	}
	let newStr = str.split('').reverse().join('').replace(/^0+/, '');
	return +newStr;
}
