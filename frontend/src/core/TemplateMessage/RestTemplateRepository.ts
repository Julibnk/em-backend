import { RestClient, isResponseWithMessage } from '../RestClient/RestClient';
import { Nullable } from '../Shared/Nullable';
import { TemplateMessageRepository } from './TemplateMessageRepository';
import { TemplateMessage } from './TemplateMessage';

export class RestTemplateMessageRepository
  implements TemplateMessageRepository
{
  constructor(private client: RestClient) {}

  async searchById(id: string): Promise<Nullable<TemplateMessage>> {
    const response = await this.client.get(`templateMessage/${id}`);
    const template: Nullable<TemplateMessage> = await response.json();
    return template;
  }

  async save(templateMessage: TemplateMessage): Promise<void> {
    const response = await this.client.put<TemplateMessage>(
      `templateMessage/${templateMessage.id}`,
      templateMessage
    );

    if (!response.ok) {
      const body: unknown = await response.json();

      if (isResponseWithMessage(body)) {
        throw new Error(body.message);
      }

      throw new Error('El mensaje no se ha podido guardar');
    }
  }
}