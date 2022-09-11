const arabicNumbers = [
    '١',
    '٢',
    '٣',
    '٤',
    '٥',
    '٦',
    '٧',
    '٨',
    '٩',
    '٠',
];
const persianNumbers = [
    '۱',
    '۲',
    '۳',
    '۴',
    '۵',
    '۶',
    '۷',
    '۸',
    '۹',
    '۰',
];
const englishNumbers = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
];

export function toEnglishNumber(value: string): string {
    if (!value) {
        return;
    }
    let result: string = String(value);

    for (
        let index = 0, numbersLen = englishNumbers.length;
        index < numbersLen;
        index++
    ) {
        result = result
            .replace(
                new RegExp(persianNumbers[index], 'g'),
                englishNumbers[index],
            )
            .replace(
                new RegExp(arabicNumbers[index], 'g'),
                englishNumbers[index],
            );
    }

    return result;
}

export function toNumber(value: string): number {
    if (!value && typeof value !== 'number') {
        return;
    }
    /**
     * FIXME: I had no option except doing this. In the following case I has had problem that if value was ['1'] it
     * was calling this method twice. Once with '1' and once with 1.
     * @Transform(({ value }) => value.map(toNumber))
     */
    if (typeof value === 'number') {
        return value;
    }

    let result: string = value;

    for (
        let index = 0, numbersLen = englishNumbers.length;
        index < numbersLen;
        index++
    ) {
        result = result
            .replace(
                new RegExp(persianNumbers[index], 'g'),
                englishNumbers[index],
            )
            .replace(
                new RegExp(arabicNumbers[index], 'g'),
                englishNumbers[index],
            );
    }

    return Number(result);
}
