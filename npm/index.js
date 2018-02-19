// Functions

function totalPrice(sqEdge, pricePerSqft = 100) {
    let result = (sqEdge * pricePerSqft) * 10;
    console.log(result);
}

totalPrice(10);