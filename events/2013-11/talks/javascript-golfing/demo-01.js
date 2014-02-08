var i;
var k = 0;
for (i = 1; i < 10; i++) {
  var j;
  for (j = 0; j < i; j++) {
    process.stdout.write('*');
    k++;
  };
  process.stdout.write('\n');
  // Vamos a estudiar la posición de los \n.
  process.stdout.write('--> ' + k++ + '\n');
};
