import { useDispatch, useSelector } from 'react-redux';
import { updateBooked } from '../../redux/slice';
import { selectBooked } from '../../redux/selectors';
import css from './CamperModalForm.module.css';

export const CamperModalForm = ({ camper }) => {
  const dispatch = useDispatch();
  const booked = useSelector(selectBooked);

  const onDateFocus = evt => {
    evt.target.type = 'date';
  };

  const onDateBlur = evt => {
    evt.target.type = 'text';
  };

  const onSubmitBookingForm = evt => {
    evt.preventDefault();
    const form = evt.target;
    if (form.date.value >= new Date().toISOString().split('T')[0]) {
      dispatch(updateBooked([...booked, camper._id]));
      form.reset();
    }
  };

  return (
    <form className={css.container} onSubmit={onSubmitBookingForm}>
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
      {booked.includes(camper._id) ? (
        'You have already booked this camper.'
      ) : (
        <button className={css.button} type="submit">
          Send
        </button>
      )}
    </form>
  );
};
