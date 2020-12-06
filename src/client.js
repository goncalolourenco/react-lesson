let userTodos = {
  1: [
    { id: 100, text: "go to the gym", done: false },
    { id: 101, text: "make dinner", done: true },
  ],
  2: [
    { id: 100, text: "go to the bank", done: false },
    { id: 101, text: "make lunch", done: true },
  ],
  3: [
    { id: 100, text: "walk the dog", done: false },
    { id: 101, text: "see tv show", done: true },
  ],
};

let users = [
  { id: 1, name: "Ben" },
  { id: 2, name: "Jimmy" },
  { id: 3, name: "Ana" },
];

export default {
  getUserTodos: async ({ userId }) => {
    return new Promise((resolve) =>
      setTimeout(() => resolve(userTodos[userId]), 2000)
    );
  },

  getUsers: async () => {
    return new Promise((resolve) => setTimeout(() => resolve(users), 1000));
  },
};
