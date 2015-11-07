/*
 * THE CAT EXTENSION
 * http://scratchx.org/?url=http://lifaythegoblin.github.io/extensions/CatX.js
 */
(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.catpic = function() {
		var randomUrl = "http://thecatapi.com/api/images/get?format=src" ;
        window.open(randomUrl, '_blank');
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            [' ', 'Give me a Cat Pic', 'catpic'],
        ],
		url: 'http://lifaythegoblin.github.io/extensions/CatX.js'
    };

    // Register the extension
    ScratchExtensions.register('CatX', descriptor, ext);
})({});