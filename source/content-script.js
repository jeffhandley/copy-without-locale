function copyLinkToClipboard({ url, title }) {
    const overrideCopyCommand = (event) => {
        event.clipboardData.setData('text/plain', url);
        event.clipboardData.setData('text/html', `<a href='${url}'>${title}</a>`);

        event.preventDefault();
    };

    document.addEventListener('copy', overrideCopyCommand);
    document.execCommand('copy');
    document.removeEventListener('copy', overrideCopyCommand);
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    const { type } = message;

    switch (message.type) {
        case 'copyLink':
            return copyLinkToClipboard(message);
    }
});
