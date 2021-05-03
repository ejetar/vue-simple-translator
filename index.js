import { LanguageNotAvailableException, DefaultLanguageNotDefined } from './exceptions'
let options = {};
const _ = require('lodash');

function translate(text, language = undefined) {
	if (!language)
		language = options.defaultLanguage;

	//If the selected language is not available
	if (!_.get(options.availableLanguages, language))
		throw new LanguageNotAvailableException;

	return options.translations[options.defaultLanguage][text];
}

export default {
	install: (app, opt) => {
		options = opt;

		//If the default language not defined
		if (!_.get(options, 'defaultLanguage'))
			throw new DefaultLanguageNotDefined;

		app.config.globalProperties.$translate = translate;
	}
}
