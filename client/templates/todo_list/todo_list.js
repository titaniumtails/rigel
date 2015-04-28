var todoData = [
  {
    num: '1',
    title: 'Welcome Letter',
    url: 'https://google.com/'
  },
  {
    num: '2',
    title: 'Biographies',
    url: 'https://google.com/'    
  },
  {
    num: '3',
    title: 'Agenda',
    url: 'https://google.com/'    
  },
  {
    num: '4',
    title: 'Presentations',
    url: 'https://google.com/'    
  }
];

Template.todoList.helpers({
  todos: todoData
});