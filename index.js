function soma(a, b) {
    return a + b;
}

module.exports = soma;

if (require.main === module) {
    console.log("Resultado da soma: ", soma(2, 3));
}
