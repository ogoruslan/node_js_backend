const getUsers = (req, res) => {
  res.json({ "message": "Get users route" });
};

const createUser = (req, res) => {
  res.type('text').send('Post users route');
};

const getUserById = (req, res) => {
  res.type('json').send(`{ "message": "Get user by Id route", "userId": "${req.params.userId}" }`);
};

const updateUser = (req, res) => {
  res.type('text').send(`Put user by Id route: ${req.params.userId}`);
};

const deleteUser = (req, res) => {
  res.type('text').send(`Delete user by Id route: ${req.params.userId}`);
};

export default { getUsers, createUser, getUserById, updateUser, deleteUser };