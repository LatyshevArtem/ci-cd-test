type Id = string;

type User = {
  id: Id;
  name: string;
  age: number;
};

const user: User = { id: '123', name: 'username', age: 25 };
const hasUserIdProp = Object.hasOwn(user, 'id');
