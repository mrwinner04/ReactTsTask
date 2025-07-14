import React from "react";
import { Button, Input, Text } from "../../atoms";
import { FormWrapper, FormField, ErrorText } from "./Form.styles";

interface FormFieldProps {
  label: string;
  name: string;
  type?: "text" | "email" | "password" | "number";
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
}

interface FormProps {
  title: string;
  fields: FormFieldProps[];
  submitLabel: string;
  onSubmit: (e: React.FormEvent) => void;
  isLoading?: boolean;
}

const Form: React.FC<FormProps> = ({
  title,
  fields,
  submitLabel,
  onSubmit,
  isLoading = false,
}) => {
  return (
    <FormWrapper onSubmit={onSubmit}>
      <Text variant="h2" weight="semibold" size="xl">
        {title}
      </Text>

      {fields.map((field) => (
        <FormField key={field.name}>
          <Text variant="caption" weight="medium" size="sm">
            {field.label}
          </Text>
          <Input
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            value={field.value}
            onChange={field.onChange}
            required={field.required}
          />
          {field.error && (
            <ErrorText variant="caption" size="xs">
              {field.error}
            </ErrorText>
          )}
        </FormField>
      ))}

      <Button type="submit" variant="primary" size="lg" disabled={isLoading}>
        {isLoading ? "Loading..." : submitLabel}
      </Button>
    </FormWrapper>
  );
};

export default Form;
