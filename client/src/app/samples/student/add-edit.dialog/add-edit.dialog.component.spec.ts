import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDialogComponent } from './add-edit.dialog.component';

describe('AddEdit.DialogComponent', () => {
  let component: AddEditDialogComponent;
  let fixture: ComponentFixture<AddEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component.dialogRef).toBeDefined();
  // });
});
