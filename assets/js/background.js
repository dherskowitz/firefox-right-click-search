function retrieved(results) {
    for (let searchEngine of results) {
        browser.contextMenus.create({
            id: searchEngine.name,
            title: searchEngine.name,
            contexts: ["selection"],
            icons: {
                "16": searchEngine.favIconUrl,
            }
        });
    }
}

browser.search.get().then(retrieved);

browser.contextMenus.onClicked.addListener(function (info, tab) {
    search(info.selectionText, info.menuItemId);
})

function search(query, engine) {
    browser.search.search({
        query: query,
        engine: engine
    });
}