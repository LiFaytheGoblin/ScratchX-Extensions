/*
 * THE CAT EXTENSION
 * http://scratchx.org/?url=https://cdn.rawgit.com/LiFaytheGoblin/ScratchX-Extensions/gh-pages/CatX.js#scratch
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
            ['w', 'Give me a Cat Pic', 'catpic'],
        ],
		url: 'https://github.com/LiFaytheGoblin/ScratchX-Extensions'
    };

    // Register the extension
    ScratchExtensions.register('CatX', descriptor, ext);
})({});