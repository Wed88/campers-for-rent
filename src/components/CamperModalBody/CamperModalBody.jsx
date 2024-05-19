import { CamperFeatureList } from '../CamperFeatureList/CamperFeatureList';
import { CamperModalForm } from '../CamperModalForm/CamperModalForm';
import { CamperModalReview } from '../CamperModalReview/CamperModalReview';
import { useDispatch, useSelector } from 'react-redux';
import { selectActiveTab } from '../../redux/selectors';
import { updateActiveTab } from '../../redux/slice';

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
        <div>
          <div>
            <div onClick={() => changeActiveTab('Features')}>{'Features'}</div>
            <div onClick={() => changeActiveTab('Reviews')}>{'Reviews'}</div>
          </div>
          <div>
            <div>
              {activeTab === 'Features' && (
                <>
                  <CamperFeatureList features={camper.details} />
                  <div>
                    <h3>Vehicle details</h3>
                    <ul>
                      {Object.keys(vihicleDetails).map(detailsKey => {
                        return (
                          <li key={detailsKey}>
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
