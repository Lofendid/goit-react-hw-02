import css from './Options.module.css';

export default function Options({
  totalFeedback,
  updateFeedback,
  handleReset,
}) {
  return (
    <>
      <ul className={css.list}>
        <li>
          <button
            className={css.optionBtn}
            name="good"
            onClick={() => updateFeedback('good')}
            type="button"
          >
            Good
          </button>
        </li>
        <li>
          <button
            className={css.optionBtn}
            name="neutral"
            onClick={() => updateFeedback('neutral')}
            type="button"
          >
            Neutral
          </button>
        </li>
        <li>
          <button
            className={css.optionBtn}
            name="bad"
            onClick={() => updateFeedback('bad')}
            type="button"
          >
            Bad
          </button>
        </li>
      </ul>
      {totalFeedback >= 1 && (
        <button className={css.resetBtn} onClick={handleReset} type="button">
          Reset
        </button>
      )}
    </>
  );
}
