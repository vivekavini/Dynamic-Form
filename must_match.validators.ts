import { FormGroup } from "@angular/forms";


export function MustMatch(controlName:string,matchingControlName:string)
{
    return(formGroup:FormGroup)=>
    {
        const control=formGroup.controls.[matchingControlName]
    }
}