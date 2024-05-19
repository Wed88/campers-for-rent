import css from './CamperModalForm.module.css';

export const CamperModalForm = () => {
  const onDateFocus = evt => {
    evt.target.type = 'date';
  };

  const onDateBlur = evt => {
    evt.target.type = 'text';
  };

  return (
    <form className={css.container}>
      <div className={css.header}>
        <h2>Book your campervan now</h2>
        <p>Stay connected! We are always ready to help you.</p>
      </div>
      <div className={css.fields}>
        <input
          className={css.input}
          name="name"
          type="text"
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-ЯіІїЇєЄґҐ]+(([' \-][a-zA-Zа-яА-ЯіІїЇєЄґҐ ])?[a-zA-Zа-яА-ЯіІїЇєЄґҐ]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <input
          className={css.input}
          name="email"
          type="email"
          placeholder="Email"
          required
        />
        <input
          className={css.date}
          name="date"
          type="text"
          placeholder="Booking date"
          onFocus={evt => onDateFocus(evt)}
          onBlur={evt => onDateBlur(evt)}
          min={new Date().toISOString().split('T')[0]}
          required
        />
        <textarea
          className={css.textarea}
          name="comment"
          type="text"
          rows={3}
          placeholder="Comment"
        />
      </div>
      <button className={css.button} type="submit">
        Send
      </button>
    </form>
  );
};
