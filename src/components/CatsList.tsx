import {
  Button,
  Cell,
  Column,
  Flex,
  Row,
  TableBody,
  TableHeader,
  TableView,
} from '@adobe/react-spectrum';
import { Fragment, Key, useState } from 'react';
import { ICat } from '../types';

let columns = [
  { name: 'Name', uid: 'name' },
  { name: 'Color', uid: 'color' },
  { name: 'Age', uid: 'age' },
  { name: 'Nature', uid: 'nature' },
];

export default function CatsList({ list }: { list: ICat[] | [] }) {
  let [selectedKeys, setSelectedKeys] = useState<'all' | Iterable<Key> | any>([]);

  return (
    <Fragment>
      <TableView
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        aria-label="Awesome cats list"
        marginTop={'size-500'}
        height="size-5000"
      >
        <TableHeader columns={columns}>
          {(column) => <Column key={column.uid}>{column.name}</Column>}
        </TableHeader>

        <TableBody items={list}>
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
        <Button variant="primary" UNSAFE_className="!px-4" isDisabled={selectedKeys?.size <= 0}>
          Edit
        </Button>
        <Button variant="negative" UNSAFE_className="!px-4" isDisabled={selectedKeys?.size <= 0}>
          Delete
        </Button>
      </Flex>
    </Fragment>
  );
}
