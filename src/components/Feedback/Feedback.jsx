import css from './Feedback.module.css';

export default function Feedback({
  feedbackCounts: { good, bad, neutral },
  totalFeedback,
}) {
  function calcPercentage() {
    const positivePercentage = Math.round(
      ((good + neutral) / totalFeedback) * 100
    );

    return positivePercentage;
  }

  return (
    <>
      <ul className={css.list}>
        <li>
          <p>Good: {good}</p>
        </li>
        <li>
          <p>Neutral: {neutral}</p>
        </li>
        <li>
          <p>Bad: {bad}</p>
        </li>
      </ul>
      <p className={css.summary}>Total: {totalFeedback}</p>
      <p className={css.summary}>
        Positive: <span className={css.accent}>{calcPercentage() || 0}%</span>
      </p>
    </>
  );
}
