var i;
for (i = 0; i < 54; i++) {
  // Sabemos que en éstas posiciones debemos imprimir un \n.
  if (i == 1 || i == 4 || i == 8 || i == 13 || i == 19 || i == 26 || i == 34 || i == 43 || i == 53) {
    process.stdout.write('\n');
  } else {
    process.stdout.write('*');
  }
};
