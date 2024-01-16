zoteroPane = Zotero.getActiveZoteroPane();
items = zoteroPane.getSelectedItems();
var result = "";

// 列出常见的介词
var prepositions = ["of", "in", "on", "and", "the", "with", "for", "to", "at", "by", "from"];

for(item of items) {
    var title = item.getField('title');
    result += " " + title + "\n";

    var new_title = title.replace(/\b\w+\b/g, function(word, offset) {
        // 检查单词是否为'the'，且出现在标题开头
        if(word.toLowerCase() === "the" && offset === 0) {
            return "The";
        } else if(prepositions.includes(word.toLowerCase())) {
            return word.toLowerCase();
        } else {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
    });

    result += "-> " + new_title + "\n\n";

    // Do it at your own risk
    item.setField('title', new_title);
    await item.saveTx();
}

return result;
