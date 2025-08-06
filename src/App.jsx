import { useState } from "react";
import InputForm from "./components/InputForm";
import TimeDisplay from "./components/TimeDisplay";

const App = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-green-100 via-green-200 to-green-300 
    flex items-center justify-center p-4"
    >
      <div
        className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-xl border border-green-300 
      flex flex-col items-center gap-2"
      >
        <TimeDisplay />
        <InputForm />
      </div>
    </div>
  );
};

export default App;
