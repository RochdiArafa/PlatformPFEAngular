import {AbstractControl} from '@angular/forms';

export function NoteValidator(control: AbstractControl) {
// [0-9]?[0-9]?(\.[0-9][0-9]?)?

  const regex = new RegExp('^\\d{0,2}\\.?\\d{1,2}$');
  if (!regex.test(control.value)) {
    return {
      isError: true,
    };
  }

  return null ;
}
