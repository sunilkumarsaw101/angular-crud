import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function uniqueNameValidator(existingNames: string[]): ValidatorFn {
    console.log('lllll');
    let res= (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        console.log('nulll');
        return null; // Return null if the control value is empty
      }
      const nameToCheck = control.value.trim().toLowerCase();
      console.log('Checking name:', nameToCheck); // Add this line
      console.log('Existing names:', existingNames); // Add this line
  
      const isNameTaken = existingNames.includes(nameToCheck);
      return isNameTaken ? { uniqueName: { value: control.value } } : null;
    };
    console.log('res ', res);
    return res;
  }
  