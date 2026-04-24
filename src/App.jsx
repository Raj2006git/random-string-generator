import React, { useState, useCallback, useEffect } from "react";

const RandomStringGenerator = () => {
  const [length, setLength] = useState(10);
  const [randomString, setRandomString] = useState("");

  // 🔥 useCallback
  const generateString = useCallback(() => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }

    setRandomString(result);
  }, [length]);

  // 🔥 useEffect
  useEffect(() => {
    generateString();
  }, [generateString]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f172a] text-white px-4">

      <h1 className="text-3xl font-bold mb-6">
        Random String Generator
      </h1>

      {/* INPUT */}
      <div className="mb-4">
        <label className="mr-2">Length:</label>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="px-3 py-2 rounded bg-black text-white border"
          min="1"
        />
      </div>

      {/* BUTTON */}
      <button
        onClick={generateString}
        className="bg-[#5bf4de] text-black px-6 py-2 rounded mb-6 font-semibold hover:scale-105 transition"
      >
        Generate
      </button>

      {/* OUTPUT */}
      <div className="bg-black px-6 py-4 rounded-lg text-lg tracking-widest break-all text-center max-w-md">
        {randomString}
      </div>
    </div>
  );
};

export default RandomStringGenerator;