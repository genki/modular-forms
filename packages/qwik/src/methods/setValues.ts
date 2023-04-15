import type {
  FieldArrayPath,
  FieldArrayPathValue,
  FieldValues,
  PartialValues,
  ResponseData,
  ValuesOptions,
} from '@modular-forms/core';
import { setValues as setValuesMethod } from '@modular-forms/core';
import type { FormStore } from '../types';
import { initializeFieldArrayStore, initializeFieldStore } from '../utils';

/**
 * Sets multiple values of the form or a field array at once.
 *
 * @param form The form store.
 * @param values The values to be set.
 * @param options The values options.
 */
export function setValues<
  TFieldValues extends FieldValues,
  TResponseData extends ResponseData
>(
  form: FormStore<TFieldValues, TResponseData>,
  values: PartialValues<TFieldValues>,
  options?: ValuesOptions
): void;

/**
 * Sets multiple values of the form or a field array at once.
 *
 * @param form The form of the field array.
 * @param name The name of the field array.
 * @param values The values to be set.
 * @param options The values options.
 */
export function setValues<
  TFieldValues extends FieldValues,
  TResponseData extends ResponseData,
  TFieldArrayName extends FieldArrayPath<TFieldValues>
>(
  form: FormStore<TFieldValues, TResponseData>,
  name: TFieldArrayName,
  values: FieldArrayPathValue<TFieldValues, TFieldArrayName>,
  options?: ValuesOptions
): void;

export function setValues<
  TFieldValues extends FieldValues,
  TResponseData extends ResponseData,
  TFieldArrayName extends FieldArrayPath<TFieldValues>
>(
  form: FormStore<TFieldValues, TResponseData>,
  arg2: PartialValues<TFieldValues> | TFieldArrayName,
  arg3?: ValuesOptions | FieldArrayPathValue<TFieldValues, TFieldArrayName>,
  arg4?: ValuesOptions
): void {
  setValuesMethod(
    { initializeFieldStore, initializeFieldArrayStore },
    form,
    arg2,
    arg3,
    arg4
  );
}
