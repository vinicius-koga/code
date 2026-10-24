function isValid(str: string): boolean {
    const checkedChars = [];
    const openingChars = "({[";

	if (str.length <= 1) return false;

    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i]!;

        if (openingChars.includes(currentChar)) {
            checkedChars.push(currentChar);
            continue;
        }

        const lastCheckedChar = checkedChars[checkedChars.length - 1];

        const expectedChar =
			currentChar === ")" ? "(" :
			currentChar === "]" ? "[" :
			currentChar === "}" ? "{" : null;

        if (lastCheckedChar !== expectedChar) return false;
	
		checkedChars.pop();
	}
	
    return checkedChars.length === 0;
}