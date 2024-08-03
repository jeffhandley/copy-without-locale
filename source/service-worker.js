getCurrentTab().then(tab => setActionState(hasLocale(tab)));

const locales = [
    'af-za', 'am-et', 'ar-ae', 'ar-bh', 'ar-dz', 'ar-eg', 'ar-iq', 'ar-jo', 'ar-kw', 'ar-lb', 'ar-ly', 'ar-ma', 'arn-cl', 'ar-om', 'ar-qa', 'ar-sa', 'ar-sd', 'ar-sy', 'ar-tn', 'ar-ye', 'as-in', 'az-az', 'az-cyrl-az', 'az-latn-az', 'ba-ru', 'be-by', 'bg-bg', 'bn-bd', 'bn-in', 'bo-cn', 'br-fr', 'bs-cyrl-ba', 'bs-latn-ba', 'ca-es', 'co-fr', 'cs-cz', 'cy-gb', 'da-dk', 'de-at', 'de-ch', 'de-de', 'de-li', 'de-lu', 'dsb-de', 'dv-mv', 'el-cy', 'el-gr', 'en-029', 'en-au', 'en-bz', 'en-ca', 'en-cb', 'en-gb', 'en-ie', 'en-in', 'en-jm', 'en-mt', 'en-my', 'en-nz', 'en-ph', 'en-sg', 'en-tt', 'en-us', 'en-za', 'en-zw', 'es-ar', 'es-bo', 'es-cl', 'es-co', 'es-cr', 'es-do', 'es-ec', 'es-es', 'es-gt', 'es-hn', 'es-mx', 'es-ni', 'es-pa', 'es-pe', 'es-pr', 'es-py', 'es-sv', 'es-us', 'es-uy', 'es-ve', 'et-ee', 'eu-es', 'fa-ir', 'fi-fi', 'fil-ph', 'fo-fo', 'fr-be', 'fr-ca', 'fr-ch', 'fr-fr', 'fr-lu', 'fr-mc', 'fy-nl', 'ga-ie', 'gd-gb', 'gd-ie', 'gl-es', 'gsw-fr', 'gu-in', 'ha-latn-ng', 'he-il', 'hi-in', 'hr-ba', 'hr-hr', 'hsb-de', 'hu-hu', 'hy-am', 'id-id', 'ig-ng', 'ii-cn', 'in-id', 'is-is', 'it-ch', 'it-it', 'iu-cans-ca', 'iu-latn-ca', 'iw-il', 'ja-jp', 'ka-ge', 'kk-kz', 'kl-gl', 'km-kh', 'kn-in', 'kok-in', 'ko-kr', 'ky-kg', 'lb-lu', 'lo-la', 'lt-lt', 'lv-lv', 'mi-nz', 'mk-mk', 'ml-in', 'mn-mn', 'mn-mong-cn', 'moh-ca', 'mr-in', 'ms-bn', 'ms-my', 'mt-mt', 'nb-no', 'ne-np', 'nl-be', 'nl-nl', 'nn-no', 'no-no', 'nso-za', 'oc-fr', 'or-in', 'pa-in', 'pl-pl', 'prs-af', 'ps-af', 'pt-br', 'pt-pt', 'qut-gt', 'quz-bo', 'quz-ec', 'quz-pe', 'rm-ch', 'ro-mo', 'ro-ro', 'ru-mo', 'ru-ru', 'rw-rw', 'sah-ru', 'sa-in', 'se-fi', 'se-no', 'se-se', 'si-lk', 'sk-sk', 'sl-si', 'sma-no', 'sma-se', 'smj-no', 'smj-se', 'smn-fi', 'sms-fi', 'sq-al', 'sr-ba', 'sr-cs', 'sr-cyrl-ba', 'sr-cyrl-cs', 'sr-cyrl-me', 'sr-cyrl-rs', 'sr-latn-ba', 'sr-latn-cs', 'sr-latn-me', 'sr-latn-rs', 'sr-me', 'sr-rs', 'sr-sp', 'sv-fi', 'sv-se', 'sw-ke', 'syr-sy', 'ta-in', 'te-in', 'tg-cyrl-tj', 'th-th', 'tk-tm', 'tlh-qs', 'tn-za', 'tr-tr', 'tt-ru', 'tzm-latn-dz', 'ug-cn', 'uk-ua', 'ur-pk', 'uz-cyrl-uz', 'uz-latn-uz', 'uz-uz', 'vi-vn', 'wo-sn', 'xh-za', 'yo-ng', 'zh-cn', 'zh-hk', 'zh-mo', 'zh-sg', 'zh-tw', 'zu-za',
    'af', 'am', 'ar', 'arn', 'as', 'az', 'ba', 'be', 'bg', 'bn', 'bo', 'br', 'bs', 'ca', 'co', 'cs', 'cy', 'da', 'de', 'dsb', 'dv', 'el', 'en', 'es', 'et', 'eu', 'fa', 'fi', 'fil', 'fo', 'fr', 'fy', 'ga', 'gd', 'gl', 'gsw', 'gu', 'ha', 'he', 'hi', 'hr', 'hsb', 'hu', 'hy', 'id', 'ig', 'ii', 'in', 'is', 'it', 'iu', 'iw', 'ja', 'ka', 'kk', 'kl', 'km', 'kn', 'kok', 'ko', 'ky', 'lb', 'lo', 'lt', 'lv', 'mi', 'mk', 'ml', 'mn', 'moh', 'mr', 'ms', 'mt', 'nb', 'ne', 'nl', 'nn', 'no', 'nso', 'oc', 'or', 'pa', 'pl', 'prs', 'ps', 'pt', 'qut', 'quz', 'rm', 'ro', 'ru', 'rw', 'sah', 'sa', 'se', 'si', 'sk', 'sl', 'sma', 'smj', 'smn', 'sms', 'sq', 'sr', 'sv', 'sw', 'syr', 'ta', 'te', 'tg', 'th', 'tk', 'tlh', 'tn', 'tr', 'tt', 'tzm', 'ug', 'uk', 'ur', 'uz', 'vi', 'wo', 'xh', 'yo', 'zh', 'zu'
];

