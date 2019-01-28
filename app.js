const app1 = new Vue({
  el: '#app-1',
  data: {
    message: 'Hello Vue!'
  }
});


const app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
});


const app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
});


const app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})
setInterval(function () { app3.seen = !app3.seen }, 2000)