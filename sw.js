var VERSION = '0.0.1'

var files = [
  './',
  './dist/css/main.css',
  './dist/js/main.js',
  './dist/img/icons.svg'
]

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(VERSION).then(function(cache) {
      return cache.addAll(files)
    }).then(function() {
      self.skipWaiting()
    })
  )
})

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      if (response) {
        return response
      }
      return fetch(event.response)
    })
  )
})
