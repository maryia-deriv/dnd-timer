import React from "react";
import "./App.scss";

const App = () => {
  const [minutes, setMinutes] = React.useState(30);
  const [countdown, setCountdown] = React.useState();
  const [is_timer_running, setIsTimerRunning] = React.useState(false);

  const startTimer = (_minutes) => {
    setIsTimerRunning(true);
    let _countdown = _minutes;
    const id = setInterval(() => {
      if (_countdown > 0) {
        setCountdown(--_countdown);
      } else {
        setIsTimerRunning(false);
        clearInterval(id);
      }
    }, 60000);
  };
  return (
    <div className="App">
      <header className="App-header">
        {is_timer_running ? (
          <h3 className="heading">
            ОТВЕЧУ НА ВАШИ ВОПРОСЫ ЧЕРЕЗ
            <br />
            I'LL ANSWER YOUR QUESTIONS IN
          </h3>
        ) : (
          <h1 className="heading">
            ЕСТЬ ВОПРОСЫ? ЗАДАВАЙ.
            <br />
            GOT QUESTIONS? PLEASE ASK.
          </h1>
        )}
        <div className="timer">
          {is_timer_running ? (
            <h1 className="timer-display">
              {countdown || minutes}
              {` Minutes ...`}
            </h1>
          ) : (
            <div>
              <div>Do Not Disturb Timer</div>
              <span>{`Set Minutes: `}</span>
              <input
                value={minutes}
                onChange={(e) => setMinutes(+e.currentTarget.value)}
              ></input>
              <button
                onClick={() => {
                  startTimer(minutes);
                }}
              >
                Start Timer
              </button>
            </div>
          )}
        </div>
        {is_timer_running ? (
          <h3 className="note">
            ЕСЛИ ЭТО ЧТО-ТО СРОЧНОЕ, SLACK ME.
            <br />
            IF IT'S URGENT, PLEASE SLACK ME.
          </h3>
        ) : null}
      </header>
    </div>
  );
};

export default App;
