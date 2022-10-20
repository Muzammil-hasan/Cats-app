import { Button, Dialog, DialogTrigger, Divider, Flex, Heading, Text } from '@adobe/react-spectrum';
import { Dispatch, SetStateAction } from 'react';
import { ICat } from '../types';
import AddCatForm from './elements/AddCatForm';

export default function AddCat({
  setter,
  list,
}: {
  setter: Dispatch<SetStateAction<ICat[] | undefined>>;
  list: ICat[];
}) {
  return (
    <DialogTrigger>
      <Button variant="primary">Add New</Button>
      {(close) => (
        <Dialog>
          <Heading>
            <Flex alignItems="center" gap="size-100">
              <Text UNSAFE_className="capitalize">Add your cat here</Text>
            </Flex>
          </Heading>
          <Divider />
          <AddCatForm close={close} setter={setter} list={list} />
        </Dialog>
      )}
    </DialogTrigger>
  );
}
