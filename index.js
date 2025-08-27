function soma(a, b) {
    return a + b;
}

function subtrai(a, b) {
    return a - b;
}

module.exports = { soma, subtrai };

if (require.main === module) {
    console.log("Resultado da soma: ", soma(2, 3));
}
