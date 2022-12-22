import { Td } from '../../Shared/Table';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ActionIcon } from '@mantine/core';
import { ActionCell } from '../../Shared/TableCells';
import { TemplateMessage as Message } from '../../../core/TemplateMessage/TemplateMessage';
import { EntityId } from '@reduxjs/toolkit';

type Props = {
  message: Message;
};

export const MessageTableRow = ({ message }: Props) => {
  const { id } = message;

  // const dispatch = useDispatch();

  const handleOnEdit = (id: EntityId) => {
    //
  };
  const handleOnDelete = (id: EntityId) => {
    //
  };

  return (
    <tr key={id}>
      <Td>
        {/* <CellWithSubtitle title={name} subtitle={description || ''} /> */}
      </Td>
      {/* <Td>{description}</Td> */}
      {/* <Td>{preview}</Td> */}

      <Td>
        {/* <BadgeCell>
          {variable1 && <Badge color='violet'>{variable1}</Badge>}
          {variable2 && <Badge color='cyan'>{variable2}</Badge>}
          {variable3 && <Badge color='yellow'>{variable3}</Badge>}
        </BadgeCell> */}
      </Td>
      <Td>
        {/* <BadgeCell>
          {categoryIds.map((id) => {
            return <CategoryBadge key={id} id={id}></CategoryBadge>;
          })}
        </BadgeCell> */}
      </Td>
      <Td>
        <ActionCell>
          <ActionIcon onClick={() => handleOnEdit(id)}>
            <FontAwesomeIcon size='lg' icon={faPen}></FontAwesomeIcon>
          </ActionIcon>
          <ActionIcon onClick={() => handleOnDelete(id)}>
            <FontAwesomeIcon size='lg' icon={faTrashAlt}></FontAwesomeIcon>
          </ActionIcon>
        </ActionCell>
      </Td>
    </tr>
  );
};