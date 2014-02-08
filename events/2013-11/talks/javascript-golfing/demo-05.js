j = 1;
for (k = i = 0; i < 54; i++) {
  // Quitamos paréntesis no necesarios.
  process.stdout.write(i == j && (j += 3 + k++) ? '\n' : '*');
};
