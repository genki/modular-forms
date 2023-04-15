import type {
  FieldPath,
  FieldValues,
  FormStore,
  ResponseData,
} from '@modular-forms/core';
import { getFieldStore } from '@modular-forms/core';
import type { FieldStore } from '../types';
import { getInitialFieldStore } from './getInitialFieldStore';

/**
 * Initializes and returns the store of a field.
 *
 * @param form The form of the field.
 * @param name The name of the field.
 * @param initialState The initial state.
 *
 * @returns The reactive store.
 */
export function initializeFieldStore<
  TFieldValues extends FieldValues,
  TResponseData extends ResponseData,
  TFieldName extends FieldPath<TFieldValues>
>(
  form: FormStore<TFieldValues, TResponseData>,
  name: TFieldName
): FieldStore<TFieldValues, TFieldName> {
  if (!getFieldStore(form, name)) {
    form.internal.fields[name] = getInitialFieldStore(name);
  }
  return getFieldStore(form, name) as FieldStore<TFieldValues, TFieldName>;
}
