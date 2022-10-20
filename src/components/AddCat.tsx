import { Button, Dialog, DialogTrigger, Divider, Flex, Heading, Text } from '@adobe/react-spectrum';
import AddCatForm from './elements/AddCatForm';

export default function AddCat() {
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
          <AddCatForm close={close} />
        </Dialog>
      )}
    </DialogTrigger>
  );
}
