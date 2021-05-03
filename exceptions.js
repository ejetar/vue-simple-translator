function LanguageNotAvailableException() {
	this.name = "LanguageNotAvailableException";
	this.message = "xpto"; //todo
	this.stack = (new Error()).stack;
}
LanguageNotAvailableException.prototype = Object.create(LanguageNotAvailableException.prototype);
LanguageNotAvailableException.prototype.constructor = LanguageNotAvailableException;

function DefaultLanguageNotDefined() {
	this.name = "DefaultLanguageNotDefined";
	this.message = "xpto"; //todo
	this.stack = (new Error()).stack;
}
DefaultLanguageNotDefined.prototype = Object.create(DefaultLanguageNotDefined.prototype);
DefaultLanguageNotDefined.prototype.constructor = DefaultLanguageNotDefined;

export {
	LanguageNotAvailableException,
	DefaultLanguageNotDefined
};
