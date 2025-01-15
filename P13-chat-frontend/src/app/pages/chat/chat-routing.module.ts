import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import { ChatComponent } from "./chat.component";

const routes : Routes = [
  { title: 'Conversation', path: '', component : ChatComponent },

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ChatRoutingModule { }
