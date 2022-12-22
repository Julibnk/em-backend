import { faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Title } from '@mantine/core';
import styles from './styles.module.css';
import { useTranslation } from '../../../core/Shared/hooks/useTranslation';

export const AccountSectionHeader = () => {
  const t = useTranslation();
  return (
    <div className={styles.header}>
      <Title order={4}>{t('account')}</Title>
      <Button variant='filled' leftIcon={<FontAwesomeIcon icon={faSave} />}>
        {t('save')}
      </Button>
    </div>
  );
};