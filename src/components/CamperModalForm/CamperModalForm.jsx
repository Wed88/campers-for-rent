export const CamperModalForm = () => {
  const onDateFocus = evt => {
    evt.target.type = 'date';
  };

  const onDateBlur = evt => {
    evt.target.type = 'text';
  };

  return (
    <form>
      <div>
        <h2>Book your campervan now</h2>
        <p>Stay connected! We are always ready to help you.</p>
      </div>
      <div>
        <input
          name="name"
          type="text"
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-ЯіІїЇєЄґҐ]+(([' \-][a-zA-Zа-яА-ЯіІїЇєЄґҐ ])?[a-zA-Zа-яА-ЯіІїЇєЄґҐ]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <input name="email" type="email" placeholder="Email" required />
        <input
          name="date"
          type="text"
          placeholder="Booking date"
          onFocus={evt => onDateFocus(evt)}
          onBlur={evt => onDateBlur(evt)}
          min={new Date().toISOString().split('T')[0]}
          required
        />
        <textarea name="comment" type="text" rows={3} placeholder="Comment" />
      </div>
      <button type="submit">Send</button>
    </form>
  );
};
