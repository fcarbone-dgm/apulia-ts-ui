import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {

  @Input() aggregateByOptions: {name: string, value: string}[] = [];

  @Input() aggregateBy: string[] = [];

  @Output() aggregateByChange: EventEmitter<string[]> = new EventEmitter<string[]>();

  changeValue() {
    this.aggregateByChange.emit(this.aggregateBy);
  }

  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
     selectedBy:  new FormArray([])
    });
  }

  onSelectedChange(event: any) {
    let selected = (this.form.controls['selectedBy'] as FormArray);
    if (event.target.checked) {
      selected.push(new FormControl(event.target.value));
    } else {
      const index = selected.controls
      .findIndex(x => x.value === event.target.value);
      selected.removeAt(index);
    }
    this.aggregateBy = this.form.controls['selectedBy'].value;
    this.changeValue();

  }

  ngOnInit(): void {

  }

}
