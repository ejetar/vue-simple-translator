import { LanguageNotAvailableException, DefaultLanguageNotDefined } from './exceptions'
import _ from 'lodash';
let options = {};
function translate(text, language = undefined) {
	language = navigator.language ?? options.defaultLanguage;

	//If the selected language is not available
	return !_.get(options.availableLanguages, language)
		? text
		: options.translations[language][text];
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

export {translate};
