import { Button, Dialog, DialogTrigger, Divider, Flex, Heading, Text } from '@adobe/react-spectrum';
import { useState } from 'react';
import { useCatContext } from '../contexts/CatContext';
import { ICat } from '../types';
import EditCatForm from './elements/EditCatForm';

type Props = {
  isDisabled: boolean;
  selected: any;
};

export default function EditCat({ isDisabled, selected }: Props) {
  const [cats] = useCatContext();
  const [selectedCat, setSelectedCat] = useState<ICat>({} as ICat);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const editCat = () => {
    const selectedId = selected.anchorKey;
    const index = cats.findIndex((cat: ICat) => cat.id === selectedId);
    setSelectedIndex(index);
    setSelectedCat(cats[index]);
    if (selectedIndex < 0) return;
  };

  return (
    <DialogTrigger>
      <Button
        variant="primary"
        UNSAFE_className="!px-4"
        isDisabled={isDisabled}
        type="button"
        onPress={editCat}
      >
        Edit
      </Button>
      {(close) => (
        <Dialog>
          <Heading>
            <Flex alignItems="center" gap="size-100">
              <Text UNSAFE_className="capitalize">Add your cat here</Text>
            </Flex>
          </Heading>
          <Divider />
          <EditCatForm close={close} cat={selectedCat} index={selectedIndex} />
        </Dialog>
      )}
    </DialogTrigger>
  );
}
