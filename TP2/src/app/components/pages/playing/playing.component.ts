import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { GamesService } from 'src/app/services/games.service'
import { SessionService } from 'src/app/services/session.service'

@Component({
  selector: 'app-playing',
  templateUrl: './playing.component.html',
  styleUrls: ['./playing.component.css']
})
export class PlayingComponent implements OnInit {
  helpOverlayVisible = false
  orientation: string
  id = 0

  constructor(
    private route: ActivatedRoute,
    private sessionService: SessionService,
    private gamesService: GamesService
  ) {
    this.orientation = window.screen.orientation.type
  }

  ngOnInit(): void {
    window.addEventListener('orientationchange', () => {
      this.orientation = window.screen.orientation.type
    })
    this.route.paramMap.subscribe((p) => {
      this.id = parseInt(p.get('ID')!)
      if (
        this.gamesService.getById(this.id).premium &&
        !this.sessionService.userIsPremium()
      )
        this.id = 0
    })
  }

  toggleHelpOverlay(): void {
    this.helpOverlayVisible = !this.helpOverlayVisible
  }
}
