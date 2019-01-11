function convertToRoman(num) {
    let rest = num;
    let result = [];
    const romanSymbols = {
        1000: "M",
        500: "D",
        100: "C",
        50: "L",
        10: "X",
        5: "V",
        1: "I"
    };
    const romanValues = [1000, 500, 100, 50, 10, 5, 1];

    const breakedNumber = [{
            1000: Math.floor(num / 1000)
        },
        {
            100: Math.floor(num % 1000 / 100)
        },
        {
            10: Math.floor(num % 100 / 10)
        },
        {
            1: Math.floor(num % 10)
        }
    ];

    for (const val of breakedNumber) {
        const fraction = Object.keys(val)[0];
        const value = Object.values(val)[0];
        updateResult(fraction, value)
    }

    function updateResult(fraction, value) {
        let currentFraction = fraction * value;

        while (currentFraction > 3000) {
            result.push(romanSymbols[1000]);
            currentFraction -= 1000;
        }

        function pushFor(a) {
            for (let index = 0; index < a; index++) {
                result.push(romanSymbols[fraction]);
            };
        }
        switch (value) {
            case 1:
            case 5:
                result.push(romanSymbols[currentFraction]);
                break;
            case 9:
            case 4:
                result.push(romanSymbols[fraction], romanSymbols[currentFraction + +fraction]);
                break;
            case 2:
            case 3:
                pushFor(value);
                break;
            case 6:
            case 7:
            case 8:
                let add = value - 5;
                result.push(romanSymbols[currentFraction - fraction * add]);
                pushFor(add)
                break;
        }
    }
    result = result.join("");
    return result;
}
export {convertToRoman}