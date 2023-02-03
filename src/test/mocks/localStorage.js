const LocalStorageMock = (() => {
  let store = {};

  return {
    clear: () => {
      store = {};
    },
    getItem: (key) => store[key] || null,
    setItem: (key, value) => {
      store[key] = String(value);
    },
    removeItem: (key) => {
      delete store[key];
    },
  };
})();

export default LocalStorageMock;

// module.exports = LocalStorageMock;
