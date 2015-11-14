
$('#task-title').on('keydown', function(event) {
  if (event.which === 13) {
    event.preventDefault();
    $.post('/task/create', {
      title: this.value
    }, function() {
      updateList();
      alert('Task inserida com sucesso!');
    });

    this.value = '';
  }
});


updateList();

function updateList() {
  $.get('/tasks', function(tasks) {
    $('#tasks-list').empty().append(tasks.map(function(task) {
      return $('<li>', { text: task.title });
    }));
  }, 'json');
}
