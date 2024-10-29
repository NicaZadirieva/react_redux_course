class Utils {
	static formatDate(date) {
		return Utils.constants.$FORMATTER.format(date);
	}

	static parseDateString(dateString) {
		return new Date(dateString).toISOString()
			.slice(0, 10) /**обрезать только то что касается даты */;
	}
}
Utils.constants = {
	$FORMATTER: new Intl.DateTimeFormat('ru-RU', { /* Параметры форматирования */ })
};
export default Utils;