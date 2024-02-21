import { useReducer, useState } from "react";
import "./App.css";
type FortuneType = {
  fortunes: string[];
};
type FortuneAction = {
  type: string;
  payload: string;
};
const ADD_FORTUNE = "ADD_FORTUNE";
const fortunes = ["大吉", "吉", "中吉", "小吉", "末吉", "凶", "大凶"];
const initialState = {
  fortunes: [],
};

function App() {
  const [fortune, setFortune] = useState("");

  const fortuneReducer = (state: FortuneType, action: FortuneAction) => {
    switch (action.type) {
      case "ADD_FORTUNE":
        return {
          ...state,
          fortunes: [...state.fortunes, action.payload],
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fortuneReducer, initialState);

  const randomFortune = () => {
    const getFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    setFortune(getFortune);
    dispatch({ type: ADD_FORTUNE, payload: getFortune });
  };
  const divineMessage = () => {
    switch (fortune) {
      case "大吉":
        return <div>大吉！ラッキー！！</div>;
      case "吉":
        return <div>吉！ラッキー！！</div>;
      case "中吉":
        return <div>中吉！ラッキー！！</div>;
      case "小吉":
        return <div>小吉！ラッキー！！</div>;
      case "末吉":
        return <div>末吉！！</div>;
      case "凶":
        return <div>凶！気をつけて！！</div>;
      case "大凶":
        return <div>大凶！！！</div>;
    }
  };
  return (
    <>
      <div className="flex gap-10 flex-col min-h-screen">
        <div className="flex-0">
          <h1>おみくじ</h1>

          <button onClick={randomFortune}>くじを引く</button>
          <div className="text-3xl mt-5">{divineMessage()}</div>
        </div>

        <div className="flex-1 overflow-auto">
          <span>履歴</span>
          {state.fortunes.map((fortune, i) => (
            <div key={i}>
              {i}:{fortune}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
