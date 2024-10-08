import { Component, EventEmitter, Input, Output } from '@angular/core';
import {FormsModule } from '@angular/forms'


@Component({
  selector: 'app-singlefruit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './singlefruit.component.html',
  styleUrl: './singlefruit.component.scss'
})
export class SinglefruitComponent {
@Input()fruit =   {
  name: "Apfel",
  img:"apple.png",
  description: "Äpfel sind aufgrund ihres hohen Wassergehalts kalorienarm und enthalten nur Spuren von Fett und Eiweiß, dafür aber rund zwei Prozent Ballaststoffe und etwa elf Prozent Kohlenhydrate. Äpfel enthalten auch viele Vitamine und Mineralstoffe und sind daher eine wichtige Quelle für uns - zum Beispiel für Vitamin C.",
  genus: "Kernobstgewächsen innerhalb der Familie der Rosengewächse",
  stars: 2.3,
  reviews:[{name: "Waldemar W.", text: "gut für Obstsalat"},{name: "Olaf P.", text: "Kann man mal machen"}],
};
/* input in Typescript */
inputData = "";

@Output()fruitName = new EventEmitter<string>();

sendInputData(){
  this.fruitName.emit(this.inputData)//18
  this.inputData = "";
  //console.log(this.inputData);
  //this.inputData = "gibt ein comments"
}

}
