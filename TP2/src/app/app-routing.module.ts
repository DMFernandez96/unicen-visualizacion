import { Injectable, NgModule } from "@angular/core";
import {
	Routes,
	RouterModule,
	CanActivate,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	UrlTree,
} from "@angular/router";
import { HomeComponent } from "./components/pages/home/home.component";

import { ForPlayingComponent } from "./components/pages/for-playing/for-playing.component";
import { PlayingComponent } from "./components/pages/playing/playing.component";
import { RegisterComponent } from "./components/pages/register/register.component";
import { LoginComponent } from "./components/pages/login/login.component";
import { SearchComponent } from "./components/pages/search/search.component";
import { CategoryComponent } from "./components/pages/category/category.component";
import { ProfileComponent } from "./components/pages/profile/profile.component";
import { FavoritesComponent } from "./components/pages/favorites/favorites.component";
import { SessionService } from "./services/session.service";

@Injectable()
class LoginRequired implements CanActivate {
	constructor(private sessionService: SessionService) {}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): boolean {
		return this.sessionService.isLoggedIn();
	}
}

const routes: Routes = [
	{ path: "", component: HomeComponent },
	{ path: "juego/:ID", component: ForPlayingComponent },
	{ path: "jugando/:ID", component: PlayingComponent },
	{ path: "busqueda", component: SearchComponent },
	{ path: "categorias/:ID", component: CategoryComponent },
	{ path: "crear-cuenta", component: RegisterComponent },
	{ path: "iniciar-sesion", component: LoginComponent },
	{
		path: "perfil",
		component: ProfileComponent,
		canActivate: [LoginRequired],
	},
	{
		path: "favoritos",
		component: FavoritesComponent,
		canActivate: [LoginRequired],
	},

	{ path: "**", redirectTo: "" },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: [LoginRequired],
})
export class AppRoutingModule {}
