import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SinglefruitComponent } from './singlefruit/singlefruit.component';
import { FruitlistdataService } from '../fruitlistdata.service';

@Component({
  selector: 'app-fruitlist',
  standalone: true,
  imports: [CommonModule, SinglefruitComponent],
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.scss'
})
export class FruitlistComponent {
 
  /* Service zugreifen */
  fruitlistdata = inject(FruitlistdataService)

    /* 18 */
  addComment(comment:string, index:number){
    //console.log(comment)// um zu testen ob es funktioniert
   /*   this.fruitlistdata.fruitlist[index].reviews.push({ //19
      name: "AmourLom",
      text: comment,
    })  */
   this.fruitlistdata.addCommentToFruit(comment,index);
  }

/*   numberLog(index:number){
    console.log(index);
  }
  nameLog(name:string){
    console.log(name);
  } */

}
