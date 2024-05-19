import { SvgIcon } from '../SvgIcon/SvgIcon';
import { CatalogItemHeader } from '../CatalogItemHeader/CatalogItemHeader';
import { CamperModalBody } from '../CamperModalBody/CamperModalBody';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentCamper } from '../../redux/selectors';
import { updateActiveTab, updateCurrentCamper } from '../../redux/slice';
import { useCallback, useRef, useEffect } from 'react';

export const CamperModal = () => {
  const dispatch = useDispatch();

  const camper = useSelector(selectCurrentCamper);
  const backdropRef = useRef(null);

  const onClickClose = useCallback(() => {
    dispatch(updateActiveTab('Features'));
    dispatch(updateCurrentCamper(null));
  }, [dispatch]);

  useEffect(() => {
    const backdrop = backdropRef.current;
    const onClick = evt => {
      const target = evt.target;
      if (target === backdrop) {
        onClickClose();
      }
    };
    const onEscapePress = evt => {
      if (evt.code === 'Escape') {
        onClickClose();
      }
    };
    backdrop.addEventListener('click', onClick);
    document.addEventListener('keydown', onEscapePress);
    return () => {
      backdrop.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onEscapePress);
    };
  }, [onClickClose]);

  return (
    <div ref={backdropRef}>
      <div>
        <div onClick={onClickClose}>
          <SvgIcon icon={'close'} />
        </div>
        <div>
          {camper && (
            <div>
              <div>
                <CatalogItemHeader camper={camper} modal={true} />
              </div>
              <ul>
                {camper.gallery.map(src => {
                  return (
                    <li key={src}>
                      <img src={src} alt={camper.name} />
                    </li>
                  );
                })}
              </ul>
              <p>{camper.description}</p>
            </div>
          )}
          <CamperModalBody camper={camper} />
        </div>
      </div>
    </div>
  );
};
