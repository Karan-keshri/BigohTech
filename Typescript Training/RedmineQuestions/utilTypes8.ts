
interface User {
    age: number;
    name: string;
  }

type NullabelProperties<Type> = { [K in keyof Type]: Type[K] | null };

  const obj:NullabelProperties<User> ={
    name: "abc",
    age : null
  }

  export {}
  