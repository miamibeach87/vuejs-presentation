// **********************************************************************************************************************

const app1 = new Vue({
  el: '#app-1',
  data: {
    message: 'Hey Sombra!'
  }
});

// **********************************************************************************************************************

//trivial and stupid render
const __render = function () {
  const firstAppHost = document.getElementById("app-1");
  const destination = document.getElementById("uniqueId");
  if (!!destination) {
    console.log('elem exists');
    destination.innerText = _reactiveData.fm;
  } else {
    const newElement = document.createElement('p');
    newElement.setAttribute('id', 'uniqueId');
    console.log('creating new destination');
    newElement.innerText = _reactiveData.fm;
    firstAppHost.appendChild(newElement)
  }
};


const _reactiveData = {fm: 'vue'};

let initValue = _reactiveData["fm"];

Object.defineProperty(_reactiveData, 'fm', {
  get() {
    return initValue
  },
  set(newVal) {
    initValue = newVal;
    console.log('i`ll notify');
    __render();
  }
});

// test

let timerHolder;

const __startTest = function () {
  const fms = ['vue', 'react', 'angular', 'ember'];

  let i = 0;

  timerHolder = setInterval(() => {
    _reactiveData.fm = fms[i];
    i++;
    if (i === 4) i = 0;
  }, 3000);
};

const __stopTest = () => {clearInterval(timerHolder)};


// **********************************************************************************************************************

const app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
});

// **********************************************************************************************************************


const app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
});

setInterval(function () {
  app3.seen = !app3.seen
}, 2000);

// **********************************************************************************************************************

const app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      {text: 'Learn JavaScript'},
      {text: 'Learn Vue'},
      {text: 'Build something awesome'}
    ]
  }
});

// **********************************************************************************************************************

const app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Sombra!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
});

// **********************************************************************************************************************

const app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello sombra!'
  }
});

// **********************************************************************************************************************

Vue.component('sombra-todo-item', {
  template: '<li>This is a todo</li>'
});

const app7 = new Vue({
  el: '#app-7',
  data: {
    message: 'Hello sombra!'
  }
});

// **********************************************************************************************************************

Vue.component('todo-item', {
  props: ['todo'],
  template: '<p>{{todo.text}}</p>',
});


const app8 = new Vue({
  el: '#app-8',
  data: {
    todoList: [
      {id: 1, text: 'Sleep'},
      {id: 2, text: 'Eat'},
      {id: 3, text: 'Code'}
    ]
  }
});

// **********************************************************************************************************************
