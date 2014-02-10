/*
output:

*
**
***
****
*****
******
*******
********
*********

*/

var i;
var j;
for (i = 1; i < 10; i++) {
  for (j = 0; j < i; j++) {
    process.stdout.write('*');
  };
  process.stdout.write('\n');
};

