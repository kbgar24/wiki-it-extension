// Create Context Menu Options
const menuItem = {
   "id": "Wiki-It",
   "title": "Wiki-It",
   "contexts": ["selection"]
};

// Create Context Menu
chrome.contextMenus.create(menuItem);

// Parse Strings to valid URI
const fixedEncodeURI = (str) => encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');

// Listen for Context Menu click
chrome.contextMenus.onClicked.addListener((clickData) => {
  if (clickData.menuItemId === 'Wiki-It' && clickData.selectionText){
    const wikiUrl = `https://en.wikipedia.org/wiki/${fixedEncodeURI(clickData.selectionText)}`;
    const createData = {
      "url": wikiUrl,
      "type": "popup",
      "top": 5,
      "left": 5,
      "width": parseInt(screen.availWidth/2),
      "height": parseInt(screen.availHeight/2)
    };
    // Create new popup displaying wikipedia snippet
    chrome.windows.create(createData, function(){});
  }
});
