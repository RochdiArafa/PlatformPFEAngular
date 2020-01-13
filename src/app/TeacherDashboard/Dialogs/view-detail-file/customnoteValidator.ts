import {AbstractControl} from '@angular/forms';

export function NoteValidator(control: AbstractControl) {
// [0-9]?[0-9]?(\.[0-9][0-9]?)?

  const regex = new RegExp('^[0-9]{1,2}.?\\d{1,2}$');
  if (!regex.test(control.value) || Number(control.value) > 20 || Number(control.value) < 0) {
    return {
      isError: true,
    };
  }

  return null ;
}
