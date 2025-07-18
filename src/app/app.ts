import { Component, signal ,computed} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Items } from './items/items';
//decorator


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Items],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'

  // or use inline template and styles
  // template:`<h1>any thiing</h1>`,
  // styles:[`.class{color:blue;}`]
})
export class App {

}
