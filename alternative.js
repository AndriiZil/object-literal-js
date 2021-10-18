function getDogQuote(breed) {
    const breeds = {
        akita: 'Akitas do speak, but only to those who know how to listen.',
        beagle: 'Life is better with a Beagle.',
        dachshund: 'Why do dachshunds wear their ears inside out?',
        'golden retriever': 'The face of a Golden Retriever feels like home.',
        pug: 'The puggle is real.',
    }
    return breeds[breed.toLowerCase()] ?? 'Quote not found.';
}

function stringToBool(str) {
    const boolString = {
        'true': true,
        'false': false,
    }

    return boolString[str] ?? 'String is not boolean value';
}

function calculate(num1, num2, action) {
    const actions = {
        add: (a, b) => a + b,
        abstract: (a, b) => a - b,
        multiply: (a, b) => a * b,
        divide: (a, b) => a / b,
    }

    return actions[action]?.(num1, num2) ?? 'calculation is not recognized';
}
