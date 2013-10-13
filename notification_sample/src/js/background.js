chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('src/html/window.html', {
    'bounds': {
      'width': 400,
      'height': 500
    }
  });
});