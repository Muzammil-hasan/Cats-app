import { Cell, Column, Flex, Row, TableBody, TableHeader, TableView } from '@adobe/react-spectrum';
import { Fragment, Key, useState } from 'react';
import { useCatContext } from '../contexts/CatContext';
import DeleteCat from './DeleteCat';
import EditCat from './EditCat';

let columns = [
  { name: 'Name', uid: 'name' },
  { name: 'Color', uid: 'color' },
  { name: 'Age', uid: 'age' },
  { name: 'Nature', uid: 'nature' },
];

export default function CatsList() {
  let [selectedKeys, setSelectedKeys] = useState<'all' | Iterable<Key> | any>([]);
  const [cats] = useCatContext();

  return (
    <Fragment>
      <TableView
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        aria-label="Awesome cats list"
        marginTop={'size-500'}
      >
        <TableHeader columns={columns}>
          {(column) => <Column key={column.uid}>{column.name}</Column>}
        </TableHeader>

        <TableBody items={cats}>
          {(item: any) => (
            <Row>
              {(columnKey: any) => (
                <Cell>
                  <span className="capitalize">{item[columnKey]}</span>
                </Cell>
              )}
            </Row>
          )}
        </TableBody>
      </TableView>

      <Flex justifyContent={'end'} marginTop={'size-200'} gap={'size-100'}>
        <EditCat
          isDisabled={selectedKeys.size ? selectedKeys.size === 0 : true}
          selected={selectedKeys}
        />
        <DeleteCat
          isDisabled={selectedKeys.size ? selectedKeys.size === 0 : true}
          selected={selectedKeys}
        />
      </Flex>
    </Fragment>
  );
}
