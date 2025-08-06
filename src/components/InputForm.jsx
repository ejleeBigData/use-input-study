import useInput from "../hooks/useInput";

const InputForm = () => {
  const name = useInput("");
  const password = useInput("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-green-200 to-green-300 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full border border-green-300">
        <h2 className="text-2xl font-bold text-green-800 mb-6">
          🌿 사용자 입력
        </h2>

        {/* 이름 입력 */}
        <div className="mb-6">
          <label className="block text-green-800 font-medium mb-2">이름</label>
          <input
            type="text"
            value={name.value}
            onChange={name.onChange}
            placeholder="이름을 입력하세요"
            className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <div className="flex justify-between items-center mt-2">
            <p className="text-green-700 text-sm">입력된 이름: {name.value}</p>
            <button
              onClick={name.reset}
              className="bg-green-600 text-white px-3 py-1 rounded-md text-sm hover:bg-green-700 transition"
            >
              초기화
            </button>
          </div>
        </div>

        {/* 패스워드 입력 */}
        <div className="mb-4">
          <label className="block text-green-800 font-medium mb-2">
            패스워드
          </label>
          <input
            type="password"
            value={password.value}
            onChange={password.onChange}
            placeholder="패스워드를 입력하세요"
            className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <div className="flex justify-between items-center mt-2">
            <p className="text-green-700 text-sm">
              입력된 패스워드: {password.value}
            </p>
            <button
              onClick={password.reset}
              className="bg-green-600 text-white px-3 py-1 rounded-md text-sm hover:bg-green-700 transition"
            >
              초기화
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputForm;