function hasLocale(tab) {
    const hasTabUrl = tab && tab.id && tab.url;

    if (hasTabUrl) {
        console.log('hasLocale', tab.url);

        const pathParts = new URL(tab.url).pathname.split('/');
        return pathParts.some(part => locales.includes(part.toLowerCase()));
    }
    else {
        console.log('hasLocale', tab);
    }

    return false;
}

async function getCurrentTab() {
    let [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
    return tab;
}

function setActionState(enabled) {
    if (enabled) {
        chrome.action.enable();
    }
    else {
        chrome.action.disable();
    }

    chrome.action.setIcon({
        path: {
            "32": `images/icon-32-${(enabled ? 'enabled' : 'disabled')}.png`,
            "64": `images/icon-64-${(enabled ? 'enabled' : 'disabled')}.png`,
            "128": `images/icon-128-${(enabled ? 'enabled' : 'disabled')}.png`
        }
    });
}

async function tabLoaded(tab) {
    setActionState(hasLocale(tab));
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' || changeInfo.url) {
        tabLoaded(tab);
    }
});

chrome.tabs.onActivated.addListener((result) => {
    chrome.tabs.get(result.tabId, tabLoaded);
});

chrome.action.onClicked.addListener((tab) => {
    const { id, url, title } = tab;
    const { pathname } = new URL(url);
    const pathParts = pathname.split('/');

    const pathPartsWithoutLocale = pathParts.filter(part => !locales.includes(part.toLowerCase()));
    const pathnameWithoutLocale = pathPartsWithoutLocale.join('/');
    const urlWithoutLocale = url.replace(pathname, pathnameWithoutLocale);

    chrome.tabs.sendMessage(id, { type: 'copyLink', url: urlWithoutLocale, title });
});
