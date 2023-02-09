let sym1 = Symbol("username"),
  sym2 = Symbol("password"),
  User = {
    [sym1]: "John",
    [sym2]: "private!",
    age: () => alert("Private method!"),
  };
