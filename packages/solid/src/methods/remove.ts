import type {
  FieldArrayPath,
  FieldValues,
  RemoveOptions,
  ResponseData,
} from '@modular-forms/core';
import { remove as removeMethod } from '@modular-forms/core';
import { batch, untrack } from 'solid-js';
import type { FormStore } from '../types';
import { initializeFieldArrayStore, initializeFieldStore } from '../utils';

/**
 * Removes a item of the field array.
 *
 * @param form The form of the field array.
 * @param name The name of field array.
 * @param options The remove options.
 */
export function remove<
  TFieldValues extends FieldValues,
  TResponseData extends ResponseData
>(
  form: FormStore<TFieldValues, TResponseData>,
  name: FieldArrayPath<TFieldValues>,
  options: RemoveOptions
): void {
  batch(() =>
    untrack(() =>
      removeMethod(
        { batch, untrack, initializeFieldStore, initializeFieldArrayStore },
        form,
        name,
        options
      )
    )
  );
}
