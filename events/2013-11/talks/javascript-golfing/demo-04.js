var i;
var j = 1;
var k = 0;
for (i = 0; i < 54; i++) {
  /*
  process.stdout.write(
    (
      (i == j)
      && (j += 3 + k++)
    ) ?
    '\n'
    :
    '*'
  );
  */

  // Podemos reescribir el if ... else
  process.stdout.write(((i == j) && (j += 3 + k++)) ? '\n' : '*');
};
