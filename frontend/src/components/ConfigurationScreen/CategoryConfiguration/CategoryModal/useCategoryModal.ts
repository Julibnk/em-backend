import { useCallback, useReducer } from 'react';
import { CategoryOnlyIds } from '../../../../core/Category/Category';
import { Uuid } from '../../../../core/Shared/Uuid';
import { showNotification } from '../../../../core/Shared/Notification';
import {
  CategoryModalActionTypes,
  categoryModalReducer,
  initialState,
} from './categoryModalReducer';
import { useConfigurationScreenContext } from '../../ConfigurationScreenContext';

export function useCategoryModal(onSubmitSuccess: () => void) {
  const { templateRepository, categoryRepository } =
    useConfigurationScreenContext();

  const [categoryModalState, dispatch] = useReducer(
    categoryModalReducer,
    initialState
  );

  const add = useCallback(async () => {
    const allTemplates = await templateRepository.searchAll();

    const payload = {
      category: {
        id: Uuid.create(),
        name: '',
        description: '',
        templates: [],
      },
      allTemplates,
    };

    dispatch({
      type: CategoryModalActionTypes.CREATE,
      payload,
    });
  }, []);

  const close = useCallback(() => {
    dispatch({ type: CategoryModalActionTypes.CLOSE });
  }, []);

  const edit = useCallback((categoryId: string) => {
    Promise.all([
      categoryRepository.searchById(categoryId),
      templateRepository.searchAll(),
    ]).then(([category, allTemplates]) => {
      if (category)
        dispatch({
          type: CategoryModalActionTypes.EDIT,
          payload: { category, allTemplates },
        });
    });
  }, []);

  const submit = useCallback(async (category: CategoryOnlyIds) => {
    try {
      dispatch({ type: CategoryModalActionTypes.LOADING, payload: true });
      await categoryRepository.save(category);
      dispatch({ type: CategoryModalActionTypes.CLOSE });
      onSubmitSuccess();
    } catch (error) {
      showNotification({ title: 'Error', message: 'error' });
      dispatch({ type: CategoryModalActionTypes.LOADING, payload: false });
    }
  }, []);

  return {
    categoryModalState,
    add,
    close,
    submit,
    edit,
  };
}
