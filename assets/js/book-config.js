// some initial parameters
export const BookConfig = {
    urlFixer: val => val,
    toc: {
        url: '../toc', // # or '../SUMMARY' for GitBook
        selector: 'nav, ol, ul', // # picks the first one that matches
    },
    baseHref: null, //  # or '//archive.cnx.org/contents'
    serverAddsTrailingSlash: false, //# Used because jekyll adds trailing slashes
    rootUrl: '',
    includes: {
        fontawesome: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
    }
}

// merge the initial parameters with the ones from the window
mergeObjectsRecursive(BookConfig, window.Book);

function mergeObjectsRecursive(target, source) {
    for (const key in source) {
        if (source.hasOwnProperty(key)) {
            if (source[key] instanceof Object) {
                if (!target[key]) {
                    // If the key doesn't exist in the target, create a new object
                    target[key] = {};
                }
                // Recursively merge the nested objects
                mergeObjectsRecursive(target[key], source[key]);
            } else {
                // Assign the property from the source object to the target object
                target[key] = source[key];
            }
        }
    }
}
