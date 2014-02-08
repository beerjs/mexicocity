var i;
var j = 1;
var k = 0;
for (i = 0; i < 54; i++) {
  // Ya tenemos el patrón.
  if (i == j) {
    process.stdout.write('\n');
    j = j + 3 + k++;
  } else {
    process.stdout.write('*');
  }
};
