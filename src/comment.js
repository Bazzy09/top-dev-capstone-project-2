function generateCommentForm() {
  const form = document.createElement('form');
  form.action = '';
  form.className = 'comment-form';

  const commentDateLabel = document.createElement('label');
  commentDateLabel.textContent = 'Date';
  commentDateLabel.for = 'comment-date';

  const commentDate = document.createElement('input');
  commentDate.style.display = 'none';
  commentDate.type = 'text';
  commentDate.id = 'comment-date';

  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const formattedDate = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;

  commentDate.value = formattedDate;

  const nameLabel = document.createElement('label');
  nameLabel.htmlFor = 'comment-username';
  nameLabel.className = 'comment-username';
  nameLabel.textContent = 'Name';

  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.id = 'comment-username';
  nameInput.placeholder = 'Your name';

  const insightsLabel = document.createElement('label');
  insightsLabel.htmlFor = 'comment-insights';
  insightsLabel.className = 'comment-insights';
  insightsLabel.textContent = 'Insights';

  const insightsTextarea = document.createElement('textarea');
  insightsTextarea.id = 'comment-insights';
  insightsTextarea.placeholder = 'Your insights';
  insightsTextarea.rows = '6';

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.className = 'submit-comment';
  submitButton.textContent = 'Comment';

  const commentFields = [commentDate, nameLabel, nameInput, insightsLabel, insightsTextarea, submitButton];
  for (let i = 0; i < commentFields.length; i += 1) {
    form.appendChild(commentFields[i]);
  }
  return form;
}

function createCommentLogs() {
  const commentLogSection = document.createElement('div');
  commentLogSection.className = 'comment-log-section';

  const commentHeader = document.createElement('h2');
  commentHeader.className = 'comment-header';
  commentHeader.textContent = 'Comments';

  const commentRecords = document.createElement('div');
  commentRecords.className = 'comment-records';

  commentLogSection.appendChild(commentHeader);
  commentLogSection.appendChild(commentRecords);

  return commentLogSection;
}
function addComment() {
  const commentRecords = document.querySelector('.comment-records');
  const commentDate = document.querySelector('#comment-date');
  const nameInput = document.querySelector('#comment-username');
  const insightsText = document.querySelector('#comment-insights');
  const newRecord = document.createElement('p');
  newRecord.className = 'new=record';
  newRecord.textContent = `${commentDate.value}   ${nameInput.value}: ${insightsText.value}`;
  commentRecords.appendChild(newRecord);
}

export { generateCommentForm, createCommentLogs, addComment };