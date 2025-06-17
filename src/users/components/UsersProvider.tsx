import { FormProvider, useForm } from "react-hook-form";
import Users from "./Users";
import { zodResolver } from "@hookform/resolvers/zod";
import { DevTool } from "@hookform/devtools";

import {
  defaultValues,
  userSchema,
  type UserSchemaType,
} from "../../types/schema";

function UsersProvider() {
  const formMethods = useForm<UserSchemaType>({
    mode: "all",
    resolver: zodResolver(userSchema),
    defaultValues: defaultValues,
  });
  return (
    <FormProvider {...formMethods}>
      <Users />
      <DevTool control={formMethods.control} />
    </FormProvider>
  );
}

export default UsersProvider;
