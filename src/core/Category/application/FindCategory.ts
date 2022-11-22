import { inject, injectable } from 'inversify';
import { AccountId } from '../../Account/domain/value-object/AccountId';
import { DIDomain } from '../../Shared/dependency-injection';
import { Category } from '../domain/Category';
import { CategoryRepository } from '../domain/CategoryRepository';
import { CategoryNotFoundError } from '../domain/exceptions/CategoryNotFoundError';
import { CategoryId } from '../domain/value-object/CategoryId';
import { TemplateNotFoundError } from '../../Template/domain/exceptions/TemplateNotFoundError';

@injectable()
export class FindCategoryUseCase {
  constructor(
    @inject(DIDomain.category) private readonly repository: CategoryRepository
  ) {}

  async run(accountId: string, id: string): Promise<Category> {
    const category = await this.repository.findById(
      new AccountId(accountId),
      new CategoryId(id)
    );

    if (!category) {
      throw new CategoryNotFoundError(new CategoryId(id));
    }

    return category;
  }
}
