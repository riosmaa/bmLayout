import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';


@Component({
  selector: 'app-right-side-bar',
  templateUrl: './right-side-bar.component.html',
  styleUrls: ['./right-side-bar.component.scss']
})
export class RightSideBarComponent implements OnInit {

  displayedColumns: string[] = ['select','id', 'CIF', 'BorrowerName'];
  dataSource = new MatTableDataSource<PeriodicElement>(CIFS);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  selection = new SelectionModel<PeriodicElement>(true, []);


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

}


export interface PeriodicElement {
  
  id: number;
  CIF: string; 
  BorrowerName: string; 
}

const CIFS: PeriodicElement[] = [
  { id: 1,  CIF: 'PRT9064026' , BorrowerName: 'H.S.U HELLENIC SUPPLY UNION A.E' },
  { id: 2,  CIF: 'EYV9140682' , BorrowerName: 'TERRAKAT M ΕΠΕ ΣΑΜΑΡΑΣ ΙΩΑΝΝΗΣ ΜΟΝΟΠΡ. ΕΠΕ' },
  { id: 3,  CIF: 'LLB9118291' , BorrowerName: 'ΝΙΚΗ ΒΑΜΒΟΥΚΟΥ' },
  { id: 4,  CIF: 'PAN9057149' , BorrowerName: 'ΒΑΣΙΛΙΚΗ ΚΙΣΚΗΡΑ' },
  { id: 5,  CIF: 'ATE6171401' , BorrowerName: 'ΒΑΙΟΣ ΚΟΥΤΟΒΑΣ' },
  { id: 6,  CIF: 'ACH9153265' , BorrowerName: 'ΓΕΩΡΓΙΟΣ ΠΑΠΟΥΛΙΑΣ' },
  { id: 7,  CIF: 'ATE5025381' , BorrowerName: 'ΘΕΟΔΩΡΑ ΠΑΠΑΜΑΥΡΟΥΔΗ' },
  { id: 8,  CIF: 'TXT9024358' , BorrowerName: ' ΓΕΩΡΓΙΟΣ ΚΟΡΔΑΛΗΣ ΚΑΙ ΣΙΑ ΟΕ' },
  { id: 9,  CIF: 'LLB9116861' , BorrowerName: 'ΕΥΣΤΡΑΤΙΟΣ ΨΩΜΟΣ' },
  { id: 10, CIF: 'ATE7676698' , BorrowerName: 'ΣΟΦΙΑ ΑΒΡΑΜΙΔΟΥ' },
  { id: 11, CIF: 'PEL9124918' , BorrowerName: '- ΠΑΠΑΓΙΑΝΝΟΠΟΥΛΟΣ CARGO ΑΕ' },
  { id: 12, CIF: 'DOD9148038' , BorrowerName: 'ΣΕΒΑΣΤΗ ΜΑΚΡΗ'},
  { id: 13, CIF: 'PRT9062544' , BorrowerName: 'ΑΛΕΞΑΝΔΡΟΣ ΚΕΛΕΣΙΔΗΣ' },
  { id: 14, CIF: 'TXT9022496' , BorrowerName: 'ΜΑΡΙΑ ΒΑΡΒΕΤΑΚΗ' },
  { id: 15, CIF: 'PRB9091313' , BorrowerName: 'ΓΕΩΡΓΙΟΣ ΣΤΑΜΑΤΙΑΔΗΣ' },
  { id: 16, CIF: 'TXT9015441' , BorrowerName: 'ΕΜΜΑΝΟΥΗΛ ΣΟΥΦΑΛΙΔΑΚΗΣ'},
  { id: 17, CIF: 'ATE5847181' , BorrowerName: 'ΑΘΑΝΑΣΙΟΣ ΚΑΡΟΠΛΕΣΗΣ'},
  { id: 18, CIF: 'ATE5808824' , BorrowerName: 'ΠΑΝΑΓΙΩΤΗΣ ΓΙΑΝΝΙΤΣΗΣ'},
  { id: 19, CIF: 'ATE1301676' , BorrowerName: 'ΑΝΤΩΝΙΟΣ ΧΕΛΙΟΥΔΑΚΗΣ' },
  { id: 20, CIF: 'TXT9004238' , BorrowerName: 'ΚΩΝΣΤΑΝΤΙΝΟΣ ΟΙΚΟΝΟΜΟΠΟΥΛΟΣ'},
];



