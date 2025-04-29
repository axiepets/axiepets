import { useState } from 'react';
import './App.css';

function App() {
  const [subscribed, setSubscribed] = useState(''); // "yes" or "no"
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isCodeCorrect, setIsCodeCorrect] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

   if (code.trim() === '495653' || code.trim() === '556655') {
  setIsCodeCorrect(true);
} else {
  setIsCodeCorrect(false);
}


  return (
    <>
      <form onSubmit={handleSubmit} className="modern-form">
        <h2 className="form-title">Subscription Form</h2>

        <div className="form-group">
          <p className="input-label">Did you subscribe?</p>
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                name="subscribe"
                value="yes"
                checked={subscribed === 'yes'}
                onChange={(e) => setSubscribed(e.target.value)}
                className="radio-input"
              />
              <span className="radio-custom"></span>
              Yes
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="subscribe"
                value="no"
                checked={subscribed === 'no'}
                onChange={(e) => setSubscribed(e.target.value)}
                className="radio-input"
              />
              <span className="radio-custom"></span>
              No
            </label>
          </div>
        </div>

        <div className="form-group">
          <label className="input-label">
            What's your Youtube Name?
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-input"
              placeholder="Enter your name"
            />
          </label>
        </div>

        <div className="form-group">
          <label className="input-label">
            What's the code?
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="text-input"
              placeholder="Enter verification code"
            />
          </label>
        </div>

        <button type="submit" className="submit-button">
          Verify
        </button>
      </form>

      {submitted && (
        <div className={`result-message ${isCodeCorrect ? 'success' : 'error'}`}>
          <p>Make sure your youtube name is correct; I'll verify it first before accepting you.</p>
          <p>If I don't see your channel in my dashboard, I can't accept you in.</p>
          <p className="code-status">
            {isCodeCorrect ? '✅ Correct code' : '❌ Incorrect code'}
          </p>

          {isCodeCorrect && (
            <p className="telegram-link">
              👉 <a
                href="https://t.me/precious_hannah_channel"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here to open Telegram Channel
              </a>
            </p>
          )}
        </div>
      )}
    </>
  );
}

export default App;
