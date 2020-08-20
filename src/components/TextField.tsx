import React, { useState, useEffect, useRef, FC } from "react";

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  ok?: boolean;
  i: number;
  fn: (bob: string) => string;
  obj: Person;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField: FC<Props> = () => {
  const [string, setString] = useState<{ text: string }>({ text: "hello" });
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    setString({ text: "bye" });
  }, []);

  return (
    <div>
      <input ref={inputRef} />
    </div>
  );
};
