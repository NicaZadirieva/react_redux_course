export const INITIAL_STATE = {
	isValid: {
		post: true,
		title: true,
		date: true
	},
	values: {
		post: undefined,
		title: undefined,
		date: undefined
	},
	isFormReadyToSubmit: false
};
const validateDate = (formData) => {
	try {
		if(!formData.date) {
			throw new Error('Date must be specified');
		}
		new Date(formData.date);
		return {date: true};
	} catch (e) {
		const notValidData = {
			valid: false,
			errorMessage: e.message,
			data: formData,
			stackTrace: e.stack
		};
		console.error(notValidData.errorMessage, notValidData.data, notValidData.stackTrace);
		return {date: false};
			
	}
};
const validateRequired = (formData, requiredFields) => {
	const emptyFields = requiredFields.filter(
		(field) => formData[field].trim().length == 0
	);
	const hasAllRequiredFields = emptyFields.length == 0;
	if(hasAllRequiredFields) {
		const newValidState = Object.fromEntries(
			requiredFields.map(
				(field) => [field, true]
			));
		return newValidState;
	} else {
		const newFailureState = Object.fromEntries(
			requiredFields.map(
				(field) => [field, false]
			)
		);
		return newFailureState;
	}
};

export function formReducer(prevState, action) {
	switch(action.type) {
	case 'RESET_VALIDITY': 
		return {...prevState, isValid: INITIAL_STATE.isValid};
	case 'FILL': {
		const validateDateResult = validateDate(action.payload);
		const validateRequiredResult = validateRequired(action.payload, /*requiredFields=*/['title', 'post']);
		return {
			values: action.payload, 
			isValid: {
				post: validateRequiredResult.post,
				title: validateRequiredResult.title,
				date: validateDateResult.date
			},
			isFormReadyToSubmit: validateRequiredResult.title && validateRequiredResult.post && validateDateResult.date
		};
	}
	}
}