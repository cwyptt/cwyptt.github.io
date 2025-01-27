// Date of birth (YYYY/MM/dd)
const birthDate = new Date('2001/09/17');

export const getAge = (unit = 'years'): string => {
	const ageMs = Date.now() - birthDate.getTime();

	// Age calculations
	const ageUnits: Record<string, number> = {
		years: ageMs / (1000 * 60 * 60 * 24 * 365.25),
		months: ageMs / (1000 * 60 * 60 * 24 * 30.44),
		days: ageMs / (1000 * 60 * 60 * 24),
		hours: ageMs / (1000 * 60 * 60),
		minutes: ageMs / (1000 * 60),
		seconds: ageMs / 1000
	};

	// Decimal precision mapping
	const decimalPlaces: Record<string, number> = {
		years: 8,
		months: 7,
		days: 6,
		hours: 5,
		minutes: 4,
		seconds: 3
	};

	// Formatting function
	const format = (num: number, decimals: number) =>
		num.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

	// Validate the unit
	if (!(unit in ageUnits)) {
		throw new Error(`Unknown unit: ${unit}. Please use either years, months, days, hours, minutes, or seconds!`);
	}

	// Format age with corresponding unit label
	return `${format(ageUnits[unit], decimalPlaces[unit])} ${unit} old`
};

export const getYearsOld = (): string => {
	return ((Date.now() - birthDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25)).toFixed();
};