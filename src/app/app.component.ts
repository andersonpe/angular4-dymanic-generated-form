import { Component } from '@angular/core';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[QuestionService]
})
export class AppComponent {
  questions: any[];
  title = 'app';

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }

}
