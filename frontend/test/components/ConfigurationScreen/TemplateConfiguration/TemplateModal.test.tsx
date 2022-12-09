import { render, screen, userEvent } from '../../../test-utils';
import { MockTemplateRepository } from '../../../core/Template/__mocks__/MockTemplateRepository';
import { MockCategoryRepository } from '../../../core/Category/__mocks__/MockCategoryRepository';
import { ConfigurationScreenProvider } from '../../../../src/components/ConfigurationScreen/ConfigurationScreenContext';
import { TemplateConfiguration } from '../../../../src/components/ConfigurationScreen/TemplateConfiguration/TemplateConfiguration';

import { Uuid } from '../../../../src/core/Shared/Uuid';
import { TemplateMother } from '../../../core/Template/TemplateMother';

vi.mock('../../../../src/core/Shared/Uuid');

let templateRepository: MockTemplateRepository;
let categoryRepository: MockCategoryRepository;

describe('TemplateModal', () => {
  beforeEach(() => {
    templateRepository = new MockTemplateRepository();
    categoryRepository = new MockCategoryRepository();
  });

  describe('Create template', () => {
    it('Should call save method on repository', async () => {
      const template = TemplateMother.create();
      Uuid.create = vi.fn().mockReturnValue(template.id);

      render(
        <ConfigurationScreenProvider
          categoryRepository={categoryRepository}
          templateRepository={templateRepository}
        >
          <TemplateConfiguration />
        </ConfigurationScreenProvider>
      );

      const addButton = await screen.findByRole('button', { name: /añadir/i });
      await userEvent.click(addButton);

      const nameInput = await screen.findByLabelText(/nombre/i);
      const descriptionInput = await screen.findByLabelText(/descripción/i);
      const previewInput = await screen.findByLabelText(/vista previa/i);
      const variable1Input = await screen.findByLabelText(/variable 1/i);
      const variable2Input = await screen.findByLabelText(/variable 2/i);
      const variable3Input = await screen.findByLabelText(/variable 3/i);

      await userEvent.type(nameInput, template.name);
      await userEvent.type(descriptionInput, template.description);
      await userEvent.type(previewInput, template.preview);
      await userEvent.type(variable1Input, template.variable1);
      await userEvent.type(variable2Input, template.variable2);
      await userEvent.type(variable3Input, template.variable3);

      const submitButton = await screen.findByRole('submit');
      await userEvent.click(submitButton);

      expect(templateRepository.mockSave).toHaveBeenCalledWith(template);
    });
  });
});