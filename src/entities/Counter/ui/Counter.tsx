/* eslint-disable i18next/no-literal-string */
import { IStateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterAction } from '../model/slice/counterSLice';

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const incr = () => {
    dispatch(counterAction.increment());
  };
  const dec = () => {
    dispatch(counterAction.decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button onClick={incr} data-testid="increment-btn">
        incr
      </Button>
      <Button onClick={dec} data-testid="decrement-btn">
        dec
      </Button>
    </div>
  );
};
