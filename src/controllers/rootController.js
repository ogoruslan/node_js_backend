const getRoot = (req, res) => {
  res.type('text').send('Get root route');
};

export default { getRoot };