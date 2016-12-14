module.exports = function() {
    let result = {
        tags: {},
        classes: {}
    };

    function addTag(tagName) {
        if (!result.tags[tagName]) {
            result.tags[tagName] = 1;
        } else {
            result.tags[tagName]++;
        }
    }

    function addClass(className) {
        if (!result.classes[className]) {
            result.classes[className] = 1;
        } else {
            result.classes[className]++;
        }
    }

    function getStat() {
        return result;
    }

    return {addTag, addClass, getStat};

};