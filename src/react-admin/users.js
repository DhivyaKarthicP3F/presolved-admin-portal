import { 
  List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    TextInput,
} from "react-admin";

export const UserList = () => (
  <List>
    <Datagrid >
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="username" />
      <TextField source="company.name" />
      <EditButton />
    </Datagrid>
  </List>
);

export const UserEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled/>
      <TextInput source="name" />
      <TextInput source="username" />
      <TextField source="company.name" />
    </SimpleForm>
  </Edit>
)

export const UserCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <TextInput source="username" />
      <TextField source="company.name" />
    </SimpleForm>
  </Create>
)
