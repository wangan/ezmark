var chrome = chrome;
var sequenceId = 0;
var logHTML = "";

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
    if (typeof (items) == "undefined")
        return;
    for (var i = 0; i < items.length; i++) {
        sequenceId++;
        var curItem = items[i];

        if (i == 0)
            logHTML += "<ul>";

        var item = newItem(curItem);
        item.id = sequenceId;
        item.parentId = parentId;
        item.index = i;
        children.push(item);

        var subItems = curItem.children;
        logHTML += "<li>" + curItem.title + "</li>";
        retrieve(subItems, item.children, item.id);
    }

    logHTML += "</ul>";
}

chrome.bookmarks.getTree(function (root) {
    if (typeof (root) !== "undefined") {
        console.log(root);
        var items = root[0].children;
        // console.log(JSON.stringify(root[0]))

        var testData = { "A": 1 };

        $.ajax({
            url: "http://localhost:3000/api",
            type: "POST",
            contentType: "application/json",
            // data: JSON.stringify(root[0]),
            data: JSON.stringify(root[0]),
            success: function (data) {
                console.log(data)
            }
        });

        //         var bookmarks = newItem(items);
        //         bookmarks.id = sequenceId;
        //         bookmarks.parentId = sequenceId;
        //         bookmarks.index = 0;
        //         bookmarks.title = "所有书签";
        // 
        //         retrieve(items, bookmarks.children, bookmarks.id);
        //         $(".root").append(logHTML);
        //         console.log(bookmarks);
    }
});

chrome.bookmarks.onCreated.addListener(function () {

    console.log("Create 1");
});



$(function () {
    $("#open-options").click(function () {
        //        window.open("options.html");
        chrome.tabs.create({ url: "options.html" }, function () {

        });
    });
});
