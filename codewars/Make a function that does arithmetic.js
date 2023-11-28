function arithmetic(a, b, operator) {
    switch (true) {
        case operator == "add": return a + b;
        case operator == "subtract": return a - b;
        case operator == "multiply": return a * b;
        case operator == "divide": return a / b;
    }
}