import { CamperFeatureList } from '../CamperFeatureList/CamperFeatureList';
import { CamperModalForm } from '../CamperModalForm/CamperModalForm';
import { CamperModalReview } from '../CamperModalReview/CamperModalReview';
import { useDispatch, useSelector } from 'react-redux';
import { selectActiveTab } from '../../redux/selectors';
import { updateActiveTab } from '../../redux/slice';
import css from './CamperModalBody.module.css';

export const CamperModalBody = ({ camper }) => {
  const dispatch = useDispatch();
  const activeTab = useSelector(selectActiveTab);

  const changeActiveTab = tab => {
    dispatch(updateActiveTab(tab));
  };

  const vihicleDetails = {
    form: 'Form',
    length: 'Length',
    width: 'Width',
    height: 'Height',
    tank: 'Tank',
    consumption: 'Consumption',
  };

  return (
    <>
      {camper && (
        <div className={css.container}>
          <div className={css.box}>
            <div
              className={css.tabHeader}
              onClick={() => changeActiveTab('Features')}
            >
              {'Features'}
              <span
                className={activeTab === 'Features' ? css.active : ''}
              ></span>
            </div>
            <div
              className={css.tabHeader}
              onClick={() => changeActiveTab('Reviews')}
            >
              {'Reviews'}
              <span
                className={activeTab === 'Reviews' ? css.active : ''}
              ></span>
            </div>
          </div>
          <div className={css.tabBody}>
            <div className={css.tab}>
              {activeTab === 'Features' && (
                <>
                  <CamperFeatureList features={camper.details} />
                  <div className={css.wraper}>
                    <h3 className={css.header}>Vehicle details</h3>
                    <ul className={css.list}>
                      {Object.keys(vihicleDetails).map(detailsKey => {
                        return (
                          <li key={detailsKey} className={css.item}>
                            <span>{vihicleDetails[detailsKey]}</span>
                            <span>{camper[detailsKey]}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </>
              )}
              {activeTab === 'Reviews' && (
                <CamperModalReview reviews={camper.reviews} />
              )}
            </div>
            <CamperModalForm />
          </div>
        </div>
      )}
    </>
  );
};
