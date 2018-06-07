
// pwa fire for developers - codelab - web share api - add on
// https://pwafire.org/developer/
// Authored by maye edwin https://twitter.com/MayeEdwin1
// ths web app share add on works magically when on your mobile device;

(function () {
    'use strict';
    // check if share API is supported or not
    if (navigator.share !== undefined) {
      document.addEventListener('DOMContentLoaded', function() {
        // select the html element with id "share"
        var shareBtn = document.querySelector('.share');
        // add share button event listener
        shareBtn.addEventListener('click', function(event) {
          // web share API
          navigator.share({
            title: document.title,
            text: 'This is PWA Fire Demo Progressive App #pwafire #pwafirebuild #MeetMaye',
            url: window.location.href
          })
          .then(function() {
            console.info('PWA Fire Demo shared successfully!');
          })
          .catch(function (error) {
            console.error('Wooooooo! Some magic failed in sharing:', error);
          })
        });
      });
    }
  })();
