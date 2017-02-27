var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var zieloneSłonieText = 'Zielone słonie';
var zieloneSłonieTextUpperCased = zieloneSłonieText.toUpperCase();
var textCharsAfter = text.replace('Papugi', zieloneSłonieTextUpperCased);

console.log(text);
console.log(textCharsAfter);
console.log(textCharsAfter.substring(0, textCharsAfter.length/2));