import { CategoryModal } from '../../../ConfigurationScreen/CategoryConfiguration/CategoryModal/index';
import { TemplateModal } from '../../../ConfigurationScreen/TemplateConfiguration/TemplateModal/index';
import { MessageLoadModal } from './MessageLoadModal/index';
import { MessageModal } from './MessageModal/index';
export const Modals = () => {
  return (
    <>
      <CategoryModal />
      <TemplateModal />
      <MessageLoadModal />
      <MessageModal />
    </>
  );
};
