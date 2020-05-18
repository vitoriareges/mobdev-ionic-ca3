import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-characters-details',
  templateUrl: './characters-details.page.html',
  styleUrls: ['./characters-details.page.scss'],
})
export class CharactersDetailsPage implements OnInit {
  character: any;
  characterId = null;
  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }
  ngOnInit() {
    this.characterId = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getCharacter(this.characterId).subscribe(res => {
      this.character = res[0];
      console.log(JSON.stringify(this.character.character_id));
    });
  }
}
