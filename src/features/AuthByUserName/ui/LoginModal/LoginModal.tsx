import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui';
import { LoginForm } from '../LoginForm/LoginForm';

import s from './LoginModal.module.scss';

interface ILoginModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const LoginModal = (props: ILoginModalProps) => {
  const { className, isOpen, onClose } = props;
  return (
    <Modal className={classNames(s.loginModal, {}, [className])} isOpen={isOpen} onClose={onClose} lazy>
      <LoginForm />
    </Modal>
  );
};
