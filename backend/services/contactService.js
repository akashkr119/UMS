const submissions = [];

exports.saveContactMessage = (message) => {
  const entry = {
    id: submissions.length + 1,
    ...message,
    createdAt: new Date().toISOString()
  };

  submissions.push(entry);
  return entry;
};

exports.getSubmissionCount = () => submissions.length;
