self.addEventListener('install',function(event){
event.waitUntil(
caches.open('caku-v5').then(function(cache){
return cache.addAll([
'/',
 '/index.html', 
])
})


)
})
self.addEventListener('fetch', function(event){
event.opendWith(
caches.match(event.request).then(function(response){
return response || fetch(event.request)
})
)


})
