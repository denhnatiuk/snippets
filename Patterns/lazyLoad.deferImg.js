/**
 * lazyLoad - function pattern to defer image loading using
 *  'data-src' attribute
 *
 * @return {event}  defer image loading
 */
function lazyLoad() {
var imgDefer = document.getElementsByTagName('img');
for (var i=0; i<imgDefer.length; i++) {
if(imgDefer[i].getAttribute('data-src')) {
imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
} } }
window.onload = lazyLoad;
