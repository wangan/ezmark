var chrome = chrome;
var index = 0;
var sequenceId = 0;

function newItem(data) {
    var json = {
        children: [],
        dateAdded: data.dateAdded,
        dateGroupModified: data.dateGroupModified,
        id: data.id,
        index: data.index,
        parentId: data.parentId,
        title: data.title,
    }

    return json;
}

function retrieve(items, children, parentId) {
    if (typeof (items) !== "undefined") {
        for (var i = 0; i < items.length; i++) {
            sequenceId++;
            var curItem = items[i];
            $(".root").append("<li>" + curItem.title + "</li>");

            var item = newItem(curItem);
            item.id = sequenceId;
            item.parentId = parentId;
            item.index = i;
            children.push(item);

            var subItems = curItem.children;
            retrieve(subItems, item.children, item.id);
        }
    } else {
        index++;
    }
}

chrome.bookmarks.getTree(function (root) {
    if (typeof (root) !== "undefined") {
        console.log(root);
        var items = root[0].children;

        var bookmarks = newItem(items);
        bookmarks.id = sequenceId;
        bookmarks.parentId = sequenceId;
        bookmarks.index = 0;
        bookmarks.title = "所有书签";

        retrieve(items, bookmarks.children, bookmarks.id);
        console.log(bookmarks);
    }
});

$(function () {
    $("#open-options").click(function () {
        //        window.open("options.html");
        chrome.tabs.create({ url: "options.html" }, function () {

        });
    });
});
