function getDogQuote(breed) {
    if (breed.toLowerCase() === 'akita') {
        return 'Akitas do speak, but only to those who know how to listen.';
    } else if (breed.toLowerCase() === 'beadge') {
        return 'Life is better with a Beagle.';
    } else if (breed.toLowerCase() === 'dachshund') {
        return 'Why do dachshunds wear their ears inside out?';
    } else if (breed.toLowerCase() === 'pug') {
        return 'The puggle is real.';
    } else if (breed.toLowerCase() === 'golden retriever') {
        return 'The face of a Golden Retriever feels like home.'
    }

    return 'Qoute not found';
}
