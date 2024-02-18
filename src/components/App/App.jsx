import css from './App.module.css';
import { useEffect, useState } from 'react';

import Description from '../Description/Description.jsx';
import Options from '../Options/Options.jsx';
import Feedback from '../Feedback/Feedback.jsx';
import Notification from '../Notification/Notification.jsx';

export default function App() {
  const LS_FEEDBACK = 'feedback';

  function feedbackInnit() {
    const feedbackCounts = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
    const savedFeedbackCounts = JSON.parse(localStorage.getItem(LS_FEEDBACK));

    return savedFeedbackCounts || feedbackCounts;
  }

  const [feedbackCounts, setFeedbackCounts] = useState(feedbackInnit);

  const totalFeedback =
    feedbackCounts.good + feedbackCounts.bad + feedbackCounts.neutral;

  function recordToLocal() {
    localStorage.setItem(LS_FEEDBACK, JSON.stringify(feedbackCounts));
  }

  useEffect(recordToLocal, [feedbackCounts]);

  const initState = Object.fromEntries(
    Object.keys(feedbackCounts).map(key => [key, 0])
  );

  function updateFeedback(feedbackType) {
    const option = feedbackType;
    setFeedbackCounts(prevRate => ({
      ...prevRate,
      [option]: prevRate[option] + 1,
    }));
  }
  function handleReset() {
    setFeedbackCounts(initState);
  }

  return (
    <div className={css.container}>
      <Description />
      <Options
        feedbackCounts={feedbackCounts}
        totalFeedback={totalFeedback}
        updateFeedback={updateFeedback}
        handleReset={handleReset}
      />
      {totalFeedback < 1 ? (
        <Notification />
      ) : (
        <Feedback
          feedbackCounts={feedbackCounts}
          totalFeedback={totalFeedback}
        />
      )}
    </div>
  );
}
