import { useMemo, useState, useEffect } from "react";

let i = 0;
const Test = ({ user }: any) => {
  i++;
  console.log(`rendered ${i}`);

  useEffect(() => {
    console.log("useEffect ran even if user didn't really change its content");
  }, [user]);

  useMemo(() => {
    console.log("useMemo ran even if user didn't really change its content");
  }, [user]);

  return <>AS</>;
};

export default function App() {
  const [count, setCount] = useState(0);
  const user = { test: "something" };

  return (
    <div>
      <Test user={user} />
      {count}
      <button onClick={() => setCount((state) => state + 1)}>render</button>
    </div>
  );
}
