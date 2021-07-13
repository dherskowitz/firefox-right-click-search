function retrieved(results) {
    browser.contextMenus.removeAll()
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
    browser.contextMenus.refresh();
}

function search(query, engine) {
    browser.search.search({
        query: query,
        engine: engine
    });
}

browser.contextMenus.onClicked.addListener(function (info, tab) {
    search(info.selectionText, info.menuItemId);
})

browser.contextMenus.onShown.addListener(function () {
    browser.search.get().then(retrieved);
})
