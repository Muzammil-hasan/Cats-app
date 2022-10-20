import { Button, ButtonGroup, Content, Item, Picker, TextField } from '@adobe/react-spectrum';
import { Fragment } from 'react';
import { useZorm } from 'react-zorm';
import { useCatContext } from '../../contexts/CatContext';
import AddCatSchema from '../../schema/AddCatSchema';
import { ICat } from '../../types';

type Props = {
  cat: ICat;
  index: number;
  close: () => void;
};

export default function EditCatForm({ close, cat, index }: Props) {
  const [cats, setCats] = useCatContext();

  const zo = useZorm('addCat', AddCatSchema, {
    onValidSubmit(e) {
      e.preventDefault();
      cats[index] = { id: cat.id, ...e.data };
      setCats(cats);
      close();
    },
  });

  return (
    <Fragment>
      <Content>
        <form ref={zo.ref} className="w-full">
          <TextField
            isRequired
            defaultValue={cat.name}
            name={zo.fields.name()}
            necessityIndicator="icon"
            UNSAFE_style={{ width: '100%' }}
            label="What is your cat's name?"
            errorMessage={zo.errors.name()?.message}
            validationState={zo.errors.name()?.message ? 'invalid' : 'valid'}
          />
          <TextField
            isRequired
            type="number"
            defaultValue={cat.age}
            name={zo.fields.age()}
            necessityIndicator="icon"
            UNSAFE_style={{ width: '100%' }}
            label="How old is your cat?"
            errorMessage={zo.errors.age()?.message}
            validationState={zo.errors.age()?.message ? 'invalid' : 'valid'}
          />
          <TextField
            isRequired
            defaultValue={cat.color}
            name={zo.fields.color()}
            necessityIndicator="icon"
            UNSAFE_style={{ width: '100%' }}
            label="Color of your cat?"
            errorMessage={zo.errors.color()?.message}
            validationState={zo.errors.color()?.message ? 'invalid' : 'valid'}
          />
          <Picker
            isRequired
            name={zo.fields.nature()}
            necessityIndicator="icon"
            UNSAFE_style={{ width: '100%' }}
            defaultSelectedKey={cat.nature}
            label="How is your cat's nature?"
            errorMessage={zo.errors.nature()?.message}
            validationState={zo.errors.nature()?.message ? 'invalid' : 'valid'}
          >
            <Item key="calm">Calm</Item>
            <Item key="aggressive">Aggressive</Item>
            <Item key="depends">Depends on her/his mood</Item>
          </Picker>
          <ButtonGroup UNSAFE_className="justify-end flex" marginTop={'size-250'}>
            <Button variant="secondary" onPress={close}>
              Cancel
            </Button>
            <Button variant="cta" type="submit" UNSAFE_className="text-blue-700">
              Update
            </Button>
          </ButtonGroup>
        </form>
      </Content>
    </Fragment>
  );
}
