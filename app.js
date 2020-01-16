new Vue({
  //创建根元素，容器element
  el: '#app',
  //data内的属性内容只作用于#app的内部
  data() {
    return {
      todos: [],
      todo: {
        title: '',
        completed: false
      }
    };
  },
  //方法
  mounted() {
    // fetch api请求借口
    fetch("http://jsonplaceholder.typicode.com/todos").then(res => {
        return res.json();
      })
      .then(todos => {
        this.todos = todos;
      })
  },
  methods: {
    onSubmit() {
      // console.log(this.todo);
      fetch("http://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        body: JSON.stringify(this.todo),
        headers: {
          "Content-type": "application/json"
        }
      }).then(res => {
        return res.json();
      }).then(todo => {
        // console.log(todo)
        this.todos.unshift(todo);
      });
    }
  },
});