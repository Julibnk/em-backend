import { Request, Response, NextFunction } from 'express';
import { ITemplateUseCases } from '../use-cases/template.usecases';

import { mapTemplateEntityToDto } from './template.mapper';

const factoryTemplateController = (templateUseCases: ITemplateUseCases) => {
  const getAll = async (_: Request, res: Response) => {
    const templateEntities = await templateUseCases.getAllTemplates();

    // Mapea las entities a Dtos
    const templateDtos = templateEntities.map((templateEntity) =>
      mapTemplateEntityToDto(templateEntity)
    );

    res.send(templateDtos);
  };

  return { getAll };
};

export default factoryTemplateController;

// export const create = async (req: Request, res: Response) => {
//   logger.debug('create');
//   logger.debug(req.body);
//   if (!req.body) return res.status(400).end();
//   if (!req.body.name) return res.status(400).end();
//   const { name } = req.body;
//   try {
//     const created = await createCategory({
//       accountId: '899b41de-0012-4d6e-a594-24992fdd5936',
//       name,
//     });
//     if (!created) return res.status(500).end();
//     res.status(200).json(created).end();
//   } catch (e) {
//     logger.error(e);
//     const message = e instanceof Error ? e.message : 'Uknown';
//     res.status(500).json({ message }).end();
//   }
// return;<
// };

// export const read = async (_: Request, res: Response) => {
//   logger.debug('read');
//   res.status(200).json({ yeeeee: 'yeee?' });
// };

// export const update = async (_: Request, res: Response) => {
//   logger.debug('update');
//   res.status(200).json({ yeeeee: 'yeee?' });
// };

// export const remove = async (_: Request, res: Response) => {
//   logger.debug('remove');
//   res.status(200).json({ yeeeee: 'yeee?' });
// };

// export const search = (_: Request, res: Response) => {
//   logger.debug('search');
//   res.status(200).json({ yeeeee: 'yeee?' });
// };
