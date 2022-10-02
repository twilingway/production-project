import { classNames } from 'shared/lib/classNames/classNames';
import s from './Loader.module.scss';

interface ILoaderProps {
  className?: string;
}

export const Loader = ({ className }: ILoaderProps) => (
  <div className={classNames(s.ldsRing, {}, [className])}>
    <div />
    <div />
    <div />
    <div />
  </div>
);
