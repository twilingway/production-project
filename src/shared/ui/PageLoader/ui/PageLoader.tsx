import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import s from './PageLoader.module.scss';

interface IPageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: IPageLoaderProps) => (
  <div className={classNames(s.pageLoader, {}, [className])}>
    <Loader />
  </div>
);
