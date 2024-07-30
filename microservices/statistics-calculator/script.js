const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;

const getMedian = (array) => {
    // The slice method creates a shallow copy of array so you don't mutate the original array.
    const sorted = array.slice().sort((a, b) => a - b);
    const median =
        sorted.length % 2 === 0
            ? getMean([sorted[sorted.length / 2 - 1], sorted[sorted.length / 2]])
            : sorted[Math.floor(sorted.length / 2)];
    return median;
};

const getMode = (array) => {
    const counts = {};
    array.forEach(el => {
        if (counts[el]) {
            counts[el] += 1;
        } else {
            counts[el] = 1;
        }
    })

    const frequencies = Object.values(counts);
    const maxFrequency = Math.max(...frequencies);

    if (frequencies.filter(freq => freq === maxFrequency).length === frequencies.length) {
        return "No mode";
    };

    const mode = Object.keys(counts).filter(el => counts[el] === maxFrequency);
    return mode.join(', ');
};

const getRange = (array) => {
    return Math.max(...array) - Math.min(...array);
};

const getVariance = (array) => {
    const mean = getMean(array);
    const variance = array.reduce((acc, el) => {
        const difference = el - mean;
        const squared = difference ** 2;
        return acc + squared;
    }, 0) / array.length;
    return variance;
};

const getStandardDeviation = (array) => {
    const variance = getVariance(array);
    const standardDeviation = Math.sqrt(variance);
    return standardDeviation;
}

const calculate = () => {
    const value = document.querySelector('#numbers').value;
    const array = value.split(/,\s*/g);
    const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));

    console.log(numbers);
    const mean = getMean(numbers);
    const median = getMedian(numbers);
    const mode = getMode(numbers);
    const range = getRange(numbers);
    const variance = getVariance(numbers);
    const standardDeviation = getStandardDeviation(numbers);

    document.querySelector('#mean').textContent = mean;
    document.querySelector('#median').textContent = median;
    document.querySelector('#mode').textContent = mode;
    document.querySelector('#range').textContent = range;
    document.querySelector('#variance').textContent = variance;
    document.querySelector('#standardDeviation').textContent = standardDeviation;
};