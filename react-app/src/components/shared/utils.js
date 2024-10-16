class Utils {
	static formatDate(date) {
		return Utils.constants.$FORMATTER.format(date);
	}
	/**
	 * 
	 * @param {*} dateString 
	 * @param {*} currentFormat maybe MM/DD/YYYY
	 * @param {*} otherFormat maybe DD/MM/YYYY
	 */
	static fromDateStringFmtToAnother(dateString, currentFormat, otherFormat) {
		const findFirstPattern = (positionMeta) => {
			const positions = positionMeta.map(positionMeta => positionMeta.index);
			const indexFirstElement = Math.min(...positions);
			const res = positionMeta.find(elem => elem.index == indexFirstElement);
			return res;
			
		};
		const extractValue = (initData, toBeExtracted) => {
			return initData.filter((initDataElem) => toBeExtracted !== initDataElem);
		};
		const monthPattern = 'MM';
		const yearPattern = 'YYYY';
		const dayPattern = 'DD';
		const positionMM = {
			index: currentFormat.indexOf(monthPattern),
			pattern: monthPattern
		};
		const positionYY = {
			index: currentFormat.indexOf(yearPattern),
			pattern: yearPattern
		};
		const positionDD = {
			index: currentFormat.indexOf(dayPattern),
			pattern: dayPattern
		};

		const posOtherMM = otherFormat.indexOf(monthPattern);
		const posOtherYY = otherFormat.indexOf(yearPattern);
		const posOtherDD = otherFormat.indexOf(dayPattern);
		
		const newPositions = {
			[dayPattern]: positionDD == posOtherDD ? positionDD : posOtherDD,
			[yearPattern]: positionYY == posOtherYY ? positionYY : posOtherYY,
			[monthPattern] : positionMM == posOtherMM ? positionMM : posOtherMM
		};
		const currentPositions = [positionDD.index, positionMM.index, positionYY.index];
		const splitterStartAt = Math.min(...currentPositions);
		let tempIndex = splitterStartAt == positionDD ? dayPattern.length : undefined;
		tempIndex = tempIndex || (splitterStartAt == positionMM ? monthPattern.length : undefined);
		tempIndex = tempIndex || yearPattern.length;

		const splitterEndAt = Math.min(...extractValue(currentPositions, splitterStartAt));
			
		const splitter = otherFormat.substring(splitterStartAt + tempIndex, splitterEndAt);

		

		const initialPositionMeta = [positionDD, positionMM, positionYY];
		const atFirstPosition = findFirstPattern(initialPositionMeta);
		let tempPos = extractValue(initialPositionMeta, atFirstPosition);
		const atSecondPosition = findFirstPattern(tempPos);
		const atLastPosition = extractValue(tempPos, atSecondPosition)[0];
		console.log(dateString.substring(newPositions[atFirstPosition.pattern], newPositions[atFirstPosition.pattern] + atFirstPosition.pattern.length));
		let result = dateString.substring(newPositions[atFirstPosition.pattern], newPositions[atFirstPosition.pattern] + atFirstPosition.pattern.length + 1) + 
			splitter + 
			dateString.substring(newPositions[atSecondPosition.pattern], newPositions[atSecondPosition.pattern] + atSecondPosition.pattern.length) +
			splitter + 
			dateString.substring(newPositions[atLastPosition.pattern], newPositions[atLastPosition.pattern] + atLastPosition.pattern.length);
		console.log(result);
		return result;
	}
}
Utils.constants = {
	$FORMATTER: new Intl.DateTimeFormat('ru-RU', { /* Параметры форматирования */ })
};
export default Utils;