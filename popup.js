// Declare constants and assign to corresponding DOM elements
const strip = document.getElementById("strip");
const undo = document.getElementById("undo");

// Strip Functionality
strip.onclick = function buttonFunc(element) {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      // Check for DOM elements and apply necessary styling
      code: `
        if (mainHeader1 === undefined) {
        var mainHeader1 = document.querySelector("#main-header");
        var navFooter = document.querySelector("#nav-footer");
        var wikiBlock = document.querySelector(".wiki-block");
        var wikiLeft = document.querySelector("#wiki-left");
        var newsLetterBox122 = document.getElementById("newsletterForm");
        var bodyTag122 = document.querySelector("body");
        var bodyFont = bodyTag122.style.fontSize;
        }
 
        bodyTag122.style.fontSize="24px";
        mainHeader1.style.opacity="0.005";
        navFooter.style.opacity="0.005";
        wikiBlock.style.opacity="0.005";
        newsLetterBox122.style.opacity="0.005";
        wikiLeft.style.opacity="0.005";
      `
    });
  });
};

// Put it back functionality
undo.onclick = function buttonFunc(element) {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      // Replace the sidebars/header/footer as well as restore the font size
      code: `
      mainHeader1.style.opacity="1";
      navFooter.style.opacity="1";
      wikiBlock.style.opacity="1";
      wikiLeft.style.opacity="1";
      newsLetterBox122.style.opacity="1";
      bodyTag122.style.fontSize=bodyFont;      
      `
    });
  });
};